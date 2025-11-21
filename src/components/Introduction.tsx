/* eslint-disable @next/next/no-img-element */
import {
  BriefcaseIcon,
  Building2Icon,
  GlobeIcon,
  CodeXmlIcon,
} from 'lucide-react'

const INTRODUCTION_ITEMS = [
  {
    icon: <GlobeIcon className="size-4 text-gray-500" />,
    label: 'Location',
    value: 'Sao Paulo, Brazil',
  },
  {
    icon: <Building2Icon className="size-4 text-gray-500" />,
    label: 'Current Company',
    value: 'Xendora',
  },
  {
    icon: <BriefcaseIcon className="size-4 text-gray-500" />,
    label: 'Role',
    value: 'Mobile & Front-End Engineer',
  },
]

export default function Introduction() {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-20 gap-10 items-center">
      {INTRODUCTION_ITEMS.map(item => (
        <div className="flex flex-col gap-2" key={item.label}>
          <div className="flex flex-row items-center gap-2">
            {item.icon}
            <span className="text-gray-500">{item.label}</span>
          </div>
          <h1 className="text-xl font-medium">{item.value}</h1>
        </div>
      ))}
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <CodeXmlIcon className="size-4 text-gray-500" />
          <span className="text-gray-500">Main Skills</span>
        </div>
        <img
          src="https://skillicons.dev/icons?i=html,css,ts,react,nextjs,vue,nuxtjs,tailwind,figma,nodejs,&theme=dark&perline=5"
          loading="eager"
          alt="Skill Icons"
        />
      </div>
    </div>
  )
}
