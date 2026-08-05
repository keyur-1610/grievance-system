"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

const backendUrl = "http://localhost:5000";

export default function CitizenDashboardPage() {
  const { user, isHydrated } = useAuth();
  const [summary, setSummary] = useState(null);
  const [complaints, setComplaints] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDashboard() {
      try {
        const [summaryResponse, complaintsResponse] = await Promise.all([
          fetch(`${backendUrl}/api/dashboard/summary`),
          fetch(`${backendUrl}/api/complaints?role=citizen`),
        ]);

        setSummary(await summaryResponse.json());
        setComplaints(await complaintsResponse.json());
      } catch {
        setError("Unable to reach the grievance backend.");
      }
    }

    if (isHydrated) {
      loadDashboard();
    }
  }, [isHydrated]);

  return (
    <main className="dashboard-shell">
      <section className="dashboard-header">
        <p className="eyebrow">Citizen dashboard</p>
        <h1>Welcome{user?.name ? `, ${user.name}` : ""}</h1>
        <p className="auth-copy">
          Track complaint progress and check the live backend connection status.
        </p>
      </section>

      {error ? <p className="status-error">{error}</p> : null}

      <section className="feature-grid">
        <article className="feature-card">
          <h2>Total</h2>
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

      <section className="list-card">
        <h2>Recent complaints</h2>
        <ul>
          {complaints.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong>
              <span>
                {item.status} · {item.category} · {item.department}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
