import clsx from 'clsx'
import { motion } from 'motion/react'
import { useState } from 'react'
import { AppWindowMacIcon, TrophyIcon, BrainIcon } from 'lucide-react'
import macintoshImage from '@/assets/macintosh.png'

const TAB_MENU = [
  {
    id: 'introduction',
    title: 'Introduction',
    icon: <AppWindowMacIcon className="text-inherit" />,
    content:
      'Mobile & Front-End Engineer with over 8 years of experience in the industry. Specialized in building scalable and efficient web applications using React Native, React, Next.js, Vue.js, Nuxt.js, Tailwind CSS, and Node.js.',
  },
  {
    id: 'certificates',
    title: 'Certificates',
    icon: <TrophyIcon className="text-inherit" />,
    content: 'Certificates',
  },
  {
    id: 'skills',
    title: 'Skills',
    icon: <BrainIcon className="text-inherit" />,
    content: 'Skills',
  },
]

const TabCard = ({ id }: { id: string }) => {
  const section = TAB_MENU.find(tab => tab.id === id)
  const words = section?.content.split(' ') || []
  const animationDuration = 0.3
  const delayBetweenWords = 0.05
  const totalAnimationTime =
    words.length > 0
      ? (words.length - 1) * delayBetweenWords + animationDuration
      : 0

  return (
    <div className="flex flex-row max-w-4xl flex-wrap gap-1">
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * delayBetweenWords,
            duration: animationDuration,
          }}
          className="text-green-400 font-vt323 text-2xl"
        >
          {word}
        </motion.span>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: totalAnimationTime, duration: 0 }}
        className="blink text-green-400"
      />
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
      <div className="flex flex-col gap-6 items-center w-full mx-auto max-w-5xl">
        <div className="flex flex-row gap-2">
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
                  className="absolute inset-0 rounded-lg bg-green-400"
                />
              ) : null}
              <span className="relative z-10">{tab.icon}</span>
              <h1 className="relative z-10 text-inherit text-lg font-vt323">
                {tab.title}
              </h1>
            </motion.div>
          ))}
        </div>
        <div className="relative">
          <div className="absolute top-22 left-18 max-w-64 max-h-40 overflow-y-auto scrollbar-hide">
            <TabCard id={activeTab} />
          </div>
          <img src={macintoshImage} alt="Macintosh" width={400} />
        </div>
      </div>
    </div>
  )
}
