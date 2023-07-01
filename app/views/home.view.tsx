import Link from 'next/link'
import Image from 'next/image'
import { ParticleLayout } from '~/app/components/layout'

export function Home() {
  return (
    <ParticleLayout>
      <div className="animate-glow mb-4 hidden h-px w-screen animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <div className="pb-7">
        <Image
          src="/mundovirtual.png"
          alt="mundovirtual solutions logo"
          width={150}
          height={150}
        />
      </div>
      <h1 className="z-10 flex animate-title cursor-default whitespace-nowrap bg-white bg-clip-text font-display text-4xl text-transparent duration-1000 sm:text-6xl md:text-9xl">
        Mundo<div className="text-purple-600">Virtual</div>
      </h1>
      <div className="animate-glow mt-4 hidden h-px w-screen animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <div className="my-4 animate-fade-in text-center">
        <h2 className="mb-7 px-10 text-sm text-zinc-500">
          Transformando ideas en realidad, construyendo juntos una línea de
          código a la vez.
        </h2>
        <Link
          className="mx-4 flex flex-wrap rounded-xl bg-purple-600 p-4 text-lg text-white"
          href="https://m.me/mundovirtual.solutions"
          target="_blank"
        >
          Comencemos a construir un proyecto increíble!
        </Link>
      </div>
    </ParticleLayout>
  )
}
