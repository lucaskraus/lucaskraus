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
      'A high-performance graphing library for React Native, leveraging Skia for 60fps animations and interactions. Supports line, bar, and pie charts with gesture handling.',
    technologies: ['React Native', 'Skia', 'TypeScript', 'Reanimated'],
    link: 'https://github.com/lucaskraus/react-native-graph-kit',
    icon: <Layers className="text-inherit" />,
  },
  {
    id: 'repo2',
    title: 'animations-dev-course',
    shortTitle: 'Animations',
    description:
      'A comprehensive production-ready SaaS boilerplate featuring Authentication, Billing (Stripe), User Dashboard, and Admin Panel. Built with modern web standards.',
    technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'Stripe'],
    link: 'https://github.com/lucaskraus/next-saas-boilerplate',
    icon: <Code2 className="text-inherit" />,
  },
  {
    id: 'repo3',
    title: 'daily-diet-api',
    shortTitle: 'Daily Diet API',
    description:
      'A collection of command-line interface tools designed to streamline the development workflow. Includes generators for components, hooks, and utility functions.',
    technologies: ['Node.js', 'Commander', 'Inquirer', 'Chalk'],
    link: 'https://github.com/lucaskraus/dev-cli-tools',
    icon: <Terminal className="text-inherit" />,
  },
  {
    id: 'repo4',
    title: 'br-index-economy-article',
    shortTitle: 'Bitcoin Article',
    description:
      'A cross-platform mobile application for personal finance management. Features automatic transaction categorization, budget planning, and spending insights.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Google Cloud'],
    link: 'https://github.com/lucaskraus/finance-tracker-app',
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
          A selection of my favorite personal repositories
        </p>
      </div>

      <div className="flex flex-row gap-8 items-start w-full max-w-5xl">
        {/* Navigation Menu */}
        <div className="flex flex-col justify-center gap-3 min-w-40">
          {REPOSITORIES.map(repo => (
            <button
              key={repo.id}
              onClick={() => setActiveRepo(repo.id)}
              className={clsx(
                'relative flex flex-row items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg outline-none transition-all active:scale-95 cursor-pointer duration-200',
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
              <span className="relative z-10">{repo.shortTitle}</span>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="w-full flex justify-center h-[240px]">
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
