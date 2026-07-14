import { HeadContent, Scripts, createRootRoute, Link, Outlet } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Naseer Aslam — Senior Magento 2 Developer | Adobe Commerce Certified Expert' },
      {
        name: 'description',
        content:
          'Adobe Commerce Certified Expert with 4+ years architecting, upgrading, and scaling Magento 2 / Adobe Commerce platforms for high-traffic e-commerce businesses.',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  )
}

function SiteHeader() {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/resume', label: 'Resume' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#0f172a]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="text-lg font-bold text-white tracking-tight">
            Naseer<span className="text-orange-400">.</span>dev
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-all"
              activeProps={{ className: 'px-4 py-2 text-sm font-medium text-orange-400 rounded-lg bg-white/5 transition-all' }}
              activeOptions={link.to === '/' ? { exact: true } : undefined}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com/naseeraslam"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 text-sm font-semibold text-[#0f172a] bg-orange-400 hover:bg-orange-300 rounded-lg transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="bg-[#0f172a] text-gray-400 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>© {new Date().getFullYear()} Naseer Aslam. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/naseeraslam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-naseer-aslam-magento-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition-colors"
          >
            LinkedIn
          </a>
          <Link to="/contact" className="hover:text-orange-400 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
