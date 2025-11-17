import clsx from 'clsx'
import { motion } from 'motion/react'
import { useState } from 'react'

const TAB_MENU = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'certificates', title: 'Certificates' },
  { id: 'skills', title: 'Skills' },
]

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState<string>('about')
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center w-full gap-2">
        <h1 className="text-2xl font-medium">About Me</h1>
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-2">
          {TAB_MENU.map(tab => (
            <motion.div
              layout
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                'relative cursor-pointer px-2 py-1 text-sm outline-none transition-colors',
                activeTab === tab.id ? 'text-gray-800' : 'text-gray-700'
              )}
            >
              {activeTab === tab.id ? (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-lg bg-black/5"
                />
              ) : null}
              <span className="relative text-inherit">{tab.title}</span>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {activeTab === 'about' && <div>About</div>}
          {activeTab === 'skills' && <div>Skills</div>}
          {activeTab === 'projects' && <div>Projects</div>}
        </div>
      </div>
    </div>
  )
}
