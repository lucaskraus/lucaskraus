'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState, useRef, useEffect } from 'react'
import type { ITimelineItem } from '@/@types'
import { TIMELINE_ITEMS } from '@/lib/constants'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ChevronDownIcon, XIcon } from 'lucide-react'

const PASTEL_COLORS = [
  {
    border: 'border-[#a8d5ba]',
    bg: 'bg-[#a8d5ba]',
    text: 'text-[#a8d5ba]',
    shadow: 'shadow-[#a8d5ba]/20',
    glow: '#a8d5ba',
  },
  {
    border: 'border-[#f4b8c5]',
    bg: 'bg-[#f4b8c5]',
    text: 'text-[#f4b8c5]',
    shadow: 'shadow-[#f4b8c5]/20',
    glow: '#f4b8c5',
  },
  {
    border: 'border-[#b5c7ed]',
    bg: 'bg-[#b5c7ed]',
    text: 'text-[#b5c7ed]',
    shadow: 'shadow-[#b5c7ed]/20',
    glow: '#b5c7ed',
  },
  {
    border: 'border-[#f9d89c]',
    bg: 'bg-[#f9d89c]',
    text: 'text-[#f9d89c]',
    shadow: 'shadow-[#f9d89c]/20',
    glow: '#f9d89c',
  },
  {
    border: 'border-[#c9b8e8]',
    bg: 'bg-[#c9b8e8]',
    text: 'text-[#c9b8e8]',
    shadow: 'shadow-[#c9b8e8]/20',
    glow: '#c9b8e8',
  },
  {
    border: 'border-[#9dd5d0]',
    bg: 'bg-[#9dd5d0]',
    text: 'text-[#9dd5d0]',
    shadow: 'shadow-[#9dd5d0]/20',
    glow: '#9dd5d0',
  },
]

function CollapsedNode({
  item,
  index,
  onToggle,
  isLast,
}: {
  item: ITimelineItem
  index: number
  onToggle: () => void
  isLast: boolean
}) {
  const color = PASTEL_COLORS[index % PASTEL_COLORS.length]

  return (
    <div className="flex flex-col items-center lg:flex-1 lg:min-w-0">
      {/* Dot + connectors */}
      <div className="flex flex-col items-center lg:flex-row lg:w-full">
        <div
          className={cn(
            'hidden lg:block h-0.5 flex-1',
            index === 0 ? 'bg-transparent' : color.bg,
            'opacity-30'
          )}
        />
        <motion.button
          onClick={onToggle}
          className={cn(
            'relative z-10 flex items-center justify-center shrink-0',
            'w-12 h-12 rounded-full border-2 bg-background',
            'cursor-pointer transition-colors duration-300',
            color.border
          )}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={cn('scale-110', color.text)}>{item.icon}</span>
        </motion.button>
        <div
          className={cn(
            'hidden lg:block h-0.5 flex-1',
            isLast ? 'bg-transparent' : color.bg,
            'opacity-30'
          )}
        />
      </div>

      {/* Label */}
      <motion.button
        onClick={onToggle}
        className="flex flex-col items-center gap-1 cursor-pointer mt-3"
      >
        <span
          className={cn(
            'text-sm font-medium font-vt323 tracking-wider',
            color.text
          )}
        >
          {item.title}
        </span>
        <h3 className="text-base font-medium leading-tight text-center">
          {item.label}
        </h3>
      </motion.button>
    </div>
  )
}

