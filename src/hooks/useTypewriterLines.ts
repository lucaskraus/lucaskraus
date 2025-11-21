import { useMemo } from 'react'

export const useTypewriterLines = (content: string | undefined) => {
  const animationDuration = 0.3
  const delayBetweenWords = 0.05

  const words = useMemo(() => {
    if (!content) return []
    return content.split(/(\n)/g).flatMap(part => {
      if (part === '\n') return ['\n']
      return part.split(' ').filter(word => word !== '')
    })
  }, [content])

  const totalAnimationTime = useMemo(() => {
    return words.length > 0
      ? (words.length - 1) * delayBetweenWords + animationDuration
      : 0
  }, [words])

  return {
    words,
    totalAnimationTime,
    animationDuration,
    delayBetweenWords,
  }
}
