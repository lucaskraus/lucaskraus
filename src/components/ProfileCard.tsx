import profilePicture from '@/assets/profile.png'
import { Github } from 'lucide-react'
import { motion } from 'motion/react'

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="bg-gray-400 rounded-xl p-4 items-center relative flex flex-col"
    >
      <div className="flex flex-row gap-2 items-center">
        <Github />
        <h1 className="text-2xl font-vt323">lucaskraus</h1>
      </div>
      <img src={profilePicture} className="-mb-4" alt="Profile" width={300} />
    </motion.div>
  )
}
