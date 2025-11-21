'use client'

import clsx from 'clsx'
import { motion } from 'motion/react'
import { useState } from 'react'
import { FolderGit2, Layers, Code2, Terminal } from 'lucide-react'
import RepositoryCard from '../cards/RepositoryCard'
import { IRepository } from '@/@types'

const REPOSITORIES = [
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

export default function Repositories() {
  const [activeRepo, setActiveRepo] = useState<string>(REPOSITORIES[0].id)

  return (
    <div className="flex flex-col gap-10 w-full items-center">
      <div className="flex flex-col items-center w-full gap-2">
        <h1 className="text-2xl font-medium">Projects</h1>
        <p className="text-lg text-center text-gray-400">
          A selection of my favorite personal projects and repositories
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-start w-full lg:max-w-5xl">
        {/* Navigation Menu */}
        <div className="flex lg:flex-col flex-row justify-center gap-3 min-w-40">
          {REPOSITORIES.map(repo => (
            <button
              key={repo.id}
              onClick={() => setActiveRepo(repo.id)}
              className={clsx(
                'relative flex flex-row items-center justify-center gap-2 lg:px-4 lg:py-2 px-2 py-1 text-sm font-medium rounded-lg outline-none transition-all active:scale-95 cursor-pointer duration-200',
                activeRepo === repo.id
                  ? 'text-gray-900'
                  : 'text-gray-400 hover:text-gray-200'
              )}
            >
              {activeRepo === repo.id && (
                <motion.div
                  layoutId="repo-tab-indicator"
                  className="absolute inset-0 rounded-lg bg-green-400"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 text-base lg:text-xs">
                {repo.shortTitle}
              </span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="w-full flex justify-center lg:h-[240px] h-auto">
          <RepositoryCard
            repository={
              REPOSITORIES.find(r => r.id === activeRepo) as IRepository
            }
          />
        </div>
      </div>
    </div>
  )
}
