import githubProfileImage from '@/assets/github-profile.png'
import linkedinProfileImage from '@/assets/linkedin-profile.png'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import SocialMediaCard from '@/components/SocialMediaCard'

export default function Projects() {
  const SOCIAL_MEDIA = [
    {
      name: 'GitHub',
      link: 'https://github.com/lucaskraus',
      image: githubProfileImage,
      icon: faGithub,
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/lucas-kraus-monteiro-alves-00200b252/',
      image: linkedinProfileImage,
      icon: faLinkedin,
      iconColor: '#0077B5',
    },
  ]
  return (
    <div className="flex flex-col gap-10 flex-wrap w-full">
      <div className="flex flex-col items-center w-full gap-2">
        <h1 className="text-2xl font-medium">Where to find me</h1>
        <p className="text-lg">Reach out to me on my social media profiles</p>
      </div>
      <div className="flex flex-row gap-12 w-full">
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
