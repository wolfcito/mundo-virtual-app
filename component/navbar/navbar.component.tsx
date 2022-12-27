import pkg from '~/package.json'
import { LogoIcon } from '~/icons'
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="navbar bg-neutral text-neutral-content">
      <Link href={'/'} className="text-xl normal-case btn btn-ghost">
        <div className="indicator">
          <span className="text-xs text-purple-700 indicator-item indicator-bottom indicator-end">
            v{pkg.version}
          </span>
          <LogoIcon />
          <span className="ml-2.5">MundoVirtual</span>
        </div>
      </Link>
    </nav>
  )
}
