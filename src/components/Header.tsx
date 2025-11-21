'use client'

import { MessageCircleCodeIcon } from 'lucide-react'

interface HeaderProps {
  items: { label: string; id: string }[]
}

export default function Header({ items }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="sticky top-8 z-50 flex flex-row w-full px-6 py-4 items-center justify-between rounded-full backdrop-blur-xs border border-white/10 bg-black/10">
      <div>
        <MessageCircleCodeIcon className="size-6 text-white" />
      </div>
      <div className="flex flex-row gap-8">
        {items.map(item => (
          <button
            key={item.label}
            onClick={() => scrollToSection(item.id)}
            className="hover:text-primary active:scale-95 transition-all duration-300 cursor-pointer tracking-tight"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