function MobileTimelineNode({
  item,
  index,
  isExpanded,
  onToggle,
  isLast,
}: {
  item: ITimelineItem
  index: number
  isExpanded: boolean
  onToggle: () => void
  isLast: boolean
}) {
  const color = PASTEL_COLORS[index % PASTEL_COLORS.length]

  return (
    <div className="relative flex gap-6">
      {/* Dot + vertical line */}
      <div className="flex flex-col items-center">
        <motion.button
          onClick={onToggle}
          className={cn(
            'relative z-10 flex items-center justify-center shrink-0',
            'w-12 h-12 rounded-full border-2 bg-background',
            'cursor-pointer transition-colors duration-300',
            color.border,
            isExpanded && 'shadow-lg'
          )}
          style={
            isExpanded ? { boxShadow: `0 0 20px ${color.glow}40` } : undefined
          }
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className={cn('scale-110', color.text)}>{item.icon}</span>
        </motion.button>
        {!isLast && (
          <div className={cn('w-0.5 flex-1 min-h-8', color.bg, 'opacity-30')} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-6">
        <motion.button
          onClick={onToggle}
          className="flex items-center gap-3 cursor-pointer text-left"
        >
          <div>
            <span
              className={cn(
                'text-sm font-medium font-vt323 tracking-wider',
                color.text
              )}
            >
              {item.title}
            </span>
            <h3 className="text-lg font-medium leading-tight">{item.label}</h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center text-muted-foreground shrink-0"
          >
            <ChevronDownIcon className="size-4" />
          </motion.div>
        </motion.button>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="overflow-hidden"
            >
              <div
                className={cn(
                  'mt-4 rounded-xl border overflow-hidden',
                  color.border,
                  color.shadow,
                  'shadow-lg bg-background'
                )}
              >
                {item.image && (
                  <div className="relative h-32 w-full">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover"
                      placeholder="blur"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent to-background" />
                  </div>
                )}
                <div className="p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function Timeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)
  const [desktopHeight, setDesktopHeight] = useState<number | undefined>(
    undefined
  )
  const rowRef = useRef<HTMLDivElement>(null)

  // Measure the row height once an item is expanded, then lock it
  useEffect(() => {
    if (expandedIndex !== null && rowRef.current && !desktopHeight) {
      // Wait for render to measure
      requestAnimationFrame(() => {
        if (rowRef.current) {
          setDesktopHeight(rowRef.current.offsetHeight)
        }
      })
    }
  }, [expandedIndex, desktopHeight])

  const handleToggle = (index: number) => {
    setExpandedIndex(prev => (prev === index ? null : index))
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center w-full gap-2">
        <h1 className="text-2xl font-medium select-none text-center">Career</h1>
        <p className="text-lg select-none text-center">
          A brief overview of my career until now
        </p>
      </div>

      {/* Mobile layout */}
      <div className="max-w-xl mx-auto w-full lg:hidden">
        {TIMELINE_ITEMS.map((item, index) => (
          <MobileTimelineNode
            key={item.title}
            item={item}
            index={index}
            isExpanded={expandedIndex === index}
            onToggle={() => handleToggle(index)}
            isLast={index === TIMELINE_ITEMS.length - 1}
          />
        ))}
      </div>

      {/* Desktop layout */}
      <div
        ref={rowRef}
        className="hidden lg:flex lg:items-start"
        style={desktopHeight ? { minHeight: desktopHeight } : undefined}
      >
        {TIMELINE_ITEMS.map((item, index) => {
          const color = PASTEL_COLORS[index % PASTEL_COLORS.length]
          const isExpanded = expandedIndex === index
          const isLast = index === TIMELINE_ITEMS.length - 1

          return (
            <div key={item.title} className="flex-1 min-w-0">
              {/* Node: always visible */}
              <CollapsedNode
                item={item}
                index={index}
                onToggle={() => handleToggle(index)}
                isLast={isLast}
              />

              {/* Card: slides up/down like a curtain */}
              <div className="overflow-clip">
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      key="card"
                      initial={{ y: 'calc(-100% - 12px)' }}
                      animate={{ y: 0 }}
                      exit={{ y: 'calc(-100% - 12px)' }}
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                      className={cn(
                        'rounded-xl border overflow-hidden cursor-pointer mt-3 mx-1',
                        color.border,
                        color.shadow,
                        'shadow-lg bg-background'
                      )}
                      onClick={() => handleToggle(index)}
                    >
                      {item.image && (
                        <div className="relative h-24 w-full">
                          <Image
                            src={item.image}
                            alt={item.label}
                            fill
                            className="object-cover"
                            placeholder="blur"
                            sizes="400px"
                          />
                          <div className="absolute inset-0 bg-linear-to-b from-transparent to-background" />
                        </div>
                      )}
                      <div className="p-3">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span
                              className={cn(
                                'text-xs font-medium font-vt323 tracking-wider',
                                color.text
                              )}
                            >
                              {item.title}
                            </span>
                            <h3 className="text-sm font-medium leading-tight mb-1">
                              {item.label}
                            </h3>
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
