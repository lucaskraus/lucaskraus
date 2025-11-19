'use client'

import Image from 'next/image'

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
    <div className="sticky top-8 z-50 flex flex-row w-full px-6 py-3 items-center justify-between rounded-full backdrop-blur-xs border border-white/10 bg-black/10">
      <div>
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
      </div>
      <div className="flex flex-row gap-6">
        {items.map(item => (
          <button
            key={item.label}
            onClick={() => scrollToSection(item.id)}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
