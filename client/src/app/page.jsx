export default function HomePage() {
  return (
    <main className="landing-shell">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">SIH1516</p>
          <h1>AI-Based Grievance Lodging & Tracking System</h1>
          <p className="lead">
            Route complaints intelligently, track resolution transparently, and
            keep citizens informed across every stage of the workflow.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="/register">
              Lodge a grievance
            </a>
            <a className="secondary-action" href="/login">
              Officer login
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="stat-card">
            <span>AI routing</span>
            <strong>Category + priority detection</strong>
          </div>
          <div className="stat-card">
            <span>Tracking</span>
            <strong>Citizen, officer, and admin dashboards</strong>
          </div>
          <div className="stat-card">
            <span>Notifications</span>
            <strong>Email, SMS, and status updates</strong>
          </div>
        </div>
      </section>

      <section className="feature-grid" aria-label="System capabilities">
        <article className="feature-card">
          <h2>Citizen Module</h2>
          <p>
            Submit complaints with text, image, and location inputs and follow
            progress in one place.
          </p>
        </article>
        <article className="feature-card">
          <h2>Officer Module</h2>
          <p>
            Review assigned complaints, update status, add remarks, and close
            cases with evidence.
          </p>
        </article>
        <article className="feature-card">
          <h2>Admin Module</h2>
          <p>
            Monitor performance, manage departments, and export analytics on
            complaint resolution.
          </p>
        </article>
      </section>
    </main>
  );
}
