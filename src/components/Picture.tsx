'use client'

import notionFacePng from '@/assets/notion-face.png'
import { motion } from 'motion/react'
import Image from 'next/image'

export default function Picture() {
  return (
    <div className="flex flex-col gap-4 items-center relative">
      <div className="flex rounded-full bg-blue-200 p-2 items-center justify-center shadow-md">
        <Image src={notionFacePng} alt="Notion Face" width={200} />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-light text-center">
          Hello, World! My name is{' '}
        </p>
        <motion.h1
          className="bg-clip-text text-4xl leading-tight font-bold text-transparent select-none text-center"
          style={{
            backgroundImage:
              'linear-gradient(90deg, #60a5fa, #93c5fd 20%, #2563eb 40%, #93c5fd 60%, #60a5fa 80%)',
            backgroundSize: '200% auto',
          }}
          animate={{
            backgroundPosition: ['0% center', '200% center'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          Lucas Kraus
        </motion.h1>
      </div>
    </div>
  )
}
