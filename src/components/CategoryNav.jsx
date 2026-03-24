import React from 'react'
import * as Icons from 'lucide-react'

function CategoryNav({ categories, activeCategory, onCategoryChange, mobileOpen, onMobileClose }) {
  const scrollToCategory = (categoryId) => {
    onCategoryChange(categoryId)
    if (categoryId !== 'all') {
      const element = document.getElementById(categoryId)
      if (element) {
        const offset = 140
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    onMobileClose()
  }

  const getIcon = (iconName) => {
    const Icon = Icons[iconName]
    return Icon ? <Icon className="w-4 h-4" /> : null
  }

  return (
    <>
      {/* 桌面端导航 */}
      <nav className="hidden md:block sticky top-16 z-40 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-3 overflow-x-auto hide-scrollbar">
            <button
              onClick={() => scrollToCategory('all')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === 'all'
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              全部
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => scrollToCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {getIcon(cat.icon)}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* 移动端导航抽屉 */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onMobileClose}
          />
          <div className="absolute top-[120px] left-4 right-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-4 max-h-[70vh] overflow-y-auto">
            <div className="space-y-1">
              <button
                onClick={() => scrollToCategory('all')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <span className="font-medium">全部站点</span>
              </button>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => scrollToCategory(cat.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                    activeCategory === cat.id
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="text-gray-400">{getIcon(cat.icon)}</span>
                  <span className="font-medium">{cat.name}</span>
                  <span className="ml-auto text-xs text-gray-400">{cat.sites.length}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 移动端底部快速导航 */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-30">
        <div className="flex items-center justify-around py-2 overflow-x-auto hide-scrollbar">
          <button
            onClick={() => scrollToCategory('all')}
            className={`flex flex-col items-center gap-0.5 px-3 py-1 text-xs ${
              activeCategory === 'all' ? 'text-primary-500' : 'text-gray-500'
            }`}
          >
            <span className="font-medium">全部</span>
          </button>
          {categories.slice(0, 5).map(cat => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 text-xs whitespace-nowrap ${
                activeCategory === cat.id ? 'text-primary-500' : 'text-gray-500'
              }`}
            >
              <span className="scale-75">{getIcon(cat.icon)}</span>
              <span className="font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default CategoryNav
