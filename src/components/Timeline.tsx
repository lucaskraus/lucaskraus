import { motion } from 'motion/react'

const TIMELINE_ITEMS = [
  {
    title: '2017',
    description: 'Started my journey as intern',
  },
  {
    title: '2019',
    description: 'Recognition for professional excellence',
  },
  {
    title: '2020',
    description: "Started my bachelor's degree in Computer Science",
  },
]

interface TimelineItemProps {
  title: string
  description: string
}

const TimelineItem = ({ title, description }: TimelineItemProps) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h1 className="text-xl font-medium">{title}</h1>
      <p className="font-vt323 text-xl">{description}</p>
      <div className="h-2 w-2 bg-purple-400 rounded-full" />
    </div>
  )
}

export default function Timeline() {
  return (
    <div className="flex flex-row w-full gap-8">
      {TIMELINE_ITEMS.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 + index * 0.1, ease: 'easeInOut' }}
        >
          <TimelineItem
            key={item.title}
            title={item.title}
            description={item.description}
          />
        </motion.div>
      ))}
    </div>
  )
}
