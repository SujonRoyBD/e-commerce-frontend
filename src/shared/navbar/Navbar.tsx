"use client"

import { Search, ShoppingCart, Leaf } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/aboutUs" },
  { name: "Mission", href: "/ourMisson" },
  { name: "Become a Seller", href: "/become-seller" },
  { name: "Blog", href: "/ourBlog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contactUs" },
]

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
            <Leaf className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900 leading-none">TABLE</span>
            <span className="text-lg font-bold text-green-600 leading-none">FRESH</span>
          </div>
        </Link>

        {/* Navigation Links - Hidden on mobile */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5 text-gray-600" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Shopping Cart */}
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5 text-gray-600" />
            <span className="sr-only">Shopping cart</span>
          </Button>

          {/* User Avatar */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuItem>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/orders">Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Donate Button */}
          <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md">
            <span className="mr-1">♥</span>
            Donate
          </Button>

          {/* Mobile menu button - you can add a hamburger menu here */}
          <Button variant="ghost" size="icon" className="lg:hidden">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="sr-only">Open menu</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
