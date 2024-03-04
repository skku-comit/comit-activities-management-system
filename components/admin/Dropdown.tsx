'use client'

import * as React from 'react'
import { DropdownMenuCheckboxItemProps } from '@radix-ui/react-dropdown-menu'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { FaCaretDown } from 'react-icons/fa'
import { FaCaretUp } from 'react-icons/fa'

type Checked = DropdownMenuCheckboxItemProps['checked']

export default function DropdownMenuCheckboxes() {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false)
  return (
    <DropdownMenu
      onOpenChange={(open) => {
        setIsDropdownOpen(open)
      }}
    >
      <DropdownMenuTrigger className="flex items-center justify-between gap-2">
        {isDropdownOpen ? <FaCaretUp /> : <FaCaretDown />}
        <p>admin</p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/">Log out</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/">Quit</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
