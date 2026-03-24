import React, { useState, useEffect, useMemo } from 'react'
import { Search, Sun, Moon, Menu, X, Code2 } from 'lucide-react'
import { categories, getAllSites } from './data/sites.js'
import SiteCard from './components/SiteCard.jsx'
import CategoryNav from './components/CategoryNav.jsx'
import Fuse from 'fuse.js'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchResults, setSearchResults] = useState([])

  // 初始化主题
  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved) {
      setDarkMode(saved === 'true')
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
    }
  }, [])

  // 切换主题
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  // 搜索配置
  const fuse = useMemo(() => {
    const allSites = getAllSites()
    return new Fuse(allSites, {
      keys: ['name', 'desc', 'tags', 'category'],
      threshold: 0.3,
      includeScore: true
    })
  }, [])

  // 搜索处理
  useEffect(() => {
    if (searchQuery.trim()) {
      const results = fuse.search(searchQuery).map(r => r.item)
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }, [searchQuery, fuse])

  // 过滤站点
  const filteredCategories = useMemo(() => {
    if (searchQuery.trim()) {
      return []
    }
    if (activeCategory === 'all') {
      return categories
    }
    return categories.filter(cat => cat.id === activeCategory)
  }, [activeCategory, searchQuery])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-cyan rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-500 to-accent-cyan bg-clip-text text-transparent">
                程序员导航
              </span>
            </div>

            {/* 桌面端搜索 */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="搜索站点、工具、文档..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-700 border-0 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 transition-all"
                />
              </div>
            </div>

            {/* 右侧按钮 */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title={darkMode ? '切换到浅色模式' : '切换到深色模式'}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* 移动端搜索 */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索站点、工具..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input w-full pl-10 pr-4 py-2.5 bg-gray-100 dark:bg-gray-700 border-0 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500"
              />
            </div>
          </div>
        </div>
      </header>

      {/* 分类导航 */}
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        mobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
      />

      {/* 主内容区 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 搜索结果 */}
        {searchQuery.trim() && (
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              搜索结果 "{searchQuery}" 
              <span className="text-sm font-normal text-gray-500 ml-2">
                ({searchResults.length} 个结果)
              </span>
            </h2>
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {searchResults.map((site, idx) => (
                  <SiteCard key={`${site.name}-${idx}`} site={site} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🔍</div>
                <p className="text-gray-500 dark:text-gray-400">
                  未找到相关站点，试试其他关键词
                </p>
              </div>
            )}
          </div>
        )}

        {/* 分类展示 */}
        {!searchQuery.trim() && (
          <div className="space-y-12">
            {filteredCategories.map(category => (
              <section key={category.id} id={category.id}>
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.name}
                  </h2>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {category.sites.length} 个站点
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.sites.map((site, idx) => (
                    <SiteCard key={`${category.id}-${idx}`} site={site} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

      {/* 页脚 */}
      <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-accent-cyan rounded flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                程序员导航 - 开发者的一站式技术资源导航
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span>© 2024 DevNav</span>
              <a href="#" className="hover:text-primary-500 transition-colors">关于</a>
              <a href="#" className="hover:text-primary-500 transition-colors">反馈</a>
              <a href="#" className="hover:text-primary-500 transition-colors">免责声明</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
