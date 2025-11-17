import clsx from 'clsx'
import { motion } from 'motion/react'
import { useState } from 'react'
import { AppWindowMacIcon, TrophyIcon, BrainIcon } from 'lucide-react'

const TAB_MENU = [
  {
    id: 'introduction',
    title: 'Introduction',
    icon: <AppWindowMacIcon className="text-inherit" />,
  },
  {
    id: 'certificates',
    title: 'Certificates',
    icon: <TrophyIcon className="text-inherit" />,
  },
  {
    id: 'skills',
    title: 'Skills',
    icon: <BrainIcon className="text-inherit" />,
  },
]

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState<string>('introduction')
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
                'relative flex flex-row gap-2.5 cursor-pointer px-2 py-1 text-sm outline-none transition-colors',
                activeTab === tab.id ? 'text-gray-800' : 'text-gray-700'
              )}
            >
              {activeTab === tab.id ? (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-lg bg-blue-400"
                />
              ) : null}
              <span className="relative z-10">{tab.icon}</span>
              <h1 className="relative z-10 text-inherit text-base">
                {tab.title}
              </h1>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {activeTab === 'introduction' && <div>Introduction</div>}
          {activeTab === 'certificates' && <div>Certificates</div>}
          {activeTab === 'skills' && <div>Skills</div>}
        </div>
      </div>
    </div>
  )
}
