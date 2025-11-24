import {
  AppWindowMacIcon,
  BrainIcon,
  TrophyIcon,
  FolderGit2,
  Layers,
  Code2,
  Terminal,
} from 'lucide-react'
import feiBackgroundImage from '@/assets/fei.webp'
import firstDevXpBackgroundImage from '@/assets/first-dev-xp.webp'
import xendoraBackgroundImage from '@/assets/xendora.webp'
import finishedBackgroundImage from '@/assets/finish.webp'
import startJourneyBackgroundImage from '@/assets/start-journey.jpg'
import recognitionBackgroundImage from '@/assets/recognition.webp'
import githubProfileImage from '@/assets/github-profile.webp'
import linkedinProfileImage from '@/assets/linkedin-profile.webp'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
      '• Front-End: React, Next.js, Vue.js, Nuxt.js, Tailwind CSS\n' +
      '• Mobile: React Native (Expo), Nativewind, Reanimated\n' +
      '• Web3: Ethers.js, Wagmi, Reown\n' +
      '• Back-End: Node.js, Fastify, REST APIs\n' +
      '• Databases: MySQL, PostgreSQL, SQLite, Prisma, Knex.js\n' +
      '• Cloud: AWS (S3, RDS, SQS/SNS)\n' +
      '• Tooling: Git, GitHub Actions, CI/CD, Sentry\n' +
      '• Other: UI/UX, Figma, Linux, Docker',
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

export const REPOSITORIES = [
  {
    id: 'repo1',
    title: 'portfolio',
    shortTitle: 'Portfolio',
    description:
      'This website is my portfolio. It shares a bit about who I am, my background, and some of the projects I’ve worked on. You can also find the source code on GitHub.',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Motion',
      'Redis',
      'Upstash',
      'Zod',
      'Resend',
    ],
    link: 'https://github.com/lucaskraus/lucaskraus',
    icon: <Layers className="text-inherit" />,
  },
  {
    id: 'repo2',
    title: 'animations-dev-course',
    shortTitle: 'Animations',
    description:
      'Animations built during the development of the course "Animations in the Web" by Emil Kowalski. It is a blueprint for cool and performant animations.',
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Motion'],
    link: 'https://github.com/lucaskraus/animations-dev-course',
    icon: <Code2 className="text-inherit" />,
  },
  {
    id: 'repo3',
    title: 'daily-diet-api',
    shortTitle: 'Daily Diet API',
    description:
      'API for a daily diet tracker. It helps you log your daily meals and monitor your progress over time. The full collection of endpoints is available in the repository.',
    technologies: [
      'Node.js',
      'Fastify',
      'TypeScript',
      'Knex.js',
      'SQLite',
      'Zod',
    ],
    link: 'https://github.com/lucaskraus/daily-diet-api',
    icon: <Terminal className="text-inherit" />,
  },
  {
    id: 'repo4',
    title: 'br-index-economy-article',
    shortTitle: 'Bitcoin Article',
    description:
      'Article that I wrote about Bitcoin and decentralized finance. It was published in monthly newsletter of BR Index Economy group.',
    technologies: ['Bitcoin', 'Web3', 'Economy', 'Article'],
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7313366457243852802/',
    icon: <FolderGit2 className="text-inherit" />,
  },
]

export const SOCIAL_MEDIA = [
  {
    name: 'GitHub',
    link: 'https://github.com/lucaskraus',
    image: githubProfileImage,
    icon: faGithub,
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/lucas-kraus-00200b252/',
    image: linkedinProfileImage,
    icon: faLinkedin,
    iconColor: '#0077B5',
  },
]
