'use client'

import { motion, LayoutGroup } from 'motion/react'
import { useState } from 'react'
import TimelineCard from '@/components/cards/TimelineCard'
import type { ITimelineItem } from '@/@types'
import { TIMELINE_ITEMS } from '@/lib/constants'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const PASTEL_COLORS = [
  { border: 'border-[#a8d5ba]', bg: 'bg-[#a8d5ba]' }, // mint green
  { border: 'border-[#f4b8c5]', bg: 'bg-[#f4b8c5]' }, // rose pink
  { border: 'border-[#b5c7ed]', bg: 'bg-[#b5c7ed]' }, // periwinkle blue
  { border: 'border-[#f9d89c]', bg: 'bg-[#f9d89c]' }, // soft yellow
  { border: 'border-[#c9b8e8]', bg: 'bg-[#c9b8e8]' }, // lavender
  { border: 'border-[#9dd5d0]', bg: 'bg-[#9dd5d0]' }, // aqua
]

const TimelineItem = ({
  title,
  label,
  image,
  icon,
  description,
  selected,
  index = 0,
}: ITimelineItem) => {
  const colorIndex = index % PASTEL_COLORS.length
  const pastelColor = PASTEL_COLORS[colorIndex]

  if (selected) {
    return (
      <TimelineCard
        title={title}
        label={label}
        description={description}
        image={image}
      />
    )
  }

  return (
    <motion.div
      initial={false}
      layout
      layoutId={`timeline-item-${title}`}
      className="flex flex-col gap-2.5 items-center max-w-none lg:max-w-52 relative overflow-hidden p-4"
      style={{ borderRadius: 16 }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      whileHover={{
        scale: 1.05,
      }}
    >
      {image && (
        <Image
          src={image}
          alt={title}
          fill
          className="absolute inset-0 z-0 object-cover opacity-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      <div className="relative z-10 flex flex-col items-center">
        <div
          className={cn(
            'border bg-black/30 p-4 rounded-xl',
            pastelColor.border
          )}
        >
          <p className="text-lg lg:text-base text-center">{label}</p>
        </div>
        <div className={cn('w-0.5 h-4', pastelColor.bg)}></div>
        <div
          className={cn(
            'relative flex flex-col items-center justify-center border rounded-full w-16 h-16',
            pastelColor.border
          )}
        >
          {icon}
          <h1 className="text-lg font-medium font-vt323">{title}</h1>
        </div>
      </div>
    </motion.div>
  )
}

export default function Timeline() {
  const [selectedItem, setSelectedItem] = useState<ITimelineItem | null>(
    TIMELINE_ITEMS[0]
  )

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center w-full gap-2">
        <h1 className="text-2xl font-medium select-none text-center">Career</h1>
        <p className="text-lg select-none text-center">
          A brief overview of my career until now
        </p>
      </div>
      <LayoutGroup id="timeline">
        <motion.div
          initial={false}
          layout
          className="flex flex-col lg:flex-row lg:flex-wrap w-full lg:gap-8 gap-4 items-center justify-center"
        >
          {TIMELINE_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className="cursor-pointer"
              onClick={() => setSelectedItem(item)}
              role="button"
            >
              <TimelineItem
                index={index}
                title={item.title}
                label={item.label}
                description={item.description}
                selected={selectedItem?.title === item.title}
                image={item.image}
                icon={item.icon}
              />
            </div>
          ))}
        </motion.div>
      </LayoutGroup>
    </div>
  )
}
