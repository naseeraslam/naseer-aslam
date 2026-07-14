import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Mail, Send, Linkedin, Github, MapPin, Phone } from 'lucide-react'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="w-8 h-8 text-orange-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h2>
          <p className="text-gray-600 mb-6">
            Thanks for reaching out. I'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="px-6 py-2 bg-[#0f172a] text-white rounded-xl hover:bg-[#1e293b] transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Get in Touch</h1>
        <p className="text-gray-500 text-lg mb-10">
          Open to new opportunities, collaborations, or just a chat about Magento.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-[#0f172a] text-white rounded-2xl p-6 space-y-4">
              <h2 className="text-lg font-semibold text-orange-400">Connect directly</h2>
              <a
                href="mailto:naseeraslam456@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-orange-500/30 flex items-center justify-center transition-colors">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-xs text-gray-500">naseeraslam456@gmail.com</p>
                </div>
              </a>
              <a
                href="tel:+923062403761"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-orange-500/30 flex items-center justify-center transition-colors">
                  <Phone size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-xs text-gray-500">+92-306-2403761</p>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-naseer-aslam-magento-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-orange-500/30 flex items-center justify-center transition-colors">
                  <Linkedin size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium">LinkedIn</p>
                  <p className="text-xs text-gray-500">muhammad-naseer-aslam-magento-developer</p>
                </div>
              </a>
              <a
                href="https://github.com/naseeraslam"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-white/10 group-hover:bg-orange-500/30 flex items-center justify-center transition-colors">
                  <Github size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium">GitHub</p>
                  <p className="text-xs text-gray-500">github.com/naseeraslam</p>
                </div>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-300">Location</p>
                  <p className="text-xs text-gray-500">Lahore, Pakistan (Remote-friendly)</p>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-2xl border border-orange-200 bg-orange-50">
              <p className="text-sm text-orange-800 font-medium mb-1">Currently available for</p>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Senior / Lead Magento Developer roles</li>
                <li>• Adobe Commerce consulting engagements</li>
                <li>• Custom module development</li>
                <li>• Magento performance audits</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              const formData = new FormData(form)
              fetch('/contact.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
              }).then(() => setSubmitted(true))
            }}
            className="space-y-5 bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden><label>Don't fill this out: <input name="bot-field" /></label></p>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text" id="name" name="name" required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-colors text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email" id="email" name="email" required
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-colors text-sm"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message" name="message" required rows={5}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition-colors resize-none text-sm"
                placeholder="Tell me about the opportunity or project..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white rounded-xl font-semibold transition-colors shadow-lg shadow-orange-500/20"
            >
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
