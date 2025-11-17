import { motion } from 'motion/react'
import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

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
  index: number
  selectedIndex: number
}

const TimelineItem = ({
  title,
  label,
  description,
  index,
  selectedIndex,
}: TimelineItemProps) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h1 className="text-xl font-medium">{title}</h1>
      <p className="font-vt323 text-lg text-center">{label}</p>
      <div className="relative flex items-center justify-center">
        {selectedIndex === index && (
          <motion.div
            layoutId="balloon"
            key="balloon"
            transition={{ ease: 'easeInOut' }}
            className="absolute top-4 left-1/2 -translate-x-1/2 z-10 w-max max-w-[90vw]"
          >
            <div className="rounded-md bg-gray-900 px-3 py-2 shadow-lg text-center">
              <motion.span className="text-white text-sm">
                {description}
              </motion.span>
            </div>
          </motion.div>
        )}
        <div className="h-2 w-2 bg-blue-400 rounded-full" />
      </div>
    </div>
  )
}

export default function Timeline() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const handleSelectIndex = (index: number) => {
    if (index < 0) {
      setSelectedIndex(0)
    } else if (index >= TIMELINE_ITEMS.length) {
      setSelectedIndex(TIMELINE_ITEMS.length - 1)
    } else {
      setSelectedIndex(index)
    }
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row justify-between items-center">
        <ChevronLeftIcon
          className="cursor-pointer"
          onClick={() => handleSelectIndex(selectedIndex - 1)}
        />
        <div className="flex flex-col items-center w-full gap-2">
          <h1 className="text-2xl font-medium select-none">Career</h1>
          <p className="text-lg select-none">
            A brief overview of my career until now
          </p>
        </div>
        <ChevronRightIcon
          className="cursor-pointer"
          onClick={() => handleSelectIndex(selectedIndex + 1)}
        />
      </div>
      <div className="flex flex-row w-full gap-12 items-center justify-center flex-wrap">
        {TIMELINE_ITEMS.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 + index * 0.1, ease: 'easeInOut' }}
            className="max-w-48 cursor-pointer"
            onClick={() => setSelectedIndex(index)}
            role="button"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setSelectedIndex(index)
              }
            }}
          >
            <TimelineItem
              key={item.title}
              title={item.title}
              label={item.label}
              description={item.description}
              index={index}
              selectedIndex={selectedIndex}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
