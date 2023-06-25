'use client'

import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'

import { ArrowLeft } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export function Navigation() {
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
        className={clsx(
          'fixed inset-x-0 top-0 z-50 border-b  backdrop-blur duration-200',
          isIntersecting
            ? 'border-transparent bg-zinc-900/0'
            : 'bg-zinc-900/500 border-zinc-800'
        )}
      >
        <div className="container mx-auto flex items-center justify-between p-6">
          <div className="flex items-center gap-4">
            {pathname !== '/' ? (
              <Link
                href="/"
                className="text-zinc-300 duration-200 hover:text-zinc-100"
              >
                <ArrowLeft className="h-6 w-6 " />
              </Link>
            ) : null}
            <Link href="/">
              <Image
                src="/mundovirtual.png"
                alt="logo of mundovirtual solutions"
                width={38}
                height={38}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
