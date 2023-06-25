'use client'
import { useState, useEffect } from 'react'

import { ViewsProps } from './views.type'
import { Header } from '~/app/components/header'

export function Views({ redis, slug, project }: ViewsProps) {
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
