'use client'

import clsx from 'clsx'
import { motion } from 'motion/react'
import { useState } from 'react'
import { FolderGit2, ExternalLink, Layers, Code2, Terminal } from 'lucide-react'

const REPOSITORIES = [
  {
    id: 'repo1',
    title: 'react-native-graph-kit',
    shortTitle: 'RN Graph Kit',
    description:
      'A high-performance graphing library for React Native, leveraging Skia for 60fps animations and interactions. Supports line, bar, and pie charts with gesture handling.',
    technologies: ['React Native', 'Skia', 'TypeScript', 'Reanimated'],
    link: 'https://github.com/lucaskraus/react-native-graph-kit',
    icon: <Layers className="text-inherit" />,
  },
  {
    id: 'repo2',
    title: 'next-saas-boilerplate',
    shortTitle: 'SaaS Starter',
    description:
      'A comprehensive production-ready SaaS boilerplate featuring Authentication, Billing (Stripe), User Dashboard, and Admin Panel. Built with modern web standards.',
    technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'Stripe'],
    link: 'https://github.com/lucaskraus/next-saas-boilerplate',
    icon: <Code2 className="text-inherit" />,
  },
  {
    id: 'repo3',
    title: 'dev-cli-tools',
    shortTitle: 'Dev CLI',
    description:
      'A collection of command-line interface tools designed to streamline the development workflow. Includes generators for components, hooks, and utility functions.',
    technologies: ['Node.js', 'Commander', 'Inquirer', 'Chalk'],
    link: 'https://github.com/lucaskraus/dev-cli-tools',
    icon: <Terminal className="text-inherit" />,
  },
  {
    id: 'repo4',
    title: 'finance-tracker-app',
    shortTitle: 'Finance App',
    description:
      'A cross-platform mobile application for personal finance management. Features automatic transaction categorization, budget planning, and spending insights.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Google Cloud'],
    link: 'https://github.com/lucaskraus/finance-tracker-app',
    icon: <FolderGit2 className="text-inherit" />,
  },
]

const RepoDetail = ({ id }: { id: string }) => {
  const repo = REPOSITORIES.find(r => r.id === id)
  if (!repo) return null

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4 p-6 border border-[#271e37] rounded-xl bg-black/20  w-full"
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-2xl font-medium font-vt323 text-green-400">
            {repo.title}
          </h3>
          <a
            href={repo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        </div>
        <p className="text-gray-300 leading-relaxed">{repo.description}</p>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
          Technologies
        </span>
        <div className="flex flex-row flex-wrap gap-2">
          {repo.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-[#271e37] text-green-400 border border-green-400/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

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
        <div className="flex flex-col justify-center gap-3 min-w-36">
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
          <RepoDetail id={activeRepo} />
        </div>
      </div>
    </div>
  )
}
