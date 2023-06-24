'use client'
import { useState, useEffect } from 'react'
import { Redis } from '@upstash/redis'
import { Header } from '../projects/[slug]/header'
import { Project } from '~/.contentlayer/generated'

export function Views({
  redis,
  slug,
  project,
}: {
  redis: Redis
  slug: string
  project: Project
}) {
  const [views, setViews] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const viewsCount = await redis.get<number>(
          ['pageviews', 'projects', slug].join(':')
        )
        setViews(viewsCount ?? 0)
      } catch (error) {
        console.error(`Error: ${error}`)
      }
    }

    fetchData()
  }, [redis, slug])

  return <Header project={project} views={views} />
}
