import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white pt-14 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/assets/tableLogo.png"
                alt="Table Fresh Logo"
                width={120}
                height={55}
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              Empowering local communities with clean, organic produce harvested straight from neighbor gardens and family farms.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <FiFacebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <FiInstagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <FiTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-base">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/aboutUs" className="hover:text-emerald-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/ourMisson" className="hover:text-emerald-600 transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/become-seller" className="hover:text-emerald-600 transition-colors font-medium text-emerald-700">
                  Become a Seller →
                </Link>
              </li>
              <li>
                <Link href="/ourBlog" className="hover:text-emerald-600 transition-colors">
                  Organic Living Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-base">Customer Service</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/faq" className="hover:text-emerald-600 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contactUs" className="hover:text-emerald-600 transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-emerald-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-emerald-600 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-base">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2.5">
                <FiMapPin className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                <span>123 Organic Way, Farmville, CA 90210</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiMail className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <a href="mailto:info@tablefresh.com" className="hover:text-emerald-600">
                  info@tablefresh.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <FiPhone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <a href="tel:+18880000000" className="hover:text-emerald-600">
                  +1 (888) 000-0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Table Fresh, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/faq" className="hover:text-emerald-600">
              Privacy
            </Link>
            <Link href="/faq" className="hover:text-emerald-600">
              Terms
            </Link>
            <Link href="/contactUs" className="hover:text-emerald-600">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;