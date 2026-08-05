"use client";

import { useEffect, useState } from "react";

const backendUrl = "http://localhost:5000";

export default function OfficerDashboardPage() {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    fetch(`${backendUrl}/api/complaints?role=officer`)
      .then((response) => response.json())
      .then(setComplaints)
      .catch(() => setComplaints([]));
  }, []);

  return (
    <main className="dashboard-shell">
      <section className="dashboard-header">
        <p className="eyebrow">Officer dashboard</p>
        <h1>Assigned complaints</h1>
        <p className="auth-copy">
          Review active issues and update their resolution state.
        </p>
      </section>

      <section className="list-card">
        <h2>Work queue</h2>
        <ul>
          {complaints.map((item) => (
            <li key={item.id}>
              <strong>{item.title}</strong>
              <span>
                {item.status} · {item.priority} priority
              </span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
