'use client'

import notionFacePng from '@/assets/notion-face.png'
import { motion } from 'motion/react'
import Image from 'next/image'
import clsx from 'clsx'

const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <span className={clsx('relative inline-block px-2  group', className)}>
      <span
        className="absolute inset-0 bg-green-200/60 dark:bg-green-500/30 -skew-y-2 rounded-sm transition-transform group-hover:scale-105 group-hover:-skew-y-3"
        aria-hidden="true"
      />
      <span className="relative font-bold text-green-600 dark:text-green-300 group-hover:text-green-700 dark:group-hover:text-green-200 transition-colors cursor-default">
        {children}
      </span>
    </span>
  )
}

export default function Picture() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row gap-8 lg:gap-14 items-center justify-center relative w-full max-w-4xl mx-auto p-4"
    >
      <motion.div
        whileHover={{ rotate: 5, scale: 1.05 }}
        className="shrink-0 flex rounded-full bg-linear-to-tr from-green-100 to-emerald-300 p-2 items-center justify-center shadow-xl"
      >
        <Image
          src={notionFacePng}
          alt="Notion Face"
          width={190}
          height={190}
          priority
          className="rounded-full"
        />
      </motion.div>

      <h1 className="text-xl md:text-2xl font-light leading-loose text-center md:text-left text-gray-800 dark:text-gray-200">
        Hello, World! My name is{' '}
        <span className="whitespace-nowrap font-black text-3xl md:text-4xl bg-linear-to-r from-green-400 via-green-500 to-emerald-600 bg-clip-text text-transparent hover:scale-105 inline-block transition-transform cursor-default align-baseline">
          Lucas Kraus
        </span>{' '}
        and I&apos;m a{' '}
        <Highlight className="text-2xl md:text-3xl">Mobile</Highlight> and{' '}
        <Highlight className="text-2xl md:text-3xl">Front-End</Highlight>{' '}
        Engineer
      </h1>
    </motion.div>
  )
}
