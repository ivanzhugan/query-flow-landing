'use client'

import { useState, useEffect, useRef } from 'react'
import { useDemo } from '@/hooks/useDemo'

const sqlQuery = `<span class="sql-keyword">WITH</span> monthly_revenue <span class="sql-keyword">AS</span> (
  <span class="sql-keyword">SELECT</span>
    <span class="sql-function">DATE_FORMAT</span>(order_date, <span class="sql-string">'%b %Y'</span>) <span class="sql-keyword">AS</span> month,
    <span class="sql-function">SUM</span>(total_amount) <span class="sql-keyword">AS</span> revenue,
    <span class="sql-function">COUNT</span>(<span class="sql-keyword">DISTINCT</span> customer_id) <span class="sql-keyword">AS</span> unique_customers
  <span class="sql-keyword">FROM</span> orders
  <span class="sql-keyword">WHERE</span> status = <span class="sql-string">'completed'</span>
    <span class="sql-keyword">AND</span> order_date >= <span class="sql-function">DATE_SUB</span>(<span class="sql-function">CURRENT_DATE</span>(), <span class="sql-keyword">INTERVAL</span> 12 <span class="sql-keyword">MONTH</span>)
  <span class="sql-keyword">GROUP BY</span> 1
)
<span class="sql-keyword">SELECT</span>
  month,
  revenue,
  unique_customers,
  <span class="sql-function">CONCAT</span>(
    <span class="sql-function">ROUND</span>(
      (revenue - <span class="sql-function">LAG</span>(revenue) <span class="sql-keyword">OVER</span> (<span class="sql-keyword">ORDER BY</span> month)) 
      / <span class="sql-function">LAG</span>(revenue) <span class="sql-keyword">OVER</span> (<span class="sql-keyword">ORDER BY</span> month) * 100, 
    1), 
    <span class="sql-string">'%'</span>
  ) <span class="sql-keyword">AS</span> growth_rate
<span class="sql-keyword">FROM</span> monthly_revenue
<span class="sql-keyword">ORDER BY</span> month <span class="sql-keyword">DESC</span>
<span class="sql-keyword">LIMIT</span> 12`

