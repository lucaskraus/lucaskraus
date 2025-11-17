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
  {
    title: '2021',
    description: 'My first developer experience',
  },
  {
    title: '2023',
    description: 'Joined Xendora as Front-End Engineer',
  },
  { title: '2024', description: "Finished my bachelor's degree" },
]

interface TimelineItemProps {
  title: string
  description: string
}

const TimelineItem = ({ title, description }: TimelineItemProps) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h1 className="text-xl font-medium">{title}</h1>
      <p className="font-vt323 text-lg text-center">{description}</p>
      <div className="h-2 w-2 bg-blue-400 rounded-full" />
    </div>
  )
}

export default function Timeline() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center w-full gap-2">
        <h1 className="text-2xl font-medium">Career</h1>
        <p className="text-lg">A brief overview of my career until now</p>
      </div>
      <div className="flex flex-row w-full gap-12 items-center justify-center flex-wrap">
        {TIMELINE_ITEMS.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 + index * 0.1, ease: 'easeInOut' }}
            className="max-w-48"
          >
            <TimelineItem
              key={item.title}
              title={item.title}
              description={item.description}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
