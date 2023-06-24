import { notFound } from 'next/navigation'
import { allProjects } from 'contentlayer/generated'
import { Mdx } from '~/app/components/mdx'
import { Header } from './header'
import './mdx.css'
import { ReportView } from './view'
import { Redis } from '@upstash/redis'

export const revalidate = 60

type Props = {
  params: {
    slug: string
  }
}

const redis = Redis.fromEnv()

export async function generateStaticParams(): Promise<Props['params'][]> {
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }))
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug
  const project = allProjects.find((project) => project.slug === slug)
  let views = 0

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <ReportView slug={project.slug} />
      <Header project={project} views={views} />

      <article className="prose prose-zinc prose-quoteless mx-auto px-4 py-12">
        <Mdx code={project.body.code} />
      </article>
    </div>
  )
}
