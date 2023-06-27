import { Contact, Home, Projects, Products } from '~/app/views'

export default function HomePage() {
  return (
    <>
      <Home />
      <Products />
      {/* @ts-expect-error Server Component */}
      <Projects />
      <Contact />
    </>
  )
}
