import { IRepository } from '@/@types'
import { ExternalLink } from 'lucide-react'
import { motion } from 'motion/react'

interface RepositoryCardProps {
  repository: IRepository
}

export default function RepositoryCard({ repository }: RepositoryCardProps) {
  return (
    <motion.div
      key={repository.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4 p-6 border justify-between border-[#271e37] rounded-xl bg-black/30  w-full"
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-2xl font-medium font-vt323 text-green-400">
            {repository.title}
          </h3>
          <a
            href={repository.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        </div>
        <p className="text-gray-300 leading-relaxed">
          {repository.description}
        </p>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <span className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
          Technologies
        </span>
        <div className="flex flex-row flex-wrap gap-2">
          {repository.technologies.map((tech, index) => (
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