export default function InteractiveDemo() {
  const {
    demoStep,
    resetDemo,
    startDemo,
    nextStep,
    completeDemo
  } = useDemo()

  const [aiInput, setAiInput] = useState('')
  const [showAiResponse, setShowAiResponse] = useState(false)
  const [showApplyButton, setShowApplyButton] = useState(false)
  const [sqlContent, setSqlContent] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  // Refs for demo elements
  const aiInputContainerRef = useRef<HTMLDivElement>(null)
  const sendButtonRef = useRef<HTMLButtonElement>(null)
  const applyButtonRef = useRef<HTMLButtonElement>(null)
  const runButtonRef = useRef<HTMLButtonElement>(null)
  const dataResultsRef = useRef<HTMLDivElement>(null)

  // Demo step logic
  useEffect(() => {
    const runDemoStep = () => {
      switch(demoStep) {
        case 1:
          // Step 1: Focus on AI input
          setAiInput("Show me monthly revenue trends with customer count and growth rate")
          if (aiInputContainerRef.current) {
            aiInputContainerRef.current.classList.add('highlight-ring')
          }
          break
          
        case 2:
          // Step 2: Show AI response
          setShowAiResponse(true)
          setTimeout(() => {
            setShowApplyButton(true)
            if (applyButtonRef.current) {
              applyButtonRef.current.classList.add('highlight-ring')
            }
          }, 500)
          break
          
        case 3:
          // Step 3: Apply SQL to cell
          setSqlContent(sqlQuery)
          setTimeout(() => {
            if (runButtonRef.current) {
              runButtonRef.current.classList.add('highlight-ring')
            }
          }, 500)
          break
          
        case 4:
          // Step 4: Show results
          setShowResults(true)
          setTimeout(() => {
            setIsCompleted(true)
            completeDemo()
          }, 500)
          break
      }
    }

    if (demoStep > 0) {
      runDemoStep()
    }
  }, [demoStep, completeDemo])

  const handleStartDemo = () => {
    startDemo()
  }

  const handleSendClick = () => {
    if (demoStep === 1) {
      nextStep()
    }
  }

  const handleApplyClick = () => {
    if (demoStep === 2) {
      nextStep()
    }
  }

  const handleRunClick = () => {
    if (demoStep === 3) {
      nextStep()
    }
  }

  const handleResetDemo = () => {
    // Reset all states
    setAiInput('')
    setShowAiResponse(false)
    setShowApplyButton(false)
    setSqlContent('')
    setShowResults(false)
    setIsCompleted(false)
    
    // Reset demo logic
    resetDemo()
  }

  const handleSkipDemo = () => {
    // Fill everything in at once
    setAiInput("Show me monthly revenue trends with customer count and growth rate")
    setShowAiResponse(true)
    setShowApplyButton(true)
    setSqlContent(sqlQuery)
    setShowResults(true)
    setIsCompleted(true)
    completeDemo()
  }

  return (
    <>
      <div className="demo-container">
        {/* Demo Overlay */}
        <div className={`demo-overlay ${demoStep === 0 ? 'show' : ''}`}>
          <div className="demo-start-message">
            <h3>👋 Try it yourself!</h3>
            <p>Follow the interactive walkthrough to see how QueryFlow transforms your questions into SQL.</p>
            <button className="demo-btn primary" onClick={handleStartDemo}>
              Start Demo
            </button>
          </div>
        </div>
        
        {/* Demo Header */}
        <div className="demo-header">
          <div className="window-controls">
            <div className="dot red"></div>
            <div className="dot yellow"></div>
            <div className="dot green"></div>
          </div>
        </div>
        
        {/* Demo Content */}
        <div className="demo-content">
          {/* Schema Panel */}
          <div className={`schema-panel ${demoStep === 0 || demoStep < 4 ? 'panel-dimmed' : ''}`}>
            <div className="panel-title">📊 Your Database</div>
            <div className="schema-item">📁 customers</div>
            <div className="schema-item">📁 orders</div>
            <div className="schema-item">📁 products</div>
            <div className="schema-item">📁 revenue</div>
            <div className="schema-item">📁 user_events</div>
          </div>
          
          {/* Notebook Panel */}
          <div className={`notebook-panel ${demoStep === 0 || demoStep < 3 ? 'panel-dimmed' : ''}`}>
            <div className="sql-cell">
              <div className="cell-header">
                <span className="cell-number">[1]</span>
                <div className="cell-actions">
                  <button className="cell-action" disabled>📋</button>
                  <button 
                    ref={runButtonRef}
                    className="cell-action" 
                    disabled={demoStep < 3 && !isCompleted}
                    onClick={handleRunClick}
                  >
                    ▶️
                  </button>
                </div>
              </div>
              <div 
                className="cell-content" 
                dangerouslySetInnerHTML={{ __html: sqlContent || '' }}
              />
            </div>
            
            {/* Data Results */}
            <div 
              ref={dataResultsRef}
              className={`data-results ${showResults ? 'show' : ''}`}
            >
              <div className="results-header">✨ Results (5 rows) - That was fast!</div>
              <table className="results-table">
                <thead>
                  <tr>
                    <th>month</th>
                    <th>revenue</th>
                    <th>unique_customers</th>
                    <th>growth_rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jan 2025</td>
                    <td>$487,293</td>
                    <td>1,247</td>
                    <td>+9.3%</td>
                  </tr>
                  <tr>
                    <td>Dec 2024</td>
                    <td>$445,821</td>
                    <td>1,189</td>
                    <td>+8.1%</td>
                  </tr>
                  <tr>
                    <td>Nov 2024</td>
                    <td>$412,394</td>
                    <td>1,156</td>
                    <td>+3.5%</td>
                  </tr>
                  <tr>
                    <td>Oct 2024</td>
                    <td>$398,472</td>
                    <td>1,098</td>
                    <td>+3.4%</td>
                  </tr>
                  <tr>
                    <td>Sep 2024</td>
                    <td>$385,291</td>
                    <td>1,072</td>
                    <td>+3.3%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* AI Panel */}
          <div className={`ai-panel ${demoStep === 0 ? 'panel-dimmed' : ''}`}>
            <div className="panel-title">✨ AI Assistant</div>
            <div className={`ai-message ${showAiResponse ? 'show' : ''}`}>
              Perfect! I&apos;ve created a query that shows your monthly revenue trends with customer counts and growth rates. This uses a CTE for clarity and includes month-over-month calculations.
              <button 
                ref={applyButtonRef}
                className={`apply-button ${showApplyButton ? 'show' : ''}`}
                disabled={demoStep < 2 && !isCompleted}
                onClick={handleApplyClick}
              >
                Apply to Notebook →
              </button>
            </div>
            <div ref={aiInputContainerRef} className="ai-input-container">
              <textarea 
                className="ai-input" 
                placeholder="Just tell me what you need..." 
                rows={3}
                value={aiInput}
                onChange={(e) => setAiInput(e.target.value)}
              />
              <button 
                ref={sendButtonRef}
                className="send-button"
                onClick={handleSendClick}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Demo Controls */}
      <div className="demo-controls">
        <div className="demo-buttons">
          <button 
            className="demo-btn" 
            onClick={handleResetDemo}
            style={{ display: demoStep > 0 ? 'inline-block' : 'none' }}
          >
            Reset Demo
          </button>
          <button 
            className="demo-btn" 
            onClick={handleSkipDemo}
            style={{ display: demoStep > 0 && demoStep < 4 ? 'inline-block' : 'none' }}
          >
            Skip Tutorial
          </button>
        </div>
      </div>
    </>
  )
}