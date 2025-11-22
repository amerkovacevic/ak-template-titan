import { Building, Home, Factory, Hammer, Clipboard, PenTool, Shield, Clock, DollarSign, CheckCircle } from 'lucide-react'
import { services, guarantees } from '../data'

const iconMap = {
  Building,
  Home,
  Factory,
  Hammer,
  Clipboard,
  PenTool,
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-charcoal">
      <div className="container-custom">
        {/* Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="text-yellow-accent">Services</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to your needs
          </p>
        </div>

        <div className="grid-robust mb-20">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Building
            return (
              <div
                key={service.id}
                className="bg-charcoal-light rounded-lg p-6 md:p-8 border border-white/10 hover:border-yellow-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-accent/10 group"
              >
                <div className="bg-yellow-accent/10 rounded-lg p-4 w-fit mb-6 group-hover:bg-yellow-accent/20 transition-colors">
                  <Icon className="w-8 h-8 text-yellow-accent" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-white/70"
                    >
                      <CheckCircle className="w-4 h-4 text-yellow-accent flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Guarantees Section */}
        <div className="bg-charcoal-light rounded-lg p-8 md:p-12 border border-yellow-accent/20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Our <span className="text-yellow-accent">Guarantees</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              We stand behind our work with these commitments to you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee) => {
              const Icon = guarantee.icon === 'CheckCircle' ? CheckCircle :
                          guarantee.icon === 'Clock' ? Clock :
                          guarantee.icon === 'DollarSign' ? DollarSign :
                          guarantee.icon === 'Shield' ? Shield : CheckCircle
              return (
                <div
                  key={guarantee.id}
                  className="bg-charcoal-dark rounded-lg p-6 text-center border border-white/10 hover:border-yellow-accent/50 transition-all duration-300"
                >
                  <div className="bg-yellow-accent/10 rounded-full p-4 w-fit mx-auto mb-4">
                    <Icon className="w-8 h-8 text-yellow-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {guarantee.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {guarantee.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

