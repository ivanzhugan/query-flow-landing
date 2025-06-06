'use client'

import { useEffect } from 'react'

export default function Testimonial() {
  useEffect(() => {
    // Add scroll animation classes after component mounts
    const testimonialSection = document.querySelector('.testimonial')
    
    if (testimonialSection) {
      testimonialSection.classList.add('fade-in')
    }
  }, [])

  return (
    <section 
      className="testimonial" 
      id="testimonial"
      role="region"
      aria-labelledby="testimonial-heading"
    >
      <h2 id="testimonial-heading" className="sr-only">Customer Testimonial</h2>
      <div className="testimonial-content">
        <blockquote className="testimonial-quote">
          &quot;I used to spend 2 hours debugging a single query. Now I knock out entire analyses in 15 minutes. This thing pays for itself before lunch.&quot;
        </blockquote>
        <div className="testimonial-author">
          <div className="author-avatar" aria-hidden="true">SK</div>
          <div className="author-info">
            <div className="author-name">Sarah Kim</div>
            <div className="author-title">Senior Data Analyst, Stripe</div>
          </div>
        </div>
      </div>
    </section>
  )
}