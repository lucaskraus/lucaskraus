import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import feiBackgroundImage from '@/assets/fei.png'
import firstDevXpBackgroundImage from '@/assets/first-dev-xp.png'
import xendoraBackgroundImage from '@/assets/xendora.png'
import finishedBackgroundImage from '@/assets/finish.png'
import startJourneyBackgroundImage from '@/assets/start-journey.jpg'

const TIMELINE_ITEMS = [
  {
    title: '2017',
    label: 'Started my journey as intern',
    description: 'Started my journey as intern',
    image: startJourneyBackgroundImage,
  },
  {
    title: '2019',
    label: 'Recognition for professional excellence',
    description: 'Recognition for professional excellence',
  },
  {
    title: '2020',
    label: "Started my bachelor's degree in CS",
    description: "Started my bachelor's degree in Computer Science",
    image: feiBackgroundImage,
  },
  {
    title: '2021',
    label: 'My first developer experience',
    description: 'My first developer experience',
    image: firstDevXpBackgroundImage,
  },
  {
    title: '2023',
    label: 'Joined Xendora as Front-End Engineer',
    description: 'Joined Xendora as Front-End Engineer',
    image: xendoraBackgroundImage,
  },
  {
    title: '2024',
    label: "Finished my bachelor's degree",
    description: "Finished my bachelor's degree",
    image: finishedBackgroundImage,
  },
]

interface TimelineItemProps {
  title: string
  label: string
  description: string
  selected?: boolean
  image?: string
}

const TimelineCard = ({ title, description, image }: TimelineItemProps) => {
  return (
    <motion.div
      layoutId={`timeline-item-${title}`}
      className="flex gap-2.5 rounded-2xl px-4 py-2 w-80 h-28 shadow-md border border-gray-400 relative will-change-transform"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50 rounded-2xl" />
      <div className="flex flex-col flex-1 h-full gap-2 w-full z-10">
        <motion.h2
          layoutId={`timeline-label-${title}`}
          className="text-lg text-left font-medium font-vt323"
        >
          {title}
        </motion.h2>
        <motion.p
          layoutId={`timeline-description-${title}`}
          className="text-xs text-left"
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
  image,
  description,
  selected,
}: TimelineItemProps) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {selected ? (
        <TimelineCard
          title={title}
          label={label}
          description={description}
          image={image}
        />
      ) : (
        <motion.div
          layoutId={`timeline-item-${title}`}
          className="flex flex-col gap-2 items-center max-w-48"
        >
          <motion.p
            layoutId={`timeline-label-${title}`}
            className="text-base text-center"
          >
            {label}
          </motion.p>
          <motion.h1
            layoutId={`timeline-title-${title}`}
            className="text-xl font-medium font-vt323"
          >
            {title}
          </motion.h1>
          <div className="relative flex items-center justify-center">
            <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
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
        {TIMELINE_ITEMS.map(item => (
          <motion.div
            className="cursor-pointer"
            onClick={() => setSelectedItem(item)}
            role="button"
          >
            <TimelineItem
              key={item.title}
              title={item.title}
              label={item.label}
              description={item.description}
              selected={selectedItem?.title === item.title}
              image={item.image}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
