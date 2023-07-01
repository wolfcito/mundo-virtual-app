import Link from 'next/link'
import Image from 'next/image'
import { ProductProps } from './product.type'

export function Product({ project }: { project: ProductProps }) {
  return (
    <Link href="https://m.me/mundovirtual.solutions" target="_blank">
      <article className="p-4 md:p-8">
        <div className="flex flex-1">
          <h2 className="z-20 flex-1 font-display text-xl font-medium text-zinc-200 duration-1000 group-hover:text-white lg:text-3xl">
            {project.title}
          </h2>
          <Image
            src={project.image}
            width={100}
            height={100}
            alt={project.slug}
            className="drop-shadow-[0_20px_15px_rgba(168,85,247,0.6)]"
          />
        </div>
        <p className="z-20 mt-4 text-sm text-zinc-400 duration-1000 group-hover:text-zinc-200">
          {project.description}
        </p>
        <p className="z-20 mt-4 text-right text-sm italic text-zinc-400 duration-1000 group-hover:text-zinc-200">
          {project.slogan}
        </p>
      </article>
    </Link>
  )
}
