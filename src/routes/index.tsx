import { createFileRoute, Link } from '@tanstack/react-router'
import { allBlogs } from 'content-collections'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, ArrowRight, CheckCircle, Code2, ShoppingCart, Zap } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const skills = [
  { category: 'Core Platform', items: ['Magento 2.4.x', 'Adobe Commerce', 'Hyvä Themes', 'PWA Studio'] },
  { category: 'APIs & Backend', items: ['PHP', 'GraphQL', 'REST API', 'MySQL', 'SQL Server'] },
  { category: 'Frontend', items: ['Knockout.js', 'JavaScript', 'HTML5', 'CSS3'] },
  { category: 'DevOps & Cloud', items: ['Docker', 'AWS', 'Git', 'CI/CD Pipelines'] },
  { category: 'Integrations', items: ['Stripe', 'Klaviyo', 'Google Analytics API', 'Firebear'] },
]

const certifications = [
  { label: 'Adobe Commerce Expert', sub: 'Certified — Nov 2024', color: 'from-red-500 to-orange-500' },
  { label: 'Adobe Certified Professional', sub: 'Adobe Commerce Developer — Apr 2023', color: 'from-orange-500 to-amber-400' },
]

const highlights = [
  { icon: ShoppingCart, title: '4+ Years', description: 'Architecting, upgrading, and scaling Magento 2 / Adobe Commerce platforms' },
  { icon: CheckCircle, title: 'Dual Certified', description: 'Adobe Commerce Expert & Adobe Certified Professional — both active' },
  { icon: Code2, title: 'High-Traffic Storefronts', description: 'Box.co.uk, LaptopOutlet.co.uk & OppoStore.co.uk — thousands of daily transactions' },
  { icon: Zap, title: 'GraphQL & B2B', description: 'Custom APIs and a self-service B2B ordering module shipped to production' },
]

function Home() {
  const recentPosts = [...allBlogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0f172a] text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                Available for new opportunities
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
                Muhammad<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                  Naseer Aslam
                </span>
              </h1>
              <p className="text-xl text-gray-300 font-medium">
                Senior Magento Developer &amp; Adobe Commerce Specialist
              </p>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                4+ years architecting, upgrading, and scaling Magento 2 and Adobe Commerce platforms for
                high-traffic storefronts. Dual Adobe certified. Specialising in GraphQL/REST APIs, custom
                extensions, Hyvä themes, and CI/CD-automated deployments.
              </p>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <div key={cert.label} className={`px-4 py-2 rounded-xl bg-gradient-to-r ${cert.color} text-white text-sm font-semibold shadow-lg`}>
                    ✓ {cert.label}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white font-semibold rounded-xl transition-colors shadow-lg shadow-orange-500/25"
                >
                  View Resume <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-semibold rounded-xl transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/30 to-amber-400/10 blur-2xl scale-110" />
                <img
                  src="/headshot-on-white.jpg"
                  alt="Naseer Aslam"
                  className="relative w-60 h-72 md:w-72 md:h-80 rounded-3xl object-cover border-2 border-white/10 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Highlights */}
      <section className="bg-[#1e293b] text-white border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center">
                <Icon className="text-orange-400" size={20} />
              </div>
              <div>
                <p className="text-xl font-bold text-white">{title}</p>
                <p className="text-sm text-gray-400 leading-snug mt-1">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Technical Skills</h2>
        <p className="text-gray-500 mb-8">Deep Magento expertise across the full stack — from PHP backend to cloud deployments.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group) => (
            <div key={group.category} className="p-5 rounded-2xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all bg-white">
              <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-3">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="max-w-6xl mx-auto px-4 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-1">Latest Articles</h2>
            <p className="text-gray-500">Insights on Magento, Adobe Commerce, and e-commerce engineering.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <Link key={post._meta.path} to="/blog/$slug" params={{ slug: post._meta.path }} className="block group">
              <Card className="h-full hover:shadow-lg hover:border-orange-200 transition-all group-hover:-translate-y-0.5 duration-200">
                <CardHeader>
                  <CardTitle className="text-base leading-snug group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar size={12} />
                    <time>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</time>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-3">{post.summary}</p>
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
