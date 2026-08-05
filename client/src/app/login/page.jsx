"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("citizen");

  function handleSubmit(event) {
    event.preventDefault();

    login({
      name: email.split("@")[0] || "User",
      email,
      role,
    });

    router.push(
      role === "admin"
        ? "/admin"
        : role === "officer"
          ? "/officer"
          : "/citizen",
    );
  }

  return (
    <main className="auth-shell">
      <section className="auth-card">
        <p className="eyebrow">Welcome back</p>
        <h1>Login</h1>
        <p className="auth-copy">
          Access the grievance tracking dashboard with your registered account.
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@example.com"
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              required
            />
          </label>
          <label>
            Role
            <select
              value={role}
              onChange={(event) => setRole(event.target.value)}
            >
              <option value="citizen">Citizen</option>
              <option value="officer">Officer</option>
              <option value="admin">Admin</option>
            </select>
          </label>
          <button className="primary-action auth-button" type="submit">
            Sign in
          </button>
        </form>
      </section>
    </main>
  );
}
