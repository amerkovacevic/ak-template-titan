import { useState } from 'react'
import { X, Send, Phone, Mail, MessageSquare } from 'lucide-react'

export default function QuoteModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    projectDescription: '',
    budget: '',
    timeline: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        projectDescription: '',
        budget: '',
        timeline: '',
      })
      onClose()
    }, 3000)
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-dark/95 backdrop-blur-sm animate-fade-in">
      <div className="min-h-screen px-4 py-12 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-charcoal-light rounded-lg shadow-2xl overflow-hidden animate-scale-in relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-charcoal-dark hover:bg-charcoal text-white p-2 rounded-full transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {!isSubmitted ? (
            <>
              {/* Header */}
              <div className="bg-charcoal-dark p-8 border-b border-yellow-accent/20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Get Your <span className="text-yellow-accent">Free Quote</span>
                </h2>
                <p className="text-white/80">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8">
                <div className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-white font-semibold mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-charcoal-dark border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-accent transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-white font-semibold mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-charcoal-dark border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-accent transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone and Project Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-white font-semibold mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-charcoal-dark border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-accent transition-colors"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="projectType"
                        className="block text-white font-semibold mb-2"
                      >
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-charcoal-dark border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-accent transition-colors"
                      >
                        <option value="">Select a type</option>
                        <option value="commercial">Commercial</option>
                        <option value="residential">Residential</option>
                        <option value="industrial">Industrial</option>
                        <option value="renovation">Renovation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget and Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-white font-semibold mb-2"
                      >
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-charcoal-dark border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-accent transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50k">Under $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-500k">$100,000 - $500,000</option>
                        <option value="500k-1m">$500,000 - $1M</option>
                        <option value="over-1m">Over $1M</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="timeline"
                        className="block text-white font-semibold mb-2"
                      >
                        Project Timeline
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full bg-charcoal-dark border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-accent transition-colors"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3months">1-3 months</option>
                        <option value="3-6months">3-6 months</option>
                        <option value="6-12months">6-12 months</option>
                        <option value="12plus">12+ months</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label
                      htmlFor="projectDescription"
                      className="block text-white font-semibold mb-2"
                    >
                      Project Description *
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      required
                      rows="4"
                      value={formData.projectDescription}
                      onChange={handleChange}
                      className="w-full bg-charcoal-dark border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-accent transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex-1 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-charcoal border-t-transparent rounded-full animate-spin"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Request
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="btn-secondary flex-1"
                  >
                    Cancel
                  </button>
                </div>

                {/* Contact Options */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-white/70 text-center mb-4">Or contact us directly:</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="tel:+1234567890"
                      className="flex items-center gap-2 text-white hover:text-yellow-accent transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      <span>(123) 456-7890</span>
                    </a>
                    <a
                      href="mailto:info@titanconstruction.com"
                      className="flex items-center gap-2 text-white hover:text-yellow-accent transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                      <span>info@titanconstruction.com</span>
                    </a>
                  </div>
                </div>
              </form>
            </>
          ) : (
            <div className="p-12 text-center">
              <div className="bg-yellow-accent/10 rounded-full p-6 w-fit mx-auto mb-6">
                <MessageSquare className="w-16 h-16 text-yellow-accent" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Thank You!
              </h3>
              <p className="text-white/80 text-lg mb-2">
                We've received your quote request.
              </p>
              <p className="text-white/70">
                Our team will contact you within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

