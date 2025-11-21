import { StaticImageData } from 'next/image'

export interface ITimelineItem {
  title: string
  label: string
  description: string
  selected?: boolean
  image?: StaticImageData
}

export interface IRepository {
  id: string
  title: string
  shortTitle: string
  description: string
  technologies: string[]
  link: string
  icon: React.ReactNode
}
