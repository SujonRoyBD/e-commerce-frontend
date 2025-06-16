
"use client";

import Link from "next/link";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaRegComment } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { GiRoyalLove } from "react-icons/gi";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"; // adjust path if needed

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/aboutUs" },
  { name: "Mission", href: "/ourMisson" },
  { name: "Become a seller", href: "/dashboard" },
  { name: "Blog", href: "/ourBlog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contactUs" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      {/* Desktop Navbar */}
      <div className=" md:hidden flex items-center justify-between px-8 py-3 border-b border-gray-200">
        {/* Logo */}
        <Link href="/">
          <Image src="/assets/logo.png" alt="Logo" height={60} width={100} />
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6">
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-gray-800 hover:text-red-500 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <Link href="/cart" aria-label="Comments">
            <FaRegComment className="text-2xl" />
          </Link>
          <Link href="/login" aria-label="Cart">
            <BsCart2 className="text-2xl" />
          </Link>
          <Link href="/cart">
            <Image src="/assets/head.png" alt="head" height={40} width={40} />
          </Link>
          <Link
            href="/donate"
            className="flex items-center px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            <GiRoyalLove className="mr-1" /> <span>Donate</span>
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between px-4 py-3 border-b border-gray-200">
        {/* Logo */}
        <Link href="/">
          <Image src="/assets/logo.png" alt="Logo" height={40} width={100} />
        </Link>

        {/* Menu Toggle */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <RxCross2 size={24} /> : <IoMenu size={24} />}
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-white w-[250px]">
            <SheetHeader>
              <SheetDescription>
                <ul className="flex flex-col gap-3 mt-6">
                  {navLinks.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 rounded text-base font-medium"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;

