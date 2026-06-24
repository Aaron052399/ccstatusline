import type { RenderContext } from '../types/RenderContext';
import type { Settings } from '../types/Settings';
import type {
    CustomKeybind,
    Widget,
    WidgetEditorDisplay,
    WidgetItem
} from '../types/Widget';

import { t } from './index';

/**
 * Translate known inline prefixes in render output.
 * Only translates exact prefix matches to avoid mangling data.
 */
const RENDER_PREFIXES: Record<string, string> = {
    'Context: ': '上下文: ',
    'Total: ': '总计: ',
    'In: ': '输入: ',
    'Out: ': '输出: ',
    'Cached: ': '缓存: ',
    'Block ': '区块 ',
    'Block: ': '区块: ',
    'Reset ': '重置 ',
    'Reset: ': '重置: ',
    'Cache Hit: ': '缓存命中: ',
    'Cache Read: ': '缓存读取: ',
    'Cache Write: ': '缓存写入: ',
    'Session: ': '会话: ',
    'Weekly ': '每周 ',
    'Weekly: ': '每周: ',
    'Weekly Reset ': '每周重置 ',
    'Weekly Reset: ': '每周重置: ',
    'Weekly Sonnet: ': '每周 Sonnet: ',
    'Weekly Opus: ': '每周 Opus: ',
    'Overage: ': '超额: ',
    'Overage Left: ': '剩余额度: ',
    'Overage Used: ': '已用额度: ',
    'Mem: ': '内存: '
};

function translateRenderOutput(output: string): string {
    // Translate known inline prefixes
    for (const [en, zh] of Object.entries(RENDER_PREFIXES)) {
        if (output.startsWith(en)) {
            return zh + output.slice(en.length);
        }
    }
    return output;
}

/**
 * Wraps a Widget instance to translate its display strings.
 * This is the key to keeping upstream merge conflicts minimal:
 * widget source files are NOT modified — only the returned strings are translated.
 */
export function translateWidget(widget: Widget): Widget {
    return new Proxy(widget, {
        get(target, prop, receiver) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const value = Reflect.get(target, prop, receiver);

            if (typeof value !== 'function') {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                return value;
            }

            switch (prop) {
                case 'getDescription':
                    return () => t(target.getDescription());
                case 'getDisplayName':
                    return () => t(target.getDisplayName());
                case 'getCategory':
                    return () => t(target.getCategory());
                case 'getEditorDisplay':
                    return (item: WidgetItem): WidgetEditorDisplay => {
                        const display = target.getEditorDisplay(item);
                        return {
                            displayText: t(display.displayText),
                            modifierText: display.modifierText ? t(display.modifierText) : undefined
                        };
                    };
                case 'getCustomKeybinds':
                    return (item?: WidgetItem): CustomKeybind[] => {
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        const keybinds = target.getCustomKeybinds!(item);
                        return keybinds.map(kb => ({
                            ...kb,
                            label: t(kb.label)
                        }));
                    };
                case 'render':
                    return (item: WidgetItem, context: RenderContext, settings: Settings): string | null => {
                        const result = target.render(item, context, settings);
                        if (result === null) {
                            return null;
                        }
                        // Translate known inline prefixes like "Context: "
                        return translateRenderOutput(result);
                    };
                default:
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
                    return value.bind(target);
            }
        }
    });
}
