import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header({ onQuoteClick }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal-dark shadow-2xl'
          : 'bg-charcoal/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-yellow-accent">
              TITAN
            </h1>
            <span className="text-white ml-2 text-sm md:text-base">
              CONSTRUCTION
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-yellow-accent transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={onQuoteClick}
              className="btn-primary ml-4 text-sm py-2 px-6"
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white hover:text-yellow-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-charcoal-light animate-slide-down">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-yellow-accent transition-colors duration-200 font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => {
                  onQuoteClick()
                  setIsMobileMenuOpen(false)
                }}
                className="btn-primary w-full mt-4"
              >
                Get Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

