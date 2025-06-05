'use client'

import { useEffect, useState } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault()
    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          QueryFlow
        </div>
        <div className="nav-links">
          <a 
            href="#features" 
            onClick={(e) => handleSmoothScroll(e, '#features')}
          >
            Features
          </a>
          <a 
            href="#demo" 
            onClick={(e) => handleSmoothScroll(e, '#demo')}
          >
            Demo
          </a>
          <a 
            href="#testimonial" 
            onClick={(e) => handleSmoothScroll(e, '#testimonial')}
          >
            Testimonials
          </a>
          <a 
            href="https://your-typeform-link.typeform.com/to/your-form-id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </nav>
  )
}