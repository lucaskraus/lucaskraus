import SocialMediaCard from '@/components/cards/SocialMediaCard'
import { SOCIAL_MEDIA } from '@/lib/constants'

export default function Projects() {
  return (
    <div className="flex flex-col gap-10 flex-wrap w-full">
      <div className="flex flex-col items-center w-full gap-2">
        <h1 className="text-2xl font-medium text-center">Where to find me</h1>
        <p className="text-lg text-center">
          Reach out to me on my social media profiles
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 w-full">
        {SOCIAL_MEDIA.map(socialMedia => (
          <SocialMediaCard
            key={socialMedia.name}
            title={socialMedia.name}
            {...socialMedia}
          />
        ))}
      </div>
    </div>
  )
}
