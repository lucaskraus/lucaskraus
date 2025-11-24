'use client'

import clsx from 'clsx'
import { motion } from 'motion/react'
import { useState } from 'react'
import RepositoryCard from '../cards/RepositoryCard'
import { IRepository } from '@/@types'
import { REPOSITORIES } from '@/lib/constants'

export default function Repositories() {
  const [activeRepo, setActiveRepo] = useState<string>(REPOSITORIES[0].id)

  return (
    <div className="flex flex-col gap-10 w-full items-center">
      <div className="flex flex-col items-center w-full gap-2">
        <h1 className="text-2xl font-medium select-none">Projects</h1>
        <p className="text-lg text-center select-none">
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
                'relative flex flex-row items-center justify-center gap-2 lg:px-4 lg:py-2 px-2 py-1 rounded-lg outline-none transition-all active:scale-95 cursor-pointer duration-200',
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
              <span className="relative z-10 text-xs lg:text-sm">
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
