import { Contact, Home, Projects } from '~/app/views'

export default function HomePage() {
  return (
    <>
      <Home />
      {/* @ts-expect-error Server Component */}
      <Projects />
      <Contact />
    </>
  )
}
