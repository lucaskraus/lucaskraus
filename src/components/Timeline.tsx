import { motion } from 'motion/react'
import { useState } from 'react'

const TIMELINE_ITEMS = [
  {
    title: '2017',
    label: 'Started my journey as intern',
    description: 'Started my journey as intern',
  },
  {
    title: '2019',
    label: 'Recognition for professional excellence',
    description: 'Recognition for professional excellence',
  },
  {
    title: '2020',
    label: "Started my bachelor's degree in Computer Science",
    description: "Started my bachelor's degree in Computer Science",
  },
  {
    title: '2021',
    label: 'My first developer experience',
    description: 'My first developer experience',
  },
  {
    title: '2023',
    label: 'Joined Xendora as Front-End Engineer',
    description: 'Joined Xendora as Front-End Engineer',
  },
  {
    title: '2024',
    label: "Finished my bachelor's degree",
    description: "Finished my bachelor's degree",
  },
]

interface TimelineItemProps {
  title: string
  label: string
  description: string
  selected?: boolean
}

const TimelineCard = ({ title, label, description }: TimelineItemProps) => {
  return (
    <motion.div className="flex flex-row gap-2 items-center rounded-xl p-4 bg-gray-400">
      <div className="flex flex-col gap-2">
        <img
          src="/logo.svg"
          alt="card image"
          className="w-10 h-10 rounded-full"
        />
        <motion.p
          layoutId={`timeline-card-title-${title}`}
          className="font-vt323 text-lg text-center"
        >
          {title}
        </motion.p>
      </div>

      <div className="flex flex-col w-64 items-center justify-center">
        <motion.h2
          layoutId={`timeline-card-label-${label}`}
          className="text-xl font-vt323"
        >
          {label}
        </motion.h2>
        <motion.p
          layoutId={`timeline-card-description-${title}`}
          className="font-vt323 text-lg text-center"
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  )
}

const TimelineItem = ({
  title,
  label,
  description,
  selected,
}: TimelineItemProps) => {
  return selected ? (
    <TimelineCard title={title} label={label} description={description} />
  ) : (
    <div className="flex flex-col gap-2 items-center">
      <motion.h1
        layoutId={`timeline-item-title-${title}`}
        className="text-xl font-medium"
      >
        {title}
      </motion.h1>
      <motion.p
        layoutId={`timeline-item-label-${title}`}
        className="font-vt323 text-lg text-center"
      >
        {label}
      </motion.p>
      <div className="relative flex items-center justify-center">
        <div className="h-2 w-2 bg-blue-400 rounded-full" />
      </div>
    </div>
  )
}

export default function Timeline() {
  const [selectedItem, setSelectedItem] = useState<TimelineItemProps | null>(
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
      <div className="flex flex-row w-full gap-12 items-center justify-center flex-wrap">
        {TIMELINE_ITEMS.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 + index * 0.1, ease: 'easeInOut' }}
            className="max-w-48 cursor-pointer"
            onClick={() => setSelectedItem(item)}
            role="button"
            tabIndex={0}
          >
            <TimelineItem
              key={item.title}
              title={item.title}
              label={item.label}
              description={item.description}
              selected={selectedItem?.title === item.title}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
