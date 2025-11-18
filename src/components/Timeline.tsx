import { motion, LayoutGroup } from 'motion/react'
import { useEffect, useState } from 'react'
import feiBackgroundImage from '@/assets/fei.png'
import firstDevXpBackgroundImage from '@/assets/first-dev-xp.png'
import xendoraBackgroundImage from '@/assets/xendora.png'
import finishedBackgroundImage from '@/assets/finish.png'
import startJourneyBackgroundImage from '@/assets/start-journey.jpg'
import TimelineCard from '@/components/TimelineCard'
import type { ITimelineItem } from '@/@types'

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

const TimelineItem = ({
  title,
  label,
  image,
  description,
  selected,
}: ITimelineItem) => {
  return selected ? (
    <TimelineCard
      title={title}
      label={label}
      description={description}
      image={image}
    />
  ) : (
    <motion.div
      initial={false}
      layout
      layoutId={`timeline-item-${title}`}
      className="flex flex-col gap-2 items-center max-w-48"
      style={{ borderRadius: 16 }}
    >
      <p className="text-base text-center">{label}</p>
      <h1 className="text-xl font-medium font-vt323">{title}</h1>
      <div className="relative flex items-center justify-center">
        <div className="h-2 w-2 bg-blue-400 rounded-full animate-pulse" />
      </div>
    </motion.div>
  )
}

export default function Timeline() {
  const [selectedItem, setSelectedItem] = useState<ITimelineItem | null>(
    TIMELINE_ITEMS[0]
  )

  useEffect(() => {
    const urls = TIMELINE_ITEMS.map(i => i.image).filter(Boolean) as string[]
    urls.forEach(src => {
      const img = new Image()
      img.src = src
    })
  }, [])

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
      <LayoutGroup id="timeline">
        <motion.div
          initial={false}
          layout
          className="flex flex-row w-full gap-12 items-center justify-center flex-wrap"
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
