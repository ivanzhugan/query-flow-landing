'use client'

import { useEffect } from 'react'

export default function Stats() {
  const stats = [
    {
      number: "73%",
      label: "Less time debugging"
    },
    {
      number: "10x",
      label: "Faster first query"
    },
    {
      number: "0",
      label: "Syntax errors"
    },
    {
      number: "5⭐",
      label: "From every beta user"
    }
  ]

  useEffect(() => {
    // Add scroll animation classes after component mounts
    const statsSection = document.querySelector('.stats')
    const statItems = document.querySelectorAll('.stat-item')
    
    if (statsSection) {
      statsSection.classList.add('fade-in')
    }
    
    statItems.forEach((item, index) => {
      item.classList.add('fade-in', `stagger-delay-${index + 1}`)
    })
  }, [])

  return (
    <section className="stats" role="region" aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="sr-only">Usage Statistics</h2>
      <div className="stats-container" role="list">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="stat-item"
            role="listitem"
            aria-label={`${stat.number} ${stat.label}`}
          >
            <div className="stat-number" aria-hidden="true">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}