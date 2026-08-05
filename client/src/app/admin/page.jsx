"use client";

import { useEffect, useState } from "react";

const backendUrl = "http://localhost:5000";

export default function AdminDashboardPage() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    fetch(`${backendUrl}/api/dashboard/summary`)
      .then((response) => response.json())
      .then(setSummary)
      .catch(() => setSummary(null));
  }, []);

  return (
    <main className="dashboard-shell">
      <section className="dashboard-header">
        <p className="eyebrow">Admin dashboard</p>
        <h1>System overview</h1>
        <p className="auth-copy">
          Monitor complaint throughput and backend health from one place.
        </p>
      </section>

      <section className="feature-grid">
        <article className="feature-card">
          <h2>Complaints</h2>
          <p>{summary ? summary.total : "Loading..."}</p>
        </article>
        <article className="feature-card">
          <h2>Pending</h2>
          <p>{summary ? summary.pending : "Loading..."}</p>
        </article>
        <article className="feature-card">
          <h2>In Progress</h2>
          <p>{summary ? summary.inProgress : "Loading..."}</p>
        </article>
        <article className="feature-card">
          <h2>Resolved</h2>
          <p>{summary ? summary.resolved : "Loading..."}</p>
        </article>
      </section>
    </main>
  );
}
