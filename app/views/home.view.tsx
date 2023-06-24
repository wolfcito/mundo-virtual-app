import { Particles } from '~/app/components/particles'

export function Home() {
  return (
    <>
      <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <div className="animate-glow hidden h-px w-screen animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <h1 className="z-10 flex animate-title cursor-default whitespace-nowrap bg-white bg-clip-text font-display text-4xl text-transparent duration-1000 sm:text-6xl md:text-9xl ">
          Mundo<div className="text-purple-600">Virtual</div>
        </h1>

        <div className="animate-glow hidden h-px w-screen animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
        <div className="my-16 animate-fade-in text-center">
          <h2 className="px-10 text-sm text-zinc-500">
            Transformando ideas en realidad, construyendo juntos una línea de
            código a la vez.
          </h2>
        </div>
      </div>
    </>
  )
}
