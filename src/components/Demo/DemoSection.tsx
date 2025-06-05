'use client'

import InteractiveDemo from './InteractiveDemo'

export default function DemoSection() {
  return (
    <section className="demo-section" id="demo">
      <div className="demo-header-text">
        <h2>See the magic happen</h2>
        <p>4 clicks. 10 seconds. Perfect SQL every time.</p>
        
        <div className="demo-steps">
          <div className="demo-step-indicator" id="step-1">
            <div className="step-circle">1</div>
            <span>Ask your question</span>
          </div>
          <div className="demo-step-indicator" id="step-2">
            <div className="step-circle">2</div>
            <span>Get SQL instantly</span>
          </div>
          <div className="demo-step-indicator" id="step-3">
            <div className="step-circle">3</div>
            <span>Apply to notebook</span>
          </div>
          <div className="demo-step-indicator" id="step-4">
            <div className="step-circle">4</div>
            <span>See your data</span>
          </div>
        </div>
      </div>
      
      <InteractiveDemo />
    </section>
  )
}