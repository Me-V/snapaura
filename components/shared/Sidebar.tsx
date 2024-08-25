"use client"

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar bg-black">
      <div className="flex size-full flex-col gap-4 bg-black">
        <Link href="/" className="sidebar-logo">
          <p className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600">
            Snap Aura
          </p>

        </Link>

        <nav className="sidebar-nav bg-black">
          <SignedIn>
            {/* The code written within the signed in coponent of the clerk is only shown is the user is logged in###############################################################*/}
            <ul className="sidebar-nav_elements">
              {/* slice is used to push the other elements of the sidebar to the bottom */}
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname
                // isActive helps finding out if we are already on a specific link from the list of links
                return (

                  // key is link.route coz link.route is always unique
                  <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-white text-black' : 'text-gray-700'
                    }`}>
                    {/* Note:- link.route is coming from the navLinks from the constant file  */}
                    <Link className={`sidebar-link group ${isActive ? 'bg-white text-black' : 'text-white'
                      }`} href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-300'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>


            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-white text-black' : 'text-gray-700'
                    }`}>
                    <Link className={`sidebar-link group ${isActive ? 'bg-white text-black' : 'text-white'
                      }`} href={link.route}>
                      <Image
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-300'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}

              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl='/' showName />
              </li>
            </ul>
          </SignedIn>

          {/* when we are not signed in --- this code will be executed */}
          <SignedOut>
            {/* asChild property is to make this button a LINK  */}
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar