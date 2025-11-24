'use client'

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
    <div className="sticky top-8 z-50 flex flex-row w-full lg:px-6 px-2.5 py-4 items-center justify-center rounded-full backdrop-blur-xs border border-white/10 bg-black/10">
      <div className="flex flex-row gap-4 lg:gap-12">
        {items.map(item => (
          <button
            key={item.label}
            onClick={() => scrollToSection(item.id)}
            className="text-primary hover:text-white active:scale-95 transition-all duration-300 cursor-pointer tracking-tight text-[0.65rem] lg:text-base"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
