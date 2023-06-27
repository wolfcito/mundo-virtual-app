import { Project } from '~/.contentlayer/generated'

import { ParticleLayout } from '~/app/components/layout'

export function Home() {
  return (
    <ParticleLayout>
      <div className="hidden w-screen h-px animate-glow animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <h1 className="z-10 flex text-4xl text-transparent duration-1000 bg-white cursor-default animate-title whitespace-nowrap bg-clip-text font-display sm:text-6xl md:text-9xl">
        Mundo<div className="text-purple-600">Virtual</div>
      </h1>

      <div className="hidden w-screen h-px animate-glow animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="px-10 text-sm text-zinc-500">
          Transformando ideas en realidad, construyendo juntos una línea de
          código a la vez.
        </h2>
      </div>
    </ParticleLayout>
  )
}

const products = [
  {
    slug: 'consultoria-1',
    title: 'product1',
    description: 'description',
  },
] as [Project]
