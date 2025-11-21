'use client'

import clsx from 'clsx'
import { motion } from 'motion/react'
import { useState } from 'react'
import Image from 'next/image'
import macintoshImage from '@/assets/macintosh.png'
import { ABOUT_ME_TAB_MENU } from '@/lib/constants'
import { useTypewriterLines } from '@/hooks/useTypewriterLines'

const TabContent = ({ id }: { id: string }) => {
  const section = ABOUT_ME_TAB_MENU.find(tab => tab.id === id)
  const { words, totalAnimationTime, animationDuration, delayBetweenWords } =
    useTypewriterLines(section?.content)

  return (
    <div className="flex flex-row max-w-4xl flex-wrap gap-1">
      {words.map((word, index) =>
        word === '\n' ? (
          <div key={index} className="basis-full h-0" />
        ) : (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: index * delayBetweenWords,
              duration: animationDuration,
            }}
            className="text-green-400 font-vt323 text-2xl select-none"
          >
            {word}
          </motion.span>
        )
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: totalAnimationTime }}
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
        <div className="flex flex-row gap-3">
          {ABOUT_ME_TAB_MENU.map(tab => (
            <motion.div
              layout
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                'relative flex flex-row items-center gap-2.5 cursor-pointer px-2 py-2 outline-none transition-colors',
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
              <h1 className="relative z-10 text-inherit text-xs lg:text-sm">
                {tab.title}
              </h1>
            </motion.div>
          ))}
        </div>
        <div className="relative">
          <div className="absolute top-22 left-21 max-w-66 max-h-44 overflow-y-auto scrollbar-hide">
            <TabContent id={activeTab} />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Image src={macintoshImage} alt="Macintosh" width={400} />
            <span className="text-xs text-gray-500 italic text-center">
              You can scroll down the Macintosh screen to read the content
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
