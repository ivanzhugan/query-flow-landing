export default function Testimonial() {
  return (
    <section className="testimonial" id="testimonial">
      <div className="testimonial-content">
        <p className="testimonial-quote">
          &quot;I used to spend 2 hours debugging a single query. Now I knock out entire analyses in 15 minutes. This thing pays for itself before lunch.&quot;
        </p>
        <div className="testimonial-author">
          <div className="author-avatar">SK</div>
          <div className="author-info">
            <div className="author-name">Sarah Kim</div>
            <div className="author-title">Senior Data Analyst, Stripe</div>
          </div>
        </div>
      </div>
    </section>
  )
}