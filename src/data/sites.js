// 站点数据 - 程序员导航
export const categories = [
  {
    id: 'community',
    name: '技术社区',
    icon: 'Users',
    sites: [
      { name: 'GitHub', url: 'https://github.com', desc: '全球最大的代码托管平台', icon: '🐙', tags: ['代码托管', '开源'], hot: true },
      { name: 'Stack Overflow', url: 'https://stackoverflow.com', desc: '程序员问答社区', icon: '📚', tags: ['问答', '英文'], hot: true },
      { name: '掘金', url: 'https://juejin.cn', desc: '中文技术社区', icon: '📖', tags: ['中文', '前端'], hot: true },
      { name: 'CSDN', url: 'https://www.csdn.net', desc: '中文IT社区', icon: '💻', tags: ['中文', '博客'] },
      { name: '知乎', url: 'https://www.zhihu.com', desc: '中文问答社区', icon: '🤔', tags: ['问答', '中文'] },
      { name: 'SegmentFault', url: 'https://segmentfault.com', desc: '中文开发者社区', icon: '⚡', tags: ['中文', '问答'] },
      { name: 'V2EX', url: 'https://www.v2ex.com', desc: '创意工作者社区', icon: '💬', tags: ['中文', '社区'] },
      { name: '开源中国', url: 'https://www.oschina.net', desc: '开源技术社区', icon: '🌟', tags: ['中文', '开源'] },
    ]
  },
  {
    id: 'tools',
    name: '常用工具',
    icon: 'Wrench',
    sites: [
      { name: 'JSON 格式化', url: 'https://json.cn', desc: 'JSON 在线解析格式化', icon: '📝', tags: ['JSON', '工具'], hot: true },
      { name: '正则表达式', url: 'https://regex101.com', desc: '正则表达式测试工具', icon: '🔍', tags: ['正则', '工具'] },
      { name: 'Can I Use', url: 'https://caniuse.com', desc: '浏览器兼容性查询', icon: '🌐', tags: ['CSS', '兼容性'], hot: true },
      { name: 'Carbon', url: 'https://carbon.now.sh', desc: '代码图片生成器', icon: '🎨', tags: ['代码', '分享'] },
      { name: 'TinyPNG', url: 'https://tinypng.com', desc: '图片压缩工具', icon: '🖼️', tags: ['图片', '压缩'] },
      { name: 'Base64 编解码', url: 'https://base64.guru', desc: 'Base64 在线转换', icon: '🔢', tags: ['编码', '工具'] },
      { name: 'MD5 加密', url: 'https://www.cmd5.com', desc: 'MD5 在线加密', icon: '🔐', tags: ['加密', '工具'] },
      { name: 'Unix 时间戳', url: 'https://tool.lu/timestamp/', desc: '时间戳转换工具', icon: '⏰', tags: ['时间', '工具'] },
    ]
  },
  {
    id: 'devtools',
    name: '开发工具',
    icon: 'Code2',
    sites: [
      { name: 'VS Code', url: 'https://code.visualstudio.com', desc: '微软开源代码编辑器', icon: '📝', tags: ['编辑器', 'IDE'], hot: true, official: true },
      { name: 'WebStorm', url: 'https://www.jetbrains.com/webstorm', desc: 'JetBrains 前端 IDE', icon: '🚀', tags: ['IDE', '付费'] },
      { name: 'Cursor', url: 'https://cursor.sh', desc: 'AI 驱动的代码编辑器', icon: '✨', tags: ['AI', '编辑器'], hot: true },
      { name: 'Postman', url: 'https://www.postman.com', desc: 'API 开发测试工具', icon: '📮', tags: ['API', '测试'], hot: true },
      { name: 'Docker Hub', url: 'https://hub.docker.com', desc: 'Docker 镜像仓库', icon: '🐳', tags: ['Docker', '容器'] },
      { name: 'GitLab', url: 'https://gitlab.com', desc: '代码托管与 CI/CD', icon: '🦊', tags: ['代码托管', 'DevOps'] },
      { name: 'Jenkins', url: 'https://www.jenkins.io', desc: '开源自动化服务器', icon: '🔧', tags: ['CI/CD', '自动化'] },
      { name: 'Figma', url: 'https://www.figma.com', desc: '协作设计工具', icon: '🎨', tags: ['设计', 'UI'], hot: true },
    ]
  },
  {
    id: 'ai',
    name: 'AI 编程',
    icon: 'Brain',
    sites: [
      { name: 'ChatGPT', url: 'https://chat.openai.com', desc: 'OpenAI 对话模型', icon: '🤖', tags: ['AI', '对话'], hot: true },
      { name: 'Claude', url: 'https://claude.ai', desc: 'Anthropic AI 助手', icon: '🧠', tags: ['AI', '对话'], hot: true },
      { name: 'GitHub Copilot', url: 'https://github.com/features/copilot', desc: 'AI 代码补全工具', icon: '👨‍💻', tags: ['AI', '编程'], hot: true },
      { name: 'Codeium', url: 'https://codeium.com', desc: '免费 AI 代码补全', icon: '⚡', tags: ['AI', '免费'] },
      { name: 'TabNine', url: 'https://www.tabnine.com', desc: 'AI 代码助手', icon: '🔮', tags: ['AI', '编程'] },
      { name: 'Phind', url: 'https://www.phind.com', desc: 'AI 搜索引擎', icon: '🔎', tags: ['AI', '搜索'] },
      { name: 'Vercel AI SDK', url: 'https://sdk.vercel.ai', desc: 'AI 应用开发 SDK', icon: '▲', tags: ['AI', 'SDK'] },
      { name: 'Hugging Face', url: 'https://huggingface.co', desc: 'AI 模型社区', icon: '🤗', tags: ['AI', '模型'] },
    ]
  },
  {
    id: 'docs',
    name: '文档 & 手册',
    icon: 'BookOpen',
    sites: [
      { name: 'MDN Web Docs', url: 'https://developer.mozilla.org', desc: 'Web 技术权威文档', icon: '📚', tags: ['文档', 'Web'], hot: true, official: true },
      { name: 'DevDocs', url: 'https://devdocs.io', desc: '聚合 API 文档', icon: '📖', tags: ['文档', '聚合'] },
      { name: 'W3Schools', url: 'https://www.w3schools.com', desc: 'Web 技术教程', icon: '🎓', tags: ['教程', 'Web'] },
      { name: '菜鸟教程', url: 'https://www.runoob.com', desc: '中文编程教程', icon: '🐦', tags: ['中文', '教程'] },
      { name: '现代 JavaScript', url: 'https://zh.javascript.info', desc: 'JavaScript 教程', icon: '📘', tags: ['JS', '教程'] },
      { name: 'CSS Tricks', url: 'https://css-tricks.com', desc: 'CSS 技巧与教程', icon: '🎨', tags: ['CSS', '教程'] },
      { name: '阮一峰博客', url: 'https://www.ruanyifeng.com/blog', desc: '技术博客', icon: '✍️', tags: ['中文', '博客'] },
      { name: 'ES6 入门', url: 'https://es6.ruanyifeng.com', desc: 'ES6 标准入门', icon: '📗', tags: ['ES6', '教程'] },
    ]
  },
  {
    id: 'database',
    name: '数据库 & 中间件',
    icon: 'Database',
    sites: [
      { name: 'MySQL', url: 'https://www.mysql.com', desc: '开源关系型数据库', icon: '🐬', tags: ['数据库', 'SQL'], official: true },
      { name: 'PostgreSQL', url: 'https://www.postgresql.org', desc: '高级开源数据库', icon: '🐘', tags: ['数据库', 'SQL'] },
      { name: 'MongoDB', url: 'https://www.mongodb.com', desc: 'NoSQL 文档数据库', icon: '🍃', tags: ['数据库', 'NoSQL'] },
      { name: 'Redis', url: 'https://redis.io', desc: '内存数据结构存储', icon: '🔴', tags: ['缓存', 'NoSQL'], hot: true },
      { name: 'Elasticsearch', url: 'https://www.elastic.co', desc: '搜索与分析引擎', icon: '🔍', tags: ['搜索', '分析'] },
      { name: 'Kafka', url: 'https://kafka.apache.org', desc: '分布式流处理平台', icon: '📊', tags: ['消息队列', '流处理'] },
      { name: 'RabbitMQ', url: 'https://www.rabbitmq.com', desc: '消息队列中间件', icon: '🐰', tags: ['消息队列'] },
      { name: 'Nginx', url: 'https://nginx.org', desc: '高性能 Web 服务器', icon: '🌐', tags: ['服务器', '代理'], hot: true },
    ]
  },
  {
    id: 'mobile',
    name: '移动开发',
    icon: 'Smartphone',
    sites: [
      { name: 'Flutter', url: 'https://flutter.dev', desc: 'Google 跨平台框架', icon: '🦋', tags: ['跨平台', 'Dart'], hot: true, official: true },
      { name: 'React Native', url: 'https://reactnative.dev', desc: 'React 跨平台开发', icon: '⚛️', tags: ['跨平台', 'React'], hot: true },
      { name: 'Android Developer', url: 'https://developer.android.com', desc: 'Android 官方文档', icon: '🤖', tags: ['Android', '官方'], official: true },
      { name: 'iOS Developer', url: 'https://developer.apple.com', desc: 'Apple 开发者文档', icon: '🍎', tags: ['iOS', '官方'], official: true },
      { name: 'UniApp', url: 'https://uniapp.dcloud.net.cn', desc: '跨平台应用框架', icon: '📱', tags: ['跨平台', '中文'] },
      { name: 'Ionic', url: 'https://ionicframework.com', desc: '混合移动应用框架', icon: '⚡', tags: ['跨平台', 'Web'] },
      { name: 'Capacitor', url: 'https://capacitorjs.com', desc: '跨平台原生运行时', icon: '🔋', tags: ['跨平台'] },
      { name: 'Expo', url: 'https://expo.dev', desc: 'React Native 开发平台', icon: '📦', tags: ['React Native'] },
    ]
  },
  {
    id: 'cloud',
    name: '大数据 & 云计算',
    icon: 'Cloud',
    sites: [
      { name: 'AWS', url: 'https://aws.amazon.com', desc: '亚马逊云服务', icon: '☁️', tags: ['云', 'AWS'], hot: true, official: true },
      { name: '阿里云', url: 'https://www.aliyun.com', desc: '阿里巴巴云服务', icon: '🇨🇳', tags: ['云', '中文'], hot: true },
      { name: '腾讯云', url: 'https://cloud.tencent.com', desc: '腾讯云服务', icon: '🇨🇳', tags: ['云', '中文'] },
      { name: 'Hadoop', url: 'https://hadoop.apache.org', desc: '分布式计算框架', icon: '🐘', tags: ['大数据'] },
      { name: 'Spark', url: 'https://spark.apache.org', desc: '大数据处理引擎', icon: '⚡', tags: ['大数据'] },
      { name: 'Kubernetes', url: 'https://kubernetes.io', desc: '容器编排平台', icon: '☸️', tags: ['容器', 'K8s'], hot: true },
      { name: 'Terraform', url: 'https://www.terraform.io', desc: '基础设施即代码', icon: '🏗️', tags: ['IaC', 'DevOps'] },
      { name: 'Prometheus', url: 'https://prometheus.io', desc: '监控告警系统', icon: '🔥', tags: ['监控', 'DevOps'] },
    ]
  },
  {
    id: 'algorithm',
    name: '算法 & 面试',
    icon: 'BrainCircuit',
    sites: [
      { name: 'LeetCode', url: 'https://leetcode.cn', desc: '算法练习平台', icon: '💪', tags: ['算法', '面试'], hot: true },
      { name: '牛客网', url: 'https://www.nowcoder.com', desc: '笔试面试题库', icon: '🐮', tags: ['面试', '中文'], hot: true },
      { name: 'CodeWars', url: 'https://www.codewars.com', desc: '编程挑战平台', icon: '⚔️', tags: ['算法', '挑战'] },
      { name: 'HackerRank', url: 'https://www.hackerrank.com', desc: '编程技能测评', icon: '💻', tags: ['算法', '测评'] },
      { name: 'LintCode', url: 'https://www.lintcode.com', desc: '在线编程训练', icon: '📝', tags: ['算法', '中文'] },
      { name: 'VisuAlgo', url: 'https://visualgo.net', desc: '算法可视化', icon: '👁️', tags: ['算法', '可视化'] },
      { name: '一亩三分地', url: 'https://www.1point3acres.com', desc: '留学求职论坛', icon: '🌾', tags: ['求职', '中文'] },
      { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org', desc: '计算机科学门户', icon: '👨‍💻', tags: ['算法', '教程'] },
    ]
  },
  {
    id: 'news',
    name: '社区 & 资讯',
    icon: 'Newspaper',
    sites: [
      { name: 'Hacker News', url: 'https://news.ycombinator.com', desc: '科技新闻聚合', icon: '🗞️', tags: ['新闻', '英文'], hot: true },
      { name: 'Product Hunt', url: 'https://www.producthunt.com', desc: '新产品发现', icon: '🚀', tags: ['产品', '英文'] },
      { name: 'Dev.to', url: 'https://dev.to', desc: '开发者博客社区', icon: '💻', tags: ['博客', '英文'] },
      { name: 'InfoQ', url: 'https://www.infoq.cn', desc: '技术资讯平台', icon: 'ℹ️', tags: ['中文', '资讯'] },
      { name: '机器之心', url: 'https://www.jiqizhixin.com', desc: 'AI 资讯媒体', icon: '🤖', tags: ['AI', '中文'] },
      { name: 'TechCrunch', url: 'https://techcrunch.com', desc: '科技新闻网站', icon: '🔔', tags: ['新闻', '英文'] },
      { name: 'Wired', url: 'https://www.wired.com', desc: '科技文化杂志', icon: '🔗', tags: ['科技', '英文'] },
      { name: '少数派', url: 'https://sspai.com', desc: '数字生活社区', icon: '🔢', tags: ['中文', '效率'] },
    ]
  },
]

// 获取所有站点用于搜索
export const getAllSites = () => {
  const sites = []
  categories.forEach(cat => {
    cat.sites.forEach(site => {
      sites.push({
        ...site,
        category: cat.name,
        categoryId: cat.id
      })
    })
  })
  return sites
}
