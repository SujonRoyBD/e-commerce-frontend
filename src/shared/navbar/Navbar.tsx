"use client"

import { Search, ShoppingCart, Menu, Leaf } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <Leaf className="h-6 w-6 sm:h-8 sm:w-8 text-green-700" />
            <div className="flex flex-col">
              <span className="text-sm sm:text-lg font-bold text-gray-900">TABLE</span>
              <span className="text-sm sm:text-lg font-bold text-green-600">FRESH</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation - Hidden on mobile, visible on md and up */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Desktop Icons - Hidden on mobile */}
          <div className="hidden sm:flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <Search className="h-4 w-4 text-gray-600" />
              <span className="sr-only">Search</span>
            </Button>

            <Button variant="ghost" size="icon" className="h-9 w-9">
              <ShoppingCart className="h-4 w-4 text-gray-600" />
              <span className="sr-only">Shopping cart</span>
            </Button>

            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>

          {/* Donate Button - Always visible but responsive sizing */}
          <Button className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 sm:px-4 text-xs sm:text-sm rounded-md">
            <span className="mr-1">♥</span>
            <span className="hidden xs:inline">Donate</span>
            <span className="xs:hidden">♥</span>
          </Button>

          {/* Mobile Menu Button - Only visible on mobile */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[290px] sm:w-[350px]">
              <div className="flex flex-col space-y-4 mt-8">
                {/* Mobile Navigation Links */}
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-white hover:text-green-600 transition-colors duration-200 py-2 border-b border-gray-100 last:border-b-0"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Action Icons */}
                <div className="flex items-center justify-center space-x-6 pt-6 border-t border-gray-200">
                  <Button variant="ghost" size="icon" className="h-10 w-10">
                    <Search className="h-5 w-5 text-gray-600" />
                    <span className="sr-only">Search</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="h-10 w-10">
                    <ShoppingCart className="h-5 w-5 text-gray-600" />
                    <span className="sr-only">Shopping cart</span>
                  </Button>
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
