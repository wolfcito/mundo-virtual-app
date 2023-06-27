import { Card } from '~/app/components/card'
import { Product, ProductProps } from '~/app/components/product'

export function Products() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <div className="container mx-auto flex items-center justify-center px-4">
        <div className="mx-auto mt-32 grid w-full grid-cols-1 gap-8 sm:mt-0 sm:grid-cols-3">
          {products.map((project) => (
            <Card key={project.slug} className="hover:border-purple-500">
              <Product project={project} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const products = [
  {
    slug: 'consultoria-tecnica',
    title: 'Consultoría Técnica',
    image: '/coin.png',
    description:
      'Acelera el crecimiento de tu software con consultorías técnicas de élite en Mundo Virtual. Expertos en soluciones personalizadas listos para potenciar tu éxito.',
    slogan: '¡Descubre el poder de la consultoría técnica hoy!',
  },
  {
    slug: 'diseño-prototipos',
    title: 'Diseño de Prototipos',
    image: '/find.png',
    description:
      'Descubre el poder del Diseño de Prototipos en Mundo Virtual. Impulsa tu software con interfaces intuitivas y funcionales.',
    slogan: '¡Transforma tus ideas en experiencias digitales impactantes!',
  },
  {
    slug: 'desarrollo-express',
    title: 'Desarrollo Express',
    image: '/gift.png',
    description:
      'Potencia tu software con Desarrollo Express en Mundo Virtual. Obtén soluciones ágiles y eficientes para tus proyectos.',
    slogan: '¡Acelera tu éxito digital con nuestro equipo de expertos!',
  },
] as ProductProps[]
