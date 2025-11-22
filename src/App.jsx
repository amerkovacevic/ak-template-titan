import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectPortfolio from './components/ProjectPortfolio'
import CaseStudy from './components/CaseStudy'
import Services from './components/Services'
import Certifications from './components/Certifications'
import QuoteCTA from './components/QuoteCTA'
import Footer from './components/Footer'
import QuoteModal from './components/QuoteModal'

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const handleQuoteClick = () => {
    setIsQuoteModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsQuoteModalOpen(false)
  }

  const handleProjectClick = (project) => {
    setSelectedProject(project)
  }

  const handleCloseCaseStudy = () => {
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen bg-charcoal">
      <Header onQuoteClick={handleQuoteClick} />
      <Hero onQuoteClick={handleQuoteClick} />
      <ProjectPortfolio onProjectClick={handleProjectClick} />
      {selectedProject && (
        <CaseStudy project={selectedProject} onClose={handleCloseCaseStudy} />
      )}
      <Services />
      <Certifications />
      <QuoteCTA onQuoteClick={handleQuoteClick} />
      <Footer />
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}

export default App

