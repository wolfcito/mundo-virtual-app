import pkg from '~/package.json'
import { AboutIcon, HomeIcon, LogoIcon, MenuIcon } from '~/icons'
import Link from 'next/link'

export function Navbar() {
  return (
    <div className="navbar bg-neutral">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <MenuIcon />
          </label>

          <ul
            tabIndex={0}
            className="w-56 p-2 mt-3 shadow menu bg-base-100 rounded-box menu-compact dropdown-content"
          >
            <li>
              <Link href={'/'}>
                <HomeIcon />
                Home
              </Link>
            </li>
            <li>
              <Link href={'/about'}>
                <AboutIcon />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/">
          <div className="text-xl normal-case indicator btn btn-ghost">
            <span className="text-xs text-purple-700 indicator-item indicator-bottom indicator-end">
              v{pkg.version}
            </span>
            <LogoIcon />
            <span className="ml-2.5">MundoVirtual</span>
          </div>
        </Link>
      </div>
      <div className="navbar-end"></div>
    </div>
  )
}
