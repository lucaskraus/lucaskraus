import { StaticImageData } from 'next/image'

export interface ITimelineItem {
  title: string
  label: string
  description: string
  selected?: boolean
  image?: StaticImageData
}
