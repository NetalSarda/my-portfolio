import Link from "next/link"
import { Github, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-light)]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">JULIA HUANG</h2>
            <p className="text-sm text-muted-foreground">
              Transforming spaces through AI-driven design and creative innovation.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">AI Architecture Design</li>
              <li className="text-muted-foreground">Digital Art Installation</li>
              <li className="text-muted-foreground">UI/UX Design</li>
              <li className="text-muted-foreground">Consulting</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Los Angeles, CA</li>
              <li>
                <Link href="mailto:julia.huang@example.com" className="text-muted-foreground hover:text-foreground">
                  julia.huang@example.com
                </Link>
              </li>
              <li className="text-muted-foreground">+1 (323) 555-0123</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-200 pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">© 2025 Julia Huang. All rights reserved.</p>
          <div className="mt-4 flex space-x-4 sm:mt-0">
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

