'use client'

import { motion, LayoutGroup } from 'motion/react'
import { useState, Activity } from 'react'
import TimelineCard from '@/components/cards/TimelineCard'
import type { ITimelineItem } from '@/@types'
import clsx from 'clsx'
import { TIMELINE_ITEMS } from '@/lib/constants'

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
          className="flex flex-col gap-2.5 items-center max-w-none lg:max-w-48"
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
          <h1 className="text-2xl font-medium select-none text-center">
            Career
          </h1>
          <p className="text-lg select-none text-center">
            A brief overview of my career until now
          </p>
        </div>
      </div>
      <LayoutGroup id="timeline">
        <motion.div
          initial={false}
          layout
          className="flex flex-col lg:flex-row w-full lg:gap-12 gap-4 items-center justify-center"
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
