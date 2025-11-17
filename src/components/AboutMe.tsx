import clsx from 'clsx'
import { motion } from 'motion/react'
import { useState } from 'react'
import { AppWindowMacIcon, TrophyIcon, BrainIcon } from 'lucide-react'

const TAB_MENU = [
  {
    id: 'introduction',
    title: 'Introduction',
    icon: <AppWindowMacIcon className="text-inherit" />,
    content:
      'Mobile & Front-End Engineer with over 8 years of experience in the industry. Specialized in building scalable and efficient web applications using React Native, React, Next.js, Vue.js, Nuxt.js, Tailwind CSS, and Node.js.',
    image: 'https://skillicons.dev/icons?i=html',
  },
  {
    id: 'certificates',
    title: 'Certificates',
    icon: <TrophyIcon className="text-inherit" />,
    content: 'Certificates',
    image: 'https://skillicons.dev/icons?i=html',
  },
  {
    id: 'skills',
    title: 'Skills',
    icon: <BrainIcon className="text-inherit" />,
    content: 'Skills',
    image: 'https://skillicons.dev/icons?i=html',
  },
]

const TabCard = ({ id }: { id: string }) => {
  const section = TAB_MENU.find(tab => tab.id === id)

  return (
    <div className="flex flex-row rounded-xl p-4 gap-4 bg--200">
      <img
        src={section?.image}
        alt={section?.title}
        className="w-24 h-24 rounded-xl"
      />
      <div className="flex flex-col gap-2 items-start">
        <p className="text-base">{section?.content}</p>
      </div>
    </div>
  )
}

export default function AboutMe() {
  const [activeTab, setActiveTab] = useState<string>('introduction')
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col items-center w-full gap-2">
        <h1 className="text-2xl font-medium">About Me</h1>
      </div>
      <div className="flex flex-row gap-8 items-center w-full mx-auto max-w-5xl">
        <div className="flex flex-col gap-2">
          {TAB_MENU.map(tab => (
            <motion.div
              layout
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                'relative flex flex-row items-center gap-2.5 cursor-pointer px-2 py-1 text-sm outline-none transition-colors',
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
              <h1 className="relative z-10 text-inherit text-lg font-vt323">
                {tab.title}
              </h1>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-2 flex-1">
          {activeTab === 'introduction' && <TabCard id="introduction" />}
          {activeTab === 'certificates' && <TabCard id="certificates" />}
          {activeTab === 'skills' && <TabCard id="skills" />}
        </div>
      </div>
    </div>
  )
}
