import { useState } from 'react'
import { ArrowLeft, ArrowRight, Eye, MapPin, Calendar, DollarSign } from 'lucide-react'
import { projects } from '../data'

export default function ProjectPortfolio({ onProjectClick }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)

  const currentProject = projects[currentIndex]

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
    setSliderPosition(50)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
    setSliderPosition(50)
  }

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value)
  }

  return (
    <section id="portfolio" className="section-padding bg-charcoal-dark">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="text-yellow-accent">Portfolio</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Explore our completed projects showcasing quality craftsmanship and
            attention to detail
          </p>
        </div>

        {/* Project Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Before/After Slider */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl mb-8">
            <div className="relative aspect-video bg-charcoal-light">
              {/* Before Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${currentProject.beforeImage})`,
                }}
              ></div>

              {/* After Image with Slider */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${currentProject.afterImage})`,
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                }}
              ></div>

              {/* Slider Control */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-yellow-accent cursor-ew-resize z-10 shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-accent rounded-full flex items-center justify-center shadow-lg">
                  <div className="flex space-x-1">
                    <ArrowLeft className="w-4 h-4 text-charcoal" />
                    <ArrowRight className="w-4 h-4 text-charcoal" />
                  </div>
                </div>
              </div>

              {/* Slider Input (invisible but functional) */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
              />

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-charcoal-dark/80 px-4 py-2 rounded-lg text-white font-semibold">
                Before
              </div>
              <div className="absolute top-4 right-4 bg-charcoal-dark/80 px-4 py-2 rounded-lg text-white font-semibold">
                After
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="bg-charcoal-light rounded-lg p-6 md:p-8 mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-yellow-accent text-charcoal px-4 py-1 rounded-full text-sm font-bold">
                {currentProject.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white flex-1">
                {currentProject.title}
              </h3>
            </div>
            <p className="text-white/80 mb-6 text-lg">
              {currentProject.description}
            </p>

            {/* Project Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-yellow-accent" />
                <div>
                  <div className="text-xs text-white/60">Location</div>
                  <div className="text-sm text-white font-medium">
                    {currentProject.location}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-yellow-accent" />
                <div>
                  <div className="text-xs text-white/60">Duration</div>
                  <div className="text-sm text-white font-medium">
                    {currentProject.duration}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-yellow-accent" />
                <div>
                  <div className="text-xs text-white/60">Budget</div>
                  <div className="text-sm text-white font-medium">
                    {currentProject.budget}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-yellow-accent" />
                <div>
                  <div className="text-xs text-white/60">Features</div>
                  <div className="text-sm text-white font-medium">
                    {currentProject.features.length} Features
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-6">
              {currentProject.features.map((feature, index) => (
                <span
                  key={index}
                  className="bg-charcoal-dark text-white/80 px-3 py-1 rounded-full text-sm border border-white/10"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* View Case Study Button */}
            <button
              onClick={() => onProjectClick(currentProject)}
              className="btn-primary inline-flex items-center gap-2"
            >
              View Full Case Study
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              className="btn-secondary flex items-center gap-2"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-5 h-5" />
              Previous
            </button>

            {/* Project Indicators */}
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setSliderPosition(50)
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-yellow-accent w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="btn-secondary flex items-center gap-2"
              aria-label="Next project"
            >
              Next
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

