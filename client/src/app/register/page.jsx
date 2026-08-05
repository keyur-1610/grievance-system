"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

export default function RegisterPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("citizen");

  function handleSubmit(event) {
    event.preventDefault();

    login({
      name,
      email,
      phone,
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
        <p className="eyebrow">Create account</p>
        <h1>Register</h1>
        <p className="auth-copy">
          Set up a citizen, officer, or admin profile for the grievance
          platform.
        </p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Full name
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Your name"
              required
            />
          </label>
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
            Phone
            <input
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="9876543210"
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
            Create account
          </button>
        </form>
      </section>
    </main>
  );
}
