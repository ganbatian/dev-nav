# 程序员导航 (DevNav)

面向程序员的一站式技术资源导航站，收录优质技术站点、开发工具、AI编程、文档手册等。

## 特性

- 🎯 **分类清晰** - 10大技术分类，80+优质站点
- 🔍 **智能搜索** - 支持模糊搜索，实时联想
- 🌓 **深色模式** - 支持明暗主题切换
- 📱 **响应式设计** - PC/平板/手机全适配
- ⚡ **极速体验** - 首屏加载 < 2s
- 🎨 **极简设计** - 清爽无广告，符合工程师审美

## 技术栈

- React 18 + Vite
- Tailwind CSS
- Lucide Icons
- Fuse.js (模糊搜索)

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 项目结构

```
dev-nav/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── SiteCard.jsx    # 站点卡片组件
│   │   └── CategoryNav.jsx # 分类导航组件
│   ├── data/
│   │   └── sites.js        # 站点数据
│   ├── App.jsx             # 主应用组件
│   ├── main.jsx            # 入口文件
│   └── index.css           # 全局样式
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 自定义站点

编辑 `src/data/sites.js` 文件，添加或修改站点数据：

```javascript
{
  name: '站点名称',
  url: 'https://example.com',
  desc: '站点描述',
  icon: '🚀',
  tags: ['标签1', '标签2'],
  hot: true,      // 热门标记
  official: true  // 官方标记
}
```

## 许可证

MIT
