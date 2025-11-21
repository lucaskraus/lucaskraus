import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { NextResponse } from 'next/server'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

const limiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(3, '1 d'),
})

export default async function middleware(req: Request) {
  const ip = req.headers.get('x-forwarded-for') ?? 'anonymous'
  const { success } = await limiter.limit(ip)

  if (!success) {
    return NextResponse.json(
      { error: 'Too many requests', success: false },
      { status: 429, headers: { 'Content-Type': 'application/json' } }
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/api/mail/:path*',
}
