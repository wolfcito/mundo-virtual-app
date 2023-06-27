import { Particles } from '~/app/components/particles'
import { ParticleLayoutProps } from './layout.type'

export function ParticleLayout({ children }: ParticleLayoutProps) {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <div className="animate-glow hidden h-px w-screen animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      {children}
    </div>
  )
}
