"use client";

import React, { useState } from "react";
import {
  Menu,
  Search,
  ShoppingCart,
  Heart,
  User,
  LogOut,
  Package,
  Store,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { logout } from "@/redux/features/auth/authSlice";
import AuthModal from "@/components/auth/AuthModal";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/aboutUs" },
  { name: "Mission", href: "/ourMisson" },
  { name: "Become a Seller", href: "/become-seller" },
  { name: "Blog", href: "/ourBlog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contactUs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Redux state
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const cartItems = useAppSelector((state) => state.carts.carts);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md transition-all">
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
            <div className="relative h-10 w-28 sm:w-32">
              <Image
                src="/assets/tableLogo.png"
                alt="Table Fresh Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    isActive
                      ? "bg-emerald-50 text-emerald-700 font-semibold"
                      : "text-gray-600 hover:text-emerald-600 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            {/* Search link / trigger */}
            <Link href="/#search">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full"
              >
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
            </Link>

            {/* Shopping Cart with Live Badge */}
            <Link href="/farm/1">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[11px] font-bold text-white shadow">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
                <span className="sr-only">Shopping cart</span>
              </Button>
            </Link>

            {/* User Auth: Dynamic dropdown if logged in, button if logged out */}
            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 p-1 pl-2 pr-3 rounded-full hover:bg-gray-100 transition-colors border border-gray-200">
                    <Avatar className="h-8 w-8 border border-emerald-500">
                      <AvatarImage src={user.avatar || "/assets/head.png"} alt={user.name} />
                      <AvatarFallback className="bg-emerald-100 text-emerald-800 text-xs font-bold">
                        {user.name.substring(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="text-xs font-semibold text-gray-800 leading-tight max-w-[90px] truncate">
                        {user.name}
                      </p>
                      <p className="text-[10px] text-emerald-600 capitalize font-medium">
                        {user.role}
                      </p>
                    </div>
                    <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 mt-2">
                  <DropdownMenuLabel>
                    <p className="text-sm font-semibold">{user.name}</p>
                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    {user.farmName && (
                      <span className="inline-block mt-1 text-[11px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-medium">
                        {user.farmName}
                      </span>
                    )}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="mr-2 h-4 w-4 text-gray-500" />
                    <span>My Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Package className="mr-2 h-4 w-4 text-gray-500" />
                    <span>My Orders</span>
                  </DropdownMenuItem>
                  {user.role === "seller" && (
                    <DropdownMenuItem asChild className="cursor-pointer">
                      <Link href="/become-seller" className="flex items-center">
                        <Store className="mr-2 h-4 w-4 text-emerald-600" />
                        <span className="text-emerald-700 font-medium">Farmer Dashboard</span>
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={handleLogout}
                    className="cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                onClick={() => setAuthModalOpen(true)}
                variant="outline"
                className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 rounded-full px-4 text-sm font-medium"
              >
                <User className="w-4 h-4 mr-1.5" />
                Sign In
              </Button>
            )}

            {/* Donate CTA */}
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-sm hover:shadow transition-all px-5">
              <Heart className="h-4 w-4 mr-2 fill-white/20" />
              Donate
            </Button>
          </div>

          {/* Mobile Actions & Menu Trigger */}
          <div className="flex md:hidden items-center space-x-1 sm:space-x-2">
            <Link href="/farm/1">
              <Button variant="ghost" size="icon" className="relative text-gray-700">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Sheet Navigation */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-700">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[350px] p-6 flex flex-col justify-between">
                <div>
                  {/* Mobile Logo */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                    <div className="relative h-9 w-28">
                      <Image
                        src="/assets/tableLogo.png"
                        alt="Table Fresh"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Mobile User Profile Header */}
                  <div className="py-4 border-b border-gray-100">
                    {isAuthenticated && user ? (
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-10 w-10 border border-emerald-500">
                            <AvatarImage src={user.avatar || "/assets/head.png"} alt={user.name} />
                            <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-bold text-gray-900 leading-tight">
                              {user.name}
                            </p>
                            <p className="text-xs text-emerald-600 capitalize">{user.role}</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleLogout}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2"
                        >
                          <LogOut className="w-4 h-4" />
                        </Button>
                      </div>
                    ) : (
                      <Button
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setAuthModalOpen(true);
                        }}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-2.5 font-medium"
                      >
                        <User className="w-4 h-4 mr-2" />
                        Sign In / Register
                      </Button>
                    )}
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex flex-col space-y-1 py-4">
                    {navigationItems.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                            isActive
                              ? "bg-emerald-50 text-emerald-700 font-semibold"
                              : "text-gray-700 hover:bg-gray-50 hover:text-emerald-600"
                          }`}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </nav>
                </div>

                {/* Mobile Bottom Section */}
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-2.5">
                    <Heart className="h-4 w-4 mr-2" />
                    Donate to Local Farmers
                  </Button>
                  <p className="text-center text-xs text-gray-400">
                    © 2026 Table Fresh Inc.
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Global Auth Modal */}
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </>
  );
}
