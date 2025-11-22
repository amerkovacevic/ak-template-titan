import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Commercial Construction', href: '#services' },
      { name: 'Residential Construction', href: '#services' },
      { name: 'Industrial Construction', href: '#services' },
      { name: 'Renovation & Remodeling', href: '#services' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Portfolio', href: '#portfolio' },
      { name: 'Certifications', href: '#about' },
      { name: 'Contact', href: '#contact' },
    ],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer id="contact" className="bg-charcoal-dark border-t border-white/10">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-yellow-accent mb-4">
              TITAN CONSTRUCTION
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Building excellence since 1999. Professional construction and
              contracting services you can trust.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-white/80 hover:text-yellow-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(123) 456-7890</span>
              </a>
              <a
                href="mailto:info@titanconstruction.com"
                className="flex items-center gap-3 text-white/80 hover:text-yellow-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@titanconstruction.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>123 Construction Ave, Building City, BC 12345</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-yellow-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-yellow-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-charcoal-light hover:bg-yellow-accent text-white hover:text-charcoal w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
            <div className="text-white/70 text-sm">
              <p className="mb-2">Business Hours:</p>
              <p>Monday - Friday: 7:00 AM - 6:00 PM</p>
              <p>Saturday: 8:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Titan Construction. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-yellow-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-yellow-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-yellow-accent transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

