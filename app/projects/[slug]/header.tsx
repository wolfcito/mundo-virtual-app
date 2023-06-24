'use client'
import { ArrowLeft, Eye, Github, Twitter } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

type Props = {
  project: {
    url?: string
    title: string
    description: string
    repository?: string
  }

  views: number
}

export const Header: React.FC<Props> = ({ project, views }) => {
  const ref = useRef<HTMLElement>(null)
  const [isIntersecting, setIntersecting] = useState(true)

  const links: { label: string; href: string }[] = []
  if (project.repository) {
    links.push({
      label: 'GitHub',
      href: `https://github.com/${project.repository}`,
    })
  }
  if (project.url) {
    links.push({
      label: 'Website',
      href: project.url,
    })
  }
  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <header
      ref={ref}
      className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black"
    >
      <div
        className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur duration-200 lg:bg-transparent lg:backdrop-blur-none ${
          isIntersecting
            ? 'border-transparent bg-zinc-900/0'
            : 'border-zinc-200  bg-white/10 lg:border-transparent'
        }`}
      >
        <div className="container mx-auto flex flex-row-reverse items-center justify-between p-6">
          <div className="flex justify-between gap-8">
            <span
              title="View counter for this page"
              className={`flex items-center gap-1 duration-200 hover:font-medium ${
                isIntersecting
                  ? ' text-zinc-400 hover:text-zinc-100'
                  : 'text-zinc-600 hover:text-zinc-900'
              } `}
            >
              <Eye className="h-5 w-5" />{' '}
              {Intl.NumberFormat('en-US', { notation: 'compact' }).format(
                views
              )}
            </span>
            <Link target="_blank" href="https://twitter.com/AKAwolfcito">
              <Twitter
                className={`h-6 w-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? ' text-zinc-400 hover:text-zinc-100'
                    : 'text-zinc-600 hover:text-zinc-900'
                } `}
              />
            </Link>
            <Link target="_blank" href="https://github.com/wolfcito">
              <Github
                className={`h-6 w-6 duration-200 hover:font-medium ${
                  isIntersecting
                    ? ' text-zinc-400 hover:text-zinc-100'
                    : 'text-zinc-600 hover:text-zinc-900'
                } `}
              />
            </Link>
          </div>

          <Link
            href="/projects"
            className={`duration-200 hover:font-medium ${
              isIntersecting
                ? ' text-zinc-400 hover:text-zinc-100'
                : 'text-zinc-600 hover:text-zinc-900'
            } `}
          >
            <ArrowLeft className="h-6 w-6 " />
          </Link>
        </div>
      </div>
      <div className="container relative isolate mx-auto overflow-hidden py-24 sm:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              {project.description}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <Link target="_blank" key={link.label} href={link.href}>
                  {link.label} <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
