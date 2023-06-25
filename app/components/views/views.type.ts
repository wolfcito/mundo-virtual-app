import { Redis } from '@upstash/redis'
import { Project } from '~/.contentlayer/generated'

export interface ViewsProps {
  redis: Redis
  slug: string
  project: Project
}
