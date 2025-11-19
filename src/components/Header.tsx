import Image from 'next/image'

interface HeaderProps {
  items: string[]
}

export default function Header({ items }: HeaderProps) {
  return (
    <div className="flex flex-row w-full px-6 py-2 items-center justify-between rounded-full backdrop-blur-xs border border-white/10">
      <div>
        <Image src="/logo.svg" alt="Logo" width={40} height={40} />
      </div>
      <div className="flex flex-row gap-6">
        {items.map(item => (
          <button key={item}>{item}</button>
        ))}
      </div>
    </div>
  )
}
