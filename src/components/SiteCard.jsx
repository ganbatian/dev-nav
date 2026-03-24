import React from 'react'
import { ExternalLink, Flame, BadgeCheck } from 'lucide-react'

function SiteCard({ site }) {
  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-hover group block bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-500"
    >
      <div className="flex items-start gap-3">
        {/* 图标 */}
        <div className="flex-shrink-0 w-10 h-10 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center text-xl">
          {site.icon}
        </div>
        
        {/* 内容 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="font-semibold text-gray-900 dark:text-white text-sm truncate group-hover:text-primary-500 transition-colors">
              {site.name}
            </h3>
            {site.hot && (
              <Flame className="w-3.5 h-3.5 text-accent-orange flex-shrink-0" />
            )}
            {site.official && (
              <BadgeCheck className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
            )}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
            {site.desc}
          </p>
          
          {/* 标签 */}
          <div className="flex flex-wrap gap-1 mt-2">
            {site.tags?.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="px-1.5 py-0.5 text-[10px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* 外部链接图标 */}
        <ExternalLink className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-primary-400 transition-colors flex-shrink-0" />
      </div>
    </a>
  )
}

export default SiteCard
