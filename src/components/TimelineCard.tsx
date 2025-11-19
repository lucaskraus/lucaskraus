import { motion } from 'motion/react'

interface TimelineItemProps {
  title: string
  label: string
  description: string
  selected?: boolean
  image?: string
}

const LAYOUT_TRANSITION = {
  type: 'spring' as const,
  stiffness: 300,
  damping: 30,
}

export default function TimelineCard({
  title,
  description,
  image,
}: TimelineItemProps) {
  return (
    <motion.div
      layout
      layoutId={`timeline-item-${title}`}
      className="flex gap-2.5 px-4 py-2 w-80 h-36 shadow-md border border-[#271e37] relative will-change-transform"
      style={{
        borderRadius: 16,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      transition={LAYOUT_TRANSITION}
    >
      <div className="absolute inset-0 bg-black/50 rounded-2xl" />
      <div className="flex flex-col flex-1 h-full gap-2 w-full z-10">
        <h2 className="text-xl text-left font-medium font-vt323">{title}</h2>
        <p className="text-sm text-left">{description}</p>
      </div>
    </motion.div>
  )
}
