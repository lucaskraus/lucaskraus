'use client'
import { motion } from 'motion/react'
import Image, { StaticImageData } from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface SocialMediaCardProps {
  image: StaticImageData | string
  link: string
  title: string
  icon: IconDefinition
  iconColor?: string
}

export default function SocialMediaCard({
  image,
  link,
  title,
  icon,
  iconColor = 'white',
}: SocialMediaCardProps) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block w-full h-60 overflow-hidden rounded-2xl cursor-pointer bg-card group"
      animate={{ opacity: 0.65, scale: 1 }}
      whileHover={{ opacity: 1, scale: 1.02 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        style={{
          objectPosition: title === 'GitHub' ? 'top' : 'center',
        }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div
        className="absolute bottom-4 right-4 z-10 drop-shadow-md"
        style={{ color: iconColor }}
      >
        <FontAwesomeIcon icon={icon} size="2x" />
      </div>
    </motion.a>
  )
}
