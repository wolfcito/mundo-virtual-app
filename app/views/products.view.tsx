import { products } from '~/data'
import { Card } from '~/app/components/card'
import { Product } from '~/app/components/product'

export function Products() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <div className="container mx-auto flex items-center justify-center px-4">
        <div className="mx-auto mt-32 grid w-full grid-cols-1 gap-8 sm:mt-0 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.slug} className="border-purple-500">
              <Product project={product} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
