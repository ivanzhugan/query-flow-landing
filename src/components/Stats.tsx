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

  return (
    <section className="stats">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}