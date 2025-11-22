import { ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react'

export default function QuoteCTA({ onQuoteClick }) {
  return (
    <section className="section-padding bg-charcoal-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Ready to Start Your <span className="text-yellow-accent">Project?</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote today. Our team is ready to bring
            your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={onQuoteClick}
              className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-3 group"
            >
              Get Free Quote
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:+1234567890"
              className="btn-secondary text-lg px-10 py-5 inline-flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a
              href="tel:+1234567890"
              className="bg-charcoal-light rounded-lg p-6 border border-white/10 hover:border-yellow-accent/50 transition-all duration-300 group"
            >
              <Phone className="w-8 h-8 text-yellow-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-white font-semibold mb-1">Call Us</div>
              <div className="text-white/70 text-sm">(123) 456-7890</div>
            </a>
            <a
              href="mailto:info@titanconstruction.com"
              className="bg-charcoal-light rounded-lg p-6 border border-white/10 hover:border-yellow-accent/50 transition-all duration-300 group"
            >
              <Mail className="w-8 h-8 text-yellow-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-white font-semibold mb-1">Email Us</div>
              <div className="text-white/70 text-sm">info@titanconstruction.com</div>
            </a>
            <button
              onClick={onQuoteClick}
              className="bg-charcoal-light rounded-lg p-6 border border-white/10 hover:border-yellow-accent/50 transition-all duration-300 group"
            >
              <MessageSquare className="w-8 h-8 text-yellow-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-white font-semibold mb-1">Get Quote</div>
              <div className="text-white/70 text-sm">Free consultation</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

