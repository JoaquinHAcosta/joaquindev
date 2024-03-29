'use client'
import { useEffect, useState } from 'react'
import type { Tabs } from '@/types'

interface TabsLayoutProps {
  tabs: Tabs[]
  viewOutside?: string | undefined
  setViewOutside?: React.Dispatch<React.SetStateAction<string | undefined>>
}

export function TabsLayout({
  tabs,
  viewOutside,
  setViewOutside,
}: TabsLayoutProps) {
  const [view, setView] = useState(tabs[0].label)

  useEffect(() => {
    if (viewOutside === undefined) return
    setView(viewOutside)
  }, [viewOutside, setViewOutside])

  return (
    <div>
      <div className="flex justify-center items-center mb-4">
        {tabs.map((tab, i) => (
          <button
            key={i + 'tab'}
            onClick={() => {
              setView(tab.label)
              if (setViewOutside) setViewOutside(tab.label)
            }}
            className={`
                 flex-1 p-2 gap-2 border-b-2
                 font-bold
                 text-accent                 
                ${view === tab.label ? 'text-secondary border-secondary' : ''}`} // active
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab, i) => (
          <div
            key={i + 'content'}
            className={view === tab.label ? '' : 'hidden'}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  )
}
