import { X, MapPin, Calendar, DollarSign, CheckCircle } from 'lucide-react'

export default function CaseStudy({ project, onClose }) {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-charcoal-dark/95 backdrop-blur-sm animate-fade-in">
      <div className="min-h-screen px-4 py-12">
        <div className="max-w-6xl mx-auto bg-charcoal-light rounded-lg shadow-2xl overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${project.afterImage})` }}>
            <div className="absolute inset-0 bg-charcoal-dark/70"></div>
            <div className="relative z-10 h-full flex flex-col justify-between p-8">
              <button
                onClick={onClose}
                className="self-end bg-charcoal-dark/80 hover:bg-charcoal-dark text-white p-2 rounded-full transition-colors"
                aria-label="Close case study"
              >
                <X className="w-6 h-6" />
              </button>
              <div>
                <span className="bg-yellow-accent text-charcoal px-4 py-1 rounded-full text-sm font-bold inline-block mb-4">
                  {project.category}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {project.title}
                </h2>
                <p className="text-xl text-white/90 max-w-3xl">
                  {project.description}
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Project Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-charcoal-dark rounded-lg p-6 border border-yellow-accent/20">
                <MapPin className="w-8 h-8 text-yellow-accent mb-4" />
                <div className="text-sm text-white/60 mb-1">Location</div>
                <div className="text-xl font-bold text-white">{project.location}</div>
              </div>
              <div className="bg-charcoal-dark rounded-lg p-6 border border-yellow-accent/20">
                <Calendar className="w-8 h-8 text-yellow-accent mb-4" />
                <div className="text-sm text-white/60 mb-1">Duration</div>
                <div className="text-xl font-bold text-white">{project.duration}</div>
              </div>
              <div className="bg-charcoal-dark rounded-lg p-6 border border-yellow-accent/20">
                <DollarSign className="w-8 h-8 text-yellow-accent mb-4" />
                <div className="text-sm text-white/60 mb-1">Budget</div>
                <div className="text-xl font-bold text-white">{project.budget}</div>
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-12">
              <h3 className="text-3xl font-bold text-white mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-charcoal-dark rounded-lg p-4 border border-white/10"
                  >
                    <CheckCircle className="w-6 h-6 text-yellow-accent flex-shrink-0" />
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-charcoal-dark rounded-lg p-8 border border-yellow-accent/20">
              <h3 className="text-3xl font-bold text-white mb-6">Project Overview</h3>
              <div className="prose prose-invert max-w-none">
                <p className="text-white/80 text-lg leading-relaxed mb-4">
                  This project represents our commitment to excellence in construction
                  and attention to detail. We worked closely with the client to ensure
                  every aspect met their vision and exceeded their expectations.
                </p>
                <p className="text-white/80 text-lg leading-relaxed mb-4">
                  Our team of experienced professionals managed every phase of the
                  project, from initial planning through final inspection. We
                  maintained open communication throughout the process, providing
                  regular updates and addressing any concerns promptly.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  The result is a stunning space that combines functionality with
                  aesthetic appeal, built to the highest standards of quality and
                  durability. This project showcases our ability to deliver exceptional
                  results on time and within budget.
                </p>
              </div>
            </div>

            {/* Before/After Comparison */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="bg-charcoal-dark rounded-lg p-4 mb-2 text-center">
                  <span className="text-white font-semibold">Before</span>
                </div>
                <img
                  src={project.beforeImage}
                  alt={`${project.title} before`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div>
                <div className="bg-yellow-accent rounded-lg p-4 mb-2 text-center">
                  <span className="text-charcoal font-semibold">After</span>
                </div>
                <img
                  src={project.afterImage}
                  alt={`${project.title} after`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

