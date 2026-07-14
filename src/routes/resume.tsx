import { marked } from 'marked'
import { createFileRoute } from '@tanstack/react-router'
import { allJobs, allEducations } from 'content-collections'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { MapPin, Linkedin, Github, Mail } from 'lucide-react'

export const Route = createFileRoute('/resume')({
  component: Resume,
})

function Resume() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Header */}
        <div className="bg-[#0f172a] text-white rounded-3xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold">Muhammad Naseer Aslam</h1>
              <p className="text-orange-400 text-lg font-semibold">Senior Magento 2 Developer · Adobe Commerce Certified Expert</p>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={14} />
                <span>Lahore, Pakistan · Open to Relocation &amp; Sponsorship · Available Remote</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold">
                  ✓ Adobe Commerce Expert Certification
                </span>
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white text-xs font-bold">
                  ✓ Adobe Certified Professional
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:naseeraslam456@gmail.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-medium transition-colors"
              >
                <Mail size={15} /> naseeraslam456@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-naseer-aslam-magento-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-medium transition-colors"
              >
                <Linkedin size={15} /> LinkedIn
              </a>
              <a
                href="https://github.com/naseeraslam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-medium transition-colors"
              >
                <Github size={15} /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-gray-900">Career Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed text-gray-700">
              Adobe Commerce Certified Developer with 4+ years of experience architecting, upgrading, and
              scaling Magento 2 / Adobe Commerce platforms. Proven track record delivering GraphQL/REST APIs,
              custom extensions, Hyvä theme implementations, and CI/CD-automated deployments that improve
              performance, security, and conversion for high-traffic e-commerce businesses. Seeking a Senior
              Magento Developer role — open to relocation, remote work, and visa sponsorship.
            </p>
          </CardContent>
        </Card>

        <Separator />

        {/* Work Experience */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
          {allJobs.map((job) => (
            <Card key={job.jobTitle} className="border-l-4 border-l-orange-400">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3">
                  <div className="space-y-1">
                    <CardTitle className="text-xl text-gray-900">{job.jobTitle}</CardTitle>
                    <p className="font-semibold text-orange-600">{job.company}</p>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <MapPin size={12} /> {job.location}
                    </p>
                  </div>
                  <Badge variant="secondary" className="text-sm whitespace-nowrap">
                    {new Date(job.startDate).getFullYear()} – {job.endDate ? new Date(job.endDate).getFullYear() : 'Present'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-5 leading-relaxed text-gray-700">{job.summary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag) => (
                    <HoverCard key={tag}>
                      <HoverCardTrigger>
                        <Badge variant="outline" className="cursor-pointer hover:border-orange-400 hover:text-orange-600 transition-colors">
                          {tag}
                        </Badge>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-56">
                        <p className="text-sm text-gray-600">Professional experience with <strong>{tag}</strong> in production e-commerce environments.</p>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
                {job.content && (
                  <div
                    className="prose prose-sm max-w-none text-gray-700 prose-li:marker:text-orange-400"
                    dangerouslySetInnerHTML={{ __html: marked(job.content) }}
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </section>

        <Separator />

        {/* Certifications / Education */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Certifications &amp; Education</h2>
          {allEducations.map((education) => (
            <Card key={education.school} className="border-l-4 border-l-amber-400">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{education.school}</CardTitle>
                <p className="text-orange-600 font-semibold">{education.summary}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {education.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                {education.content && (
                  <div
                    className="prose prose-sm max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: marked(education.content) }}
                  />
                )}
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </div>
  )
}
