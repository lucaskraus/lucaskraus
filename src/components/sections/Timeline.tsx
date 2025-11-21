'use client'

import { motion, LayoutGroup } from 'motion/react'
import { useState, Activity } from 'react'
import feiBackgroundImage from '@/assets/fei.png'
import firstDevXpBackgroundImage from '@/assets/first-dev-xp.png'
import xendoraBackgroundImage from '@/assets/xendora.png'
import finishedBackgroundImage from '@/assets/finish.png'
import startJourneyBackgroundImage from '@/assets/start-journey.jpg'
import recognitionBackgroundImage from '@/assets/recognition.png'
import TimelineCard from '@/components/cards/TimelineCard'
import type { ITimelineItem } from '@/@types'
import Image from 'next/image'
import clsx from 'clsx'

const TIMELINE_ITEMS = [
  {
    title: '2017',
    label: 'Started my journey as intern',
    description:
      'Joined Vertice School as an intern, where I took my first steps in tech supporting infrastructure and building internal tools.',
    image: startJourneyBackgroundImage,
  },
  {
    title: '2019',
    label: 'Professional Excellence Award',
    description:
      'Awarded the “76 Shirt”, a distinction given to top-performing employees for outstanding technical excellence and dedication.',
    image: recognitionBackgroundImage,
  },
  {
    title: '2020',
    label: "Started bachelor's degree in CS",
    description:
      'Began my Computer Science degree at FEI, strengthening my foundations in algorithms, compilers, software engineering, and systems.',
    image: feiBackgroundImage,
  },
  {
    title: '2021',
    label: 'My first developer experience',
    description:
      'Transitioned into full-stack development, building internal systems with React, Node.js, and MySQL to optimize workflows for over 200 users.',
    image: firstDevXpBackgroundImage,
  },
  {
    title: '2023',
    label: 'Joined Xendora as Front-End Engineer',
    description:
      'Became a Front-End & Mobile Engineer at Xendora, developing cross-platform apps with React Native, Web3 features, CI/CD, and Sentry monitoring.',
    image: xendoraBackgroundImage,
  },
  {
    title: '2024',
    label: "Finished my bachelor's degree",
    description:
      'Graduated in Computer Science, concluding a journey marked by academic projects, practical experience, and continuous growth.',
    image: finishedBackgroundImage,
  },
]

const TimelineItem = ({
  title,
  label,
  image,
  description,
  selected,
}: ITimelineItem) => {
  return (
    <div className="flex flex-row items-center">
      <Activity mode={selected ? 'hidden' : 'visible'}>
        <motion.div
          initial={false}
          layout
          layoutId={`timeline-item-${title}`}
          className="flex flex-col gap-2.5 items-center max-w-48"
          style={{ borderRadius: 16 }}
        >
          <p className="text-base text-center">{label}</p>
          <h1 className="text-xl font-medium font-vt323">{title}</h1>
          <div className="relative flex items-center justify-center">
            <div className="h-3 w-3 bg-blue-400 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </Activity>
      <div
        className={clsx(selected ? 'max-w-none' : 'max-w-0 overflow-hidden')}
      >
        <TimelineCard
          title={title}
          label={label}
          description={description}
          image={image}
        />
      </div>
    </div>
  )
}

export default function Timeline() {
  const [selectedItem, setSelectedItem] = useState<ITimelineItem | null>(
    TIMELINE_ITEMS[0]
  )

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-center w-full gap-2">
          <h1 className="text-2xl font-medium select-none">Career</h1>
          <p className="text-lg select-none">
            A brief overview of my career until now
          </p>
        </div>
      </div>
      <LayoutGroup id="timeline">
        <motion.div
          initial={false}
          layout
          className="flex flex-row w-full gap-12 items-center justify-center flex-wrap"
        >
          {TIMELINE_ITEMS.map(item => (
            <div
              key={item.title}
              className="cursor-pointer"
              onClick={() => setSelectedItem(item)}
              role="button"
            >
              <TimelineItem
                title={item.title}
                label={item.label}
                description={item.description}
                selected={selectedItem?.title === item.title}
                image={item.image}
              />
            </div>
          ))}
        </motion.div>
      </LayoutGroup>
    </div>
  )
}
