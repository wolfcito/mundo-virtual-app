import { Redis } from '@upstash/redis'
import { notFound } from 'next/navigation'
import { allProjects } from 'contentlayer/generated'

import './mdx.css'

import { Mdx } from '~/app/components/mdx'
import { Header } from '~/app/components/header'
import { ReportView } from '~/app/components/report-view'

export const revalidate = 60

const redis = Redis.fromEnv()

export async function generateStaticParams(): Promise<PostProps['params'][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }))
}

export default async function PostPage({ params }: PostProps) {
  const slug = params?.slug
  const project = allProjects.find((project) => project.slug === slug)
  const views =
    (await redis.get<number>(['pageviews', 'projects', slug].join(':'))) ?? 0

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <ReportView slug={project.slug} />
      <Header project={project} views={views} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={project.body.code} />
      </article>
    </div>
  )
}

interface PostProps {
  params: {
    slug: string
  }
}
