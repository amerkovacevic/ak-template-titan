import { ArrowRight, Award, Clock, Users } from 'lucide-react'

export default function Hero({ onQuoteClick }) {
  const stats = [
    { icon: Award, value: '500+', label: 'Projects Completed' },
    { icon: Users, value: '25+', label: 'Years Experience' },
    { icon: Clock, value: '98%', label: 'On-Time Delivery' },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-charcoal-dark/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-shadow-lg">
            <span className="text-white">BUILDING</span>
            <br />
            <span className="text-yellow-accent">EXCELLENCE</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-white/90 text-shadow font-light">
            Professional Construction & Contracting Services
          </p>
          <p className="text-lg md:text-xl mb-10 text-white/80 text-shadow max-w-2xl mx-auto">
            From groundbreaking to grand opening, we deliver exceptional results
            that stand the test of time. Trust Titan Construction for your next
            project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onQuoteClick}
              className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-3 group"
            >
              Get Free Quote
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#portfolio"
              className="btn-secondary text-lg px-10 py-5 inline-flex items-center"
            >
              View Our Work
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-charcoal-light/50 backdrop-blur-sm rounded-lg p-6 border border-yellow-accent/20 hover:border-yellow-accent/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-10 h-10 text-yellow-accent mx-auto mb-4" />
                <div className="text-4xl font-bold text-yellow-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-yellow-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-yellow-accent rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

