'use client'

import Link from 'next/link'
import { Linkedin, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-editorial-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-headline text-2xl font-bold mb-4">Marketing Strategies Hub</h3>
            <p className="text-gray-400 text-sm">
              Your source for proven marketing strategies, tools, and insights.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wide text-sm">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/marketing/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/marketing/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/marketing/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 uppercase tracking-wide text-sm">Follow Us</h4>
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Marketing Strategies Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
