import profilePicture from '@/assets/profile.png'
import { Github } from 'lucide-react'

export default function ProfileCard() {
  return (
    <div className="bg-gray-400 rounded-xl p-4 items-center relative flex flex-col">
      <div className="flex flex-row gap-2 items-center">
        <Github />
        <h1 className="text-2xl font-vt323">lucaskraus</h1>
      </div>
      <img src={profilePicture} className="-mb-4" alt="Profile" width={300} />
    </div>
  )
}
