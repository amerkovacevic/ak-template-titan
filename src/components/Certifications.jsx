import { Leaf, Shield, BadgeCheck, Star, Award, Recycle } from 'lucide-react'
import { certifications } from '../data'

const iconMap = {
  Leaf,
  Shield,
  BadgeCheck,
  Star,
  Award,
  Recycle,
}

export default function Certifications() {
  return (
    <section id="about" className="section-padding bg-charcoal-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Certifications & <span className="text-yellow-accent">Accreditations</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Trusted credentials that demonstrate our commitment to quality and
            professionalism
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {certifications.map((cert) => {
            const Icon = iconMap[cert.icon] || Award
            return (
              <div
                key={cert.id}
                className="bg-charcoal-light rounded-lg p-6 text-center border border-white/10 hover:border-yellow-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-accent/10 group"
              >
                <div className="bg-yellow-accent/10 rounded-full p-4 w-fit mx-auto mb-4 group-hover:bg-yellow-accent/20 transition-colors">
                  <Icon className="w-10 h-10 text-yellow-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-white/60 text-sm">{cert.description}</p>
              </div>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-charcoal-light rounded-lg p-8 md:p-12 border border-yellow-accent/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-yellow-accent mb-2">500+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-accent mb-2">25+</div>
              <div className="text-white/80">Years of Experience</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-yellow-accent mb-2">98%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

