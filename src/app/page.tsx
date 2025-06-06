'use client'

import Navigation from '@/components/Navigation'
import DemoSection from '@/components/Demo/DemoSection'
import Features from '@/components/Features'
import Testimonial from '@/components/Testimonial'
import Stats from '@/components/Stats'
import Footer from '@/components/Footer'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export default function Home() {
  useScrollAnimation()

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <main className="hero">
        <div className="hero-content">
          <div className="social-proof">
            <div className="user-avatars">
              <div className="avatar">JK</div>
              <div className="avatar">ST</div>
              <div className="avatar">MR</div>
              <div className="avatar">+</div>
            </div>
            <span className="social-proof-text">Join 500+ analysts already on the waitlist</span>
          </div>
          
          <h1>Your SQL takes forever.<br />Let&apos;s fix that.</h1>
          <p className="hero-subtitle">
            Stop googling syntax. Stop debugging JOINs. Just ask what you need in plain English and get perfect SQL in seconds.
          </p>
          
          <div className="hero-cta">
            <a 
              href="https://your-typeform-link.typeform.com/to/your-form-id" 
              target="_blank" 
              rel="noopener noreferrer"
              className="primary-cta"
            >
              Get Early Access
              <span>→</span>
            </a>
            <a 
              href="#demo" 
              className="secondary-cta"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#demo')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            >
              Try It Live
            </a>
          </div>
          
          <p className="limited-time">
            <strong>Limited beta spots available</strong> – First 100 users get lifetime access for $19/mo
          </p>
        </div>
      </main>

      <DemoSection />

      <Features />
      <Testimonial />
      <Stats />
      <Footer />
    </>
  )
}