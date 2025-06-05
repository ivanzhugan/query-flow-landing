export default function Features() {
  const features = [
    {
      icon: "🎯",
      title: "Actually understands you",
      description: "Our AI knows your schema inside out. No more \"column doesn't exist\" errors at 5pm on a Friday."
    },
    {
      icon: "⚡",
      title: "Scary fast",
      description: "Complex CTEs, window functions, 12-table JOINs? Done before you finish typing. We're talking milliseconds, not minutes."
    },
    {
      icon: "🎨",
      title: "Beautiful by default",
      description: "Clean formatting, helpful comments, and performance tips included. Your DBAs will actually thank you."
    },
    {
      icon: "📚",
      title: "Notebook-first workflow",
      description: "Break complex analyses into steps. Each cell runs independently. Version control built-in. It's like Jupyter, but for SQL."
    },
    {
      icon: "🔒",
      title: "Your data stays yours",
      description: "Everything runs locally. No cloud uploads. No security reviews. IT approved it in record time."
    },
    {
      icon: "🚀",
      title: "Works with everything",
      description: "Postgres, MySQL, Snowflake, BigQuery, Redshift... if it speaks SQL, we speak its dialect."
    }
  ]

  return (
    <section className="features" id="features">
      <div className="features-header">
        <h2>Finally, SQL that doesn&apos;t suck</h2>
        <p>We obsessed over every detail so you can focus on insights, not syntax</p>
      </div>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}