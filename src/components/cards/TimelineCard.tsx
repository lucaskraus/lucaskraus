import { motion } from 'motion/react'
import Image from 'next/image'
import type { ITimelineItem } from '@/@types'

const LAYOUT_TRANSITION = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30,
}

export default function TimelineCard({
  title,
  description,
  image,
}: ITimelineItem) {
  return (
    <motion.div
      layout
      layoutId={`timeline-item-${title}`}
      className="flex px-4 py-2 lg:w-84 h-40 shadow-md border border-[#271e37] relative overflow-hidden"
      style={{
        borderRadius: 16,
      }}
      transition={LAYOUT_TRANSITION}
    >
      {image && (
        <Image
          src={image}
          alt={title}
          fill
          className="absolute inset-0 z-0 object-cover"
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="flex flex-col flex-1 h-full gap-0.5 w-full z-10">
        <h2 className="text-xl text-left font-medium font-vt323">{title}</h2>
        <p className="text-sm text-left">{description}</p>
      </div>
    </motion.div>
  )
}
