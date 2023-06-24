'use client'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export const Navigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null)
  const [isIntersecting, setIntersecting] = useState(true)

  const pathname = usePathname()

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 border-b  backdrop-blur duration-200  ${
          isIntersecting
            ? 'border-transparent bg-zinc-900/0'
            : 'bg-zinc-900/500  border-zinc-800 '
        }`}
      >
        <div className="container mx-auto flex flex-row-reverse items-center justify-between p-6">
          <div className="flex justify-between gap-8">
            <Link
              href="/projects"
              className="text-zinc-400 duration-200 hover:text-zinc-100"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="text-zinc-400 duration-200 hover:text-zinc-100"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {pathname !== '/' ? (
              <Link
                href="/"
                className="text-zinc-300 duration-200 hover:text-zinc-100"
              >
                <ArrowLeft className="h-6 w-6 " />
              </Link>
            ) : null}
            <Image
              src="/mundovirtual.png"
              alt="logo of mundovirtual solutions"
              width={38}
              height={38}
            />
          </div>
        </div>
      </div>
    </header>
  )
}
