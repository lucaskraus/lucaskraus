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
      initial={false}
      layout
      layoutId={`timeline-item-${title}`}
      className="flex gap-2.5 px-4 py-2 w-80 h-28 shadow-md border border-gray-400 relative will-change-transform"
      style={{
        borderRadius: 16,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      transition={LAYOUT_TRANSITION}
    >
      <motion.div
        className="absolute inset-0 bg-black/50 rounded-2xl"
        initial={false}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.25 }}
      />
      <div className="flex flex-col flex-1 h-full gap-2 w-full z-10">
        <h2 className="text-lg text-left font-medium font-vt323">{title}</h2>
        <p className="text-xs text-left">{description}</p>
      </div>
    </motion.div>
  )
}
