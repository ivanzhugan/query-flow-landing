export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <div>
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 5rem)',
          fontWeight: '800',
          marginBottom: '1.5rem',
          background: 'linear-gradient(135deg, #fff 0%, #a3a3a3 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Your SQL takes forever.<br />Let&apos;s fix that.
        </h1>
        
        <p style={{
          fontSize: '1.5rem',
          color: '#a3a3a3',
          marginBottom: '3rem',
          maxWidth: '700px',
          margin: '0 auto 3rem'
        }}>
          Stop googling syntax. Stop debugging JOINs. Just ask what you need in plain English and get perfect SQL in seconds.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href="https://your-typeform-link.typeform.com/to/your-form-id" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              background: '#3b82f6',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '1.125rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            Get Early Access
            <span>→</span>
          </a>
        </div>
        
        <p style={{
          marginTop: '1.5rem',
          fontSize: '0.875rem',
          color: '#a3a3a3'
        }}>
          <strong style={{ color: '#22c55e' }}>Limited beta spots available</strong> – First 100 users get lifetime access for $19/mo
        </p>
      </div>
    </main>
  )
}