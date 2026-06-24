/**
 * Chinese (Simplified) translation dictionary for ccstatusline-zh
 *
 * Key: original English string from upstream widgets/TUI
 * Value: Chinese translation
 *
 * To add translations for new widgets:
 *   1. Find the English string in the widget source
 *   2. Add an entry here
 *   3. That's it — the widget wrapper handles the rest
 */
export const zhCN: Record<string, string> = {
    // ─── Categories ───────────────────────────────────────────
    'Core': '核心',
    'Session': '会话',
    'Usage': '用量',
    'Context': '上下文',
    'Cache': '缓存',
    'Tokens': 'Token',
    'Token Speed': 'Token 速度',
    'Git': 'Git',
    'Jujutsu': 'Jujutsu',
    'Environment': '环境',
    'Custom': '自定义',
    'Layout': '布局',
    'Other': '其他',

    // ─── Layout widgets ───────────────────────────────────────
    'Separator': '分隔符',
    'A separator character between status line widgets': '状态栏组件之间的分隔字符',
    'Flex Separator': '弹性分隔符',
    'Expands to fill available terminal width': '自动扩展以填满终端宽度',

    // ─── Core widgets ─────────────────────────────────────────
    'Model': '模型',
    'Displays the Claude model name (e.g., Claude 3.5 Sonnet)': '显示 Claude 模型名称（如 Claude 3.5 Sonnet）',

    'Output Style': '输出风格',
    'Shows the current Claude Code output style': '显示当前 Claude Code 输出风格',

    'Version': '版本',
    'Shows Claude Code CLI version number': '显示 Claude Code CLI 版本号',

    'Thinking Effort': '思考力度',
    'Displays the current thinking effort level (low, medium, high, xhigh, max).\nClaude Code reports Ultracode as xhigh in status line data; Ultracode is not exposed as a separate effort level.\nUnknown levels are shown with a trailing "?" (e.g. "super-max?").\nMay be incorrect when multiple Claude Code sessions are running due to current Claude Code limitations.':
        '显示当前思考力度等级（low、medium、high、xhigh、max）。\nClaude Code 在状态栏数据中将 Ultracode 报告为 xhigh；Ultracode 不作为独立力度等级暴露。\n未知等级会显示 "?" 后缀（如 "super-max?"）。\n当多个 Claude Code 会话同时运行时可能不准确。',

    'Vim Mode': 'Vim 模式',
    'Displays current vim editor mode': '显示当前 Vim 编辑器模式',

    'Voice Status': '语音状态',
    'Shows whether Claude Code voice input is enabled': '显示 Claude Code 语音输入是否启用',

    'Remote Control Status': '远程控制状态',
    'Shows whether Claude Code remote control is attached to the current session': '显示 Claude Code 远程控制是否已连接到当前会话',

    // ─── Session widgets ──────────────────────────────────────
    'Session Clock': '会话时钟',
    'Shows elapsed time since current session started': '显示当前会话开始后的经过时间',

    'Session Cost': '会话费用',
    'Shows the total session cost in USD': '显示当前会话总费用（美元）',

    'Session Name': '会话名称',
    'Shows the session name set via /rename command in Claude Code': '显示通过 Claude Code /rename 命令设置的会话名称',

    'Claude Session ID': 'Claude 会话 ID',
    'Shows the current Claude Code session ID reported in status JSON': '显示状态 JSON 中报告的当前 Claude Code 会话 ID',

    'Claude Account Email': 'Claude 账户邮箱',
    'Displays the email of the currently logged-in Claude account': '显示当前登录的 Claude 账户邮箱',

    'Skills': '技能',
    'Shows Claude Code skill invocations from hook data': '显示来自 hook 数据的 Claude Code 技能调用',

    // ─── Context widgets ──────────────────────────────────────
    'Context Length': '上下文长度',
    'Shows the current context window size in tokens': '显示当前上下文窗口大小（token 数）',

    'Context Window': '上下文窗口',
    'Shows the total context window size for the current model': '显示当前模型的总上下文窗口大小',

    'Context %': '上下文百分比',
    'Shows percentage of context window used or remaining': '显示上下文窗口已用或剩余百分比',

    'Context % (usable)': '上下文百分比（可用）',
    'Shows percentage of usable context window used or remaining (80% of max before auto-compact)':
        '显示可用上下文窗口已用或剩余百分比（自动压缩前最大值的 80%）',

    'Context Bar': '上下文进度条',
    'Shows context usage as a progress bar': '以进度条形式显示上下文用量',
    'Context: ': '上下文: ',

    'Compaction Counter': '压缩计数器',
    'Count of context compaction events in the current session.': '当前会话中上下文压缩事件的次数。',
    'Reclaimed': '已回收',

    // ─── Token widgets ────────────────────────────────────────
    'Tokens Input': '输入 Token',
    'Shows input token count for the current session': '显示当前会话的输入 Token 数量',

    'Tokens Output': '输出 Token',
    'Shows output token count for the current session': '显示当前会话的输出 Token 数量',

    'Tokens Cached': '缓存 Token',
    'Shows cached token count for the current session': '显示当前会话的缓存 Token 数量',

    'Tokens Total': '总 Token',
    'Shows total token count (input + output + cache) for the current session':
        '显示当前会话的总 Token 数量（输入 + 输出 + 缓存）',

    // ─── Cache widgets ────────────────────────────────────────
    'Cache Hit Rate': '缓存命中率',
    'Shows prompt cache hit rate (cache reads vs cache writes)': '显示提示词缓存命中率（缓存读取 vs 缓存写入）',

    'Cache Read': '缓存读取',
    'Shows cache read tokens served from cache, with context share': '显示从缓存提供的读取 Token 数及上下文占比',

    'Cache Write': '缓存写入',
    'Shows cache write tokens written to cache, with context share': '显示写入缓存的 Token 数及上下文占比',

    // ─── Usage widgets ────────────────────────────────────────
    'Block Timer': '区块计时器',
    'Shows current 5hr block elapsed time or progress': '显示当前 5 小时区块的经过时间或进度',

    'Block Reset Timer': '区块重置计时器',
    'Shows time remaining until current 5hr block reset window': '显示距离当前 5 小时区块重置窗口的剩余时间',

    'Session Usage': '会话用量',
    'Shows daily/session API usage percentage': '显示每日/会话 API 用量百分比',

    'Weekly Usage': '每周用量',
    'Shows weekly API usage percentage': '显示每周 API 用量百分比',

    'Weekly Sonnet Usage': '每周 Sonnet 用量',
    'Shows weekly Sonnet API usage percentage': '显示每周 Sonnet API 用量百分比',

    'Weekly Opus Usage': '每周 Opus 用量',
    'Shows weekly Opus API usage percentage': '显示每周 Opus API 用量百分比',

    'Weekly Reset Timer': '每周重置计时器',
    'Shows time remaining until weekly usage reset': '显示距离每周用量重置的剩余时间',

    'Extra Usage Utilization': '额外用量利用率',
    'Shows extra usage (pay-as-you-go) utilization percentage': '显示额外用量（按需付费）的利用率百分比',

    'Extra Usage Remaining': '剩余额外用量',
    'Shows remaining USD of your monthly extra usage limit': '显示每月额外用量限额的剩余额度（美元）',

    'Extra Usage Used': '已用额外用量',
    'Shows USD spent on extra usage (pay-as-you-go overage)': '显示额外用量已花费金额（按需付费超出部分）',

    // ─── Token Speed widgets ──────────────────────────────────
    'Input Speed': '输入速度',
    'Shows session-average input token speed (tokens/sec). Optional window: 0-120 seconds (0 = full-session average).':
        '显示会话平均输入 Token 速度（token/秒）。可选窗口: 0-120 秒（0 = 全会话平均）。',
    'Output Speed': '输出速度',
    'Shows session-average output token speed (tokens/sec). Optional window: 0-120 seconds (0 = full-session average).':
        '显示会话平均输出 Token 速度（token/秒）。可选窗口: 0-120 秒（0 = 全会话平均）。',
    'Total Speed': '总速度',
    'Shows session-average total token speed (tokens/sec). Optional window: 0-120 seconds (0 = full-session average).':
        '显示会话平均总 Token 速度（token/秒）。可选窗口: 0-120 秒（0 = 全会话平均）。',

    // ─── Git widgets ──────────────────────────────────────────
    'Git Branch': 'Git 分支',
    'Shows the current git branch name': '显示当前 Git 分支名',

    'Git Changes': 'Git 变更',
    'Shows git changes count (+insertions, -deletions)': '显示 Git 变更数量（+插入, -删除）',

    'Git Insertions': 'Git 插入',
    'Shows git insertions count': '显示 Git 插入行数',

    'Git Deletions': 'Git 删除',
    'Shows git deletions count': '显示 Git 删除行数',

    'Git Staged Files': 'Git 暂存文件',
    'Shows count of staged files': '显示暂存文件数量',

    'Git Unstaged Files': 'Git 未暂存文件',
    'Shows count of unstaged files': '显示未暂存文件数量',

    'Git Untracked Files': 'Git 未跟踪文件',
    'Shows count of untracked files': '显示未跟踪文件数量',

    'Git Clean Status': 'Git 干净状态',
    'Shows \u2713 when the working tree is clean and \u2717 when it is dirty': '工作区干净时显示 \u2713，有改动时显示 \u2717',

    'Git Root Dir': 'Git 根目录',
    'Shows the git repository root directory name': '显示 Git 仓库根目录名',

    'Git PR/MR': 'Git PR/MR',
    'Shows PR/MR info for the current branch (clickable link, status, title)': '显示当前分支的 PR/MR 信息（可点击链接、状态、标题）',

    'Git Worktree': 'Git 工作树',
    'Shows the current git worktree name': '显示当前 Git 工作树名称',

    'Git Status': 'Git 状态',
    'Shows git status indicators: + staged, * unstaged, ? untracked, ! conflicts':
        '显示 Git 状态指示器: + 已暂存, * 未暂存, ? 未跟踪, ! 冲突',
    'Conflicts': '冲突',
    'Staged': '已暂存',
    'Unstaged': '未暂存',
    'Untracked': '未跟踪',

    'Git Staged': 'Git 暂存',
    'Shows + when there are staged changes': '有暂存变更时显示 +',

    'Git Unstaged': 'Git 未暂存',
    'Shows * when there are unstaged changes': '有未暂存变更时显示 *',

    'Git Untracked': 'Git 未跟踪',
    'Shows ? when there are untracked files': '有未跟踪文件时显示 ?',

    'Git Ahead/Behind': 'Git 领先/落后',
    'Shows commits ahead/behind upstream (\u21912\u21933)': '显示相对上游的领先/落后提交数（\u21912\u21933）',
    'Ahead': '领先',
    'Behind': '落后',

    'Git Conflicts': 'Git 冲突',
    'Shows count of merge conflicts': '显示合并冲突数量',

    'Git SHA': 'Git SHA',
    'Shows short commit hash (SHA)': '显示短提交哈希（SHA）',

    'Git Origin Owner': 'Git Origin 所有者',
    'Shows the origin remote owner/organization': '显示 origin 远程的所有者/组织',

    'Git Origin Repo': 'Git Origin 仓库',
    'Shows the origin remote repository name': '显示 origin 远程仓库名',

    'Git Origin Owner/Repo': 'Git Origin 所有者/仓库',
    'Shows the origin remote as owner/repo': '显示 origin 远程的 所有者/仓库',

    'Git Upstream Owner': 'Git 上游所有者',
    'Shows the upstream remote owner/organization': '显示上游远程的所有者/组织',

    'Git Upstream Repo': 'Git 上游仓库',
    'Shows the upstream remote repository name': '显示上游远程仓库名',

    'Git Upstream Owner/Repo': 'Git 上游所有者/仓库',
    'Shows the upstream remote as owner/repo': '显示上游远程的 所有者/仓库',

    'Git Is Fork': 'Git Fork 状态',
    'Shows fork indicator when repo is a fork of upstream': '当仓库是上游的 fork 时显示指示器',

    'Git Worktree Mode': 'Git 工作树模式',
    'Shows indicator when Claude Code is in worktree mode': '当 Claude Code 处于工作树模式时显示指示器',

    'Git Worktree Name': 'Git 工作树名称',
    'Name of the active worktree': '当前活动工作树的名称',

    'Git Worktree Branch': 'Git 工作树分支',
    'Git branch name for the active worktree': '当前活动工作树的 Git 分支名',

    'Git Worktree Original Branch': 'Git 工作树原始分支',
    'Git branch checked out before entering the worktree': '进入工作树之前检出的 Git 分支',

    // ─── Jujutsu widgets ─────────────────────────────────────
    'JJ Bookmarks': 'JJ 书签',
    'Shows the current jujutsu bookmark(s)': '显示当前 Jujutsu 书签',

    'JJ Workspace': 'JJ 工作区',
    'Shows the current jujutsu workspace name': '显示当前 Jujutsu 工作区名称',

    'JJ Root Dir': 'JJ 根目录',
    'Shows the jujutsu repository root directory name': '显示 Jujutsu 仓库根目录名',

    'JJ Changes': 'JJ 变更',
    'Shows jujutsu changes count (+insertions, -deletions)': '显示 Jujutsu 变更数量（+插入, -删除）',

    'JJ Insertions': 'JJ 插入',
    'Shows jujutsu insertions count': '显示 Jujutsu 插入行数',

    'JJ Deletions': 'JJ 删除',
    'Shows jujutsu deletions count': '显示 Jujutsu 删除行数',

    'JJ Description': 'JJ 描述',
    'Shows the current jujutsu change description': '显示当前 Jujutsu 变更描述',

    'JJ Revision': 'JJ 版本',
    'Shows the current jujutsu change ID (short)': '显示当前 Jujutsu 变更 ID（短格式）',

    // ─── Environment widgets ──────────────────────────────────
    'Current Working Dir': '当前工作目录',
    'Shows the current working directory': '显示当前工作目录',

    'Terminal Width': '终端宽度',
    'Shows current terminal width in columns': '显示当前终端宽度（列数）',

    'Memory Usage': '内存用量',
    'Shows system memory usage (used/total)': '显示系统内存用量（已用/总量）',

    // ─── Custom widgets ───────────────────────────────────────
    'Custom Text': '自定义文本',
    'Displays user-defined custom text': '显示用户自定义的文本',

    'Custom Symbol': '自定义符号',
    'Displays a custom symbol or emoji (single character)': '显示自定义符号或表情（单个字符）',

    'Custom Command': '自定义命令',
    'Executes a custom shell command and displays output': '执行自定义 shell 命令并显示输出',

    'Link': '链接',
    'Displays a clickable terminal hyperlink using OSC 8': '使用 OSC 8 显示可点击的终端超链接',

    // ─── Time format labels ───────────────────────────────────
    'hr': '小时',
    'm': '分钟',
    'd': '天',

    // ─── Keybind labels ───────────────────────────────────────
    '(p)rogress toggle': '(p)进度条切换',
    '(u)sed/remaining': '(u)已用/剩余',
    '(f)ormat': '(f)格式',
    '(n)erd font': '(n)erd 字体',
    '(s)plit by trigger': '(s)按触发拆分',
    '(t)okens reclaimed': '(t)已回收 Token',
    '(h)ide when zero': '(h)为零时隐藏',
    '(l)ink to repo': '(l)链接到仓库',
    '(h)ide when not fork': '(h)非 fork 时隐藏',
    '(o)wner only when fork': '(o)仅 fork 时显示所有者',
    '(s)tatus': '(s)状态',
    '(t)itle': '(t)标题',
    '(l)ink to IDE': '(l)链接到 IDE',
    '(h)ide \'no jj\' message': '(h)隐藏"无 jj"消息',
    '(h)ours only': '(h)仅小时',
    '(h)ome ~': '(h)主目录 ~',
    '(s)egments': '(s)路径段',
    '(f)ish style': '(f)ish 风格',
    '(e)dit cmd': '(e)编辑命令',
    '(w)idth': '(w)宽度',
    '(t)imeout': '(t)超时',
    '(p)reserve colors': '(p)保留颜色',
    '(e)dit symbol': '(e)编辑符号',
    '(e)dit text': '(e)编辑文本',
    '(u)rl': '(u)网址',
    '(v)iew: last/count/list': '(v)查看: 最后/计数/列表',
    '(h)ide when empty': '(h)为空时隐藏',
    '(l)imit': '(l)限制',
    '(t)urn/session': '(t)轮次/会话',
    '(h)ide if disabled': '(h)禁用时隐藏',
    '(h)ide \'no git\' message': '(h)隐藏"无 git"消息',
    '(h)ide when no remote': '(h)无远程时隐藏',
    'in(v)ert fill': '反(v)转填充',
    '(s)hort time': '(s)短时间',
    '(t)ime cursor': '(t)时间光标',
    '(t)imestamp': '(t)时间戳',
    '12/24 (h)our': '12/24 (h)小时',
    '(w)eekday': '(w)星期',
    'time(z)one': '时(z)区',
    '(l)ocale': '(l)区域',

    // ─── TUI strings ──────────────────────────────────────────
    'Continue': '继续',
    'Exit': '退出',
    'Install Complete': '安装完成',
    'Update Complete': '更新完成',
    'Select Line to Edit Items': '选择行以编辑组件',
    'Select Line to Edit Colors': '选择行以编辑颜色',
    'Select Line': '选择行',
    'Select Line to Edit': '选择行以编辑',
    'Add Widget': '添加组件',
    'Insert Widget': '插入组件',
    'Change Widget Type': '更改组件类型',
    'All': '全部',
    '← Back': '← 返回',
    'Yes': '是',
    'No': '否',
    'Unknown widget type': '未知组件类型',
    'Unknown editor mode': '未知编辑模式',
    'Powerline mode active: manual separators disabled': 'Powerline 模式已启用: 手动分隔符已禁用',
    'Default separator active: manual separators disabled': '默认分隔符已启用: 手动分隔符已禁用',
    'Pinned global install': '固定版本全局安装',
    'Auto-update': '自动更新',

    // ─── Locale editor ────────────────────────────────────────
    'Locale': '区域设置',
    'Current:': '当前:',
    'Search: ': '搜索: ',
    'Type to search, Up/Down select, Enter save, ESC cancel': '输入搜索, 上/下选择, 回车保存, ESC 取消',
    'No locales match the search.': '没有匹配的区域设置。',
    'Showing': '显示',
    'of': '/',
    'Current system locale': '当前系统区域设置',
    'Configured locale': '已配置的区域设置',
    'Default reset timestamp locale': '默认重置时间戳区域设置',
    'Custom locale': '自定义区域设置',

    // ─── Color menu ───────────────────────────────────────────
    'Enter START hex color (without #):': '输入起始十六进制颜色（不含 #）:',
    'Enter END hex color (without #):': '输入结束十六进制颜色（不含 #）:',

    // ─── Shared keybind labels ────────────────────────────────
    'In: ': '输入: ',
    'Out: ': '输出: '
};

/**
 * Untranslated strings that should remain in English.
 * These are technical terms, abbreviations, or identifiers
 * where translation would reduce clarity.
 */
export const zhCNUntranslated = new Set([
    'Git', 'JJ', 'SHA', 'PR', 'MR', 'OSC', 'CLI', 'ID', 'USD',
    'API', 'Token', 'Vim', 'Powerline', 'npm', 'bun', 'npx', 'bunx',
    'Claude', 'Claude Code', 'Sonnnet', 'Opus', 'Ultracode'
]);
