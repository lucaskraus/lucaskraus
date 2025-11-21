import { AppWindowMacIcon, BrainIcon, TrophyIcon } from 'lucide-react'
import feiBackgroundImage from '@/assets/fei.png'
import firstDevXpBackgroundImage from '@/assets/first-dev-xp.png'
import xendoraBackgroundImage from '@/assets/xendora.png'
import finishedBackgroundImage from '@/assets/finish.png'
import startJourneyBackgroundImage from '@/assets/start-journey.jpg'
import recognitionBackgroundImage from '@/assets/recognition.png'

export const ABOUT_ME_TAB_MENU = [
  {
    id: 'introduction',
    title: 'Introduction',
    icon: <AppWindowMacIcon className="text-inherit" />,
    content:
      'Mobile & Front-End Engineer with over 8 years of experience in the industry. Specialized in building scalable and efficient web and mobile applications using React Native, React, Next.js, Vue.js, Nuxt.js, Tailwind CSS, and Node.js.',
  },
  {
    id: 'certificates',
    title: 'Certificates',
    icon: <TrophyIcon className="text-inherit" />,
    content:
      '• Meta Professional Front-End Developer Certificate\n' +
      '• GitHub Foundations Certification\n' +
      '• Cielo Dev Bootcamp (Ada + Cielo)\n' +
      '• Scalable Microservices with Node.js — Rocketseat\n' +
      '• Duolingo English Test — 120 Score (B2)',
  },
  {
    id: 'skills',
    title: 'Skills',
    icon: <BrainIcon className="text-inherit" />,
    content:
      'Front-End: React, Next.js, Vue.js, Nuxt.js, Tailwind CSS\n' +
      'Mobile: React Native (Expo), Nativewind, Reanimated\n' +
      'Web3: Ethers.js, Wagmi, Reown\n' +
      'Back-End: Node.js, Fastify, REST APIs\n' +
      'Databases: MySQL, PostgreSQL, SQLite, Prisma, Knex.js\n' +
      'Cloud: AWS (S3, RDS, SQS/SNS)\n' +
      'Tooling: Git, GitHub Actions, CI/CD, Sentry\n' +
      'Other: UI/UX, Figma, Linux, Docker',
  },
]

export const TIMELINE_ITEMS = [
  {
    title: '2017',
    label: 'Started my journey as intern',
    description:
      'Joined Vertice School as an intern, where I took my first steps in tech supporting infrastructure and building internal tools.',
    image: startJourneyBackgroundImage,
  },
  {
    title: '2019',
    label: 'Professional Excellence Award',
    description:
      'Awarded the “76 Shirt”, a distinction given to top-performing employees for outstanding technical excellence and dedication.',
    image: recognitionBackgroundImage,
  },
  {
    title: '2020',
    label: "Started bachelor's degree in CS",
    description:
      'Began my Computer Science degree at FEI, strengthening my foundations in algorithms, compilers, software engineering, and systems.',
    image: feiBackgroundImage,
  },
  {
    title: '2021',
    label: 'My first developer experience',
    description:
      'Transitioned into full-stack development, building internal systems with React, Node.js, and MySQL to optimize workflows for over 200 users.',
    image: firstDevXpBackgroundImage,
  },
  {
    title: '2023',
    label: 'Joined Xendora as Front-End Engineer',
    description:
      'Became a Front-End & Mobile Engineer at Xendora, developing cross-platform apps with React Native, Web3 features, CI/CD, and Sentry monitoring.',
    image: xendoraBackgroundImage,
  },
  {
    title: '2024',
    label: "Finished my bachelor's degree",
    description:
      'Graduated in Computer Science, concluding a journey marked by academic projects, practical experience, and continuous growth.',
    image: finishedBackgroundImage,
  },
]
