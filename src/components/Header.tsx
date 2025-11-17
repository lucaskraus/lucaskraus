interface HeaderProps {
  items: string[];
  onPress: (item: string) => void;
}

export default function Header({ items, onPress }: HeaderProps) {
  return (
    <div className='flex flex-row w-full px-4 py-2 items-center justify-between rounded-full backdrop-blur-2xl border border-white/10'>
      <div>
        <img src="/logo.svg" alt="Logo" className='w-10 h-10' />
      </div>
      <div className="flex flex-row gap-4">
        {items.map((item) => (
          <button key={item} onClick={() => onPress(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}