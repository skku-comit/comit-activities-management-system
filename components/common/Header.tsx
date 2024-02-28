'use client'
import Link from 'next/link'
import Image from 'next/image'
import ComitLogo from '@/public/comit.png'
import { Button } from '@/components/ui/button'
import { usePathname, useRouter } from 'next/navigation'
import { GiHamburgerMenu } from 'react-icons/gi'
import { cn } from '@/lib/utils'
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose
} from '@/components/ui/drawer'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { FaLaptopCode } from 'react-icons/fa'
import { BsDoorOpen } from 'react-icons/bs'
import { MdLogin } from 'react-icons/md'
import { PiNotePencilLight } from 'react-icons/pi'

export function NavLink({ href }: { href: string }) {
  const pathname = usePathname()
  return (
    <Link
      href={`/${href}`}
      className={cn(
        'flex items-center text-xl',
        ['/', '/signup', '/login'].includes(pathname) && 'text-white'
      )}
    >
      <p className="font-medium capitalize">{href}</p>
    </Link>
  )
}
export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  return (
    <header
      className={cn(
        'fixed top-0 z-10 flex h-20 w-full justify-center px-4',
        ['/', '/signup', '/login'].includes(pathname)
          ? 'bg-black'
          : 'border-b border-b-gray-200 bg-white'
      )}
    >
      <nav className="flex h-full w-[1280px] items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image src={ComitLogo} alt="comit_logo" width={32} height={37} />
            <p
              className={cn(
                'text-xl font-semibold',
                ['/', '/signup', '/login'].includes(pathname) && 'text-white'
              )}
            >
              CoMit
            </p>
          </div>
        </Link>
        <div className="hidden md:flex md:gap-10 lg:gap-24">
          <NavLink href="about" />
          <NavLink href="study" />
          <NavLink href="clubroom" />
        </div>
        <div className="hidden h-[40px] w-[270px] items-center justify-between md:flex lg:w-[310px]">
          <Button className="h-[36px] w-[120px] text-base lg:w-[140px]" asChild>
            <Link href="/signup">Sign up</Link>
          </Button>
          <Button
            className={cn(
              'h-[36px] w-[120px] text-base lg:w-[140px]',
              ['/', '/signup', '/login'].includes(pathname) && 'border-white'
            )}
            variant="outline"
            asChild
          >
            <Link href="/login">Log in</Link>
          </Button>
        </div>
      </nav>
      <Drawer className="md:hidden">
        <DrawerTrigger>
          <GiHamburgerMenu
            className={cn(
              'md:hidden',
              ['/', '/signup', '/login'].includes(pathname) && 'text-white'
            )}
            size={32}
          />
        </DrawerTrigger>
        <DrawerContent className="flex flex-col gap-4 px-4 pb-6">
          <DrawerClose>
            <div
              className="flex items-center gap-4 text-3xl font-medium"
              onClick={() => {
                router.push('/about')
              }}
            >
              <IoMdInformationCircleOutline />
              <p className="flex items-center text-xl">About</p>
            </div>
          </DrawerClose>
          <DrawerClose>
            <div
              className="flex items-center gap-4 text-3xl font-medium"
              onClick={() => {
                router.push('/study')
              }}
            >
              <FaLaptopCode />
              <p className="flex items-center text-xl">Study</p>
            </div>
          </DrawerClose>
          <DrawerClose>
            <div
              className="flex items-center gap-4 text-3xl font-medium"
              onClick={() => {
                router.push('/clubroom')
              }}
            >
              <BsDoorOpen />
              <p className="flex items-center text-xl">Clubroom</p>
            </div>
          </DrawerClose>
          <DrawerClose>
            <div
              className="flex items-center gap-4 text-3xl font-medium"
              onClick={() => {
                router.push('/login')
              }}
            >
              <MdLogin />
              <p className="flex items-center text-xl">Log in</p>
            </div>
          </DrawerClose>
          <DrawerClose>
            <div
              className="flex items-center gap-4 text-3xl font-medium"
              onClick={() => {
                router.push('/signup')
              }}
            >
              <PiNotePencilLight />
              <p className="flex items-center text-xl">Sign up</p>
            </div>
          </DrawerClose>
        </DrawerContent>
      </Drawer>
    </header>
  )
}
