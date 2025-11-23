import { NavLink } from "react-router-dom";

// Home.jsx
export const Home = () => {
  return (
    <main className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="title">
          Track Your Money.
          <span>Securely, Instantly, Transparently.</span>
        </h1>

        <p className="subtitle">
          A next-gen expense tracker built with{" "}
          <strong>end-to-end security</strong>, encrypted storage & real-time
          syncing. Manage your finances like a pro.
        </p>

        <div className="cta-buttons">
          <NavLink to="/register">
            <div className="btn-primary">Get Started</div>
          </NavLink>
          <NavLink to="/login">
            <div className="btn-secondary">Login</div>
          </NavLink>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Our App?</h2>

        <div className="feature-grid">
          <div className="feature">
            <h3>🔐 Secure Authentication</h3>
            <p>
              JWT-based login system with protected routes. Your identity always
              stays safe.
            </p>
          </div>

          <div className="feature">
            <h3>🛡️ Encrypted Data</h3>
            <p>
              All your financial data is stored using encrypted JSON structures
              & protected backend APIs.
            </p>
          </div>

          <div className="feature">
            <h3>⚡ Real-Time Updates</h3>
            <p>
              Add, edit, or delete transactions — they update instantly without
              page reloads.
            </p>
          </div>

          <div className="feature">
            <h3>📊 Smart Dashboard</h3>
            <p>
              Clean UI showing income, expense & balance with instant visual
              updates.
            </p>
          </div>

          <div className="feature">
            <h3>☁️ Cloud Data Backup</h3>
            <p>All your transactions stay safe even if you switch devices.</p>
          </div>

          <div className="feature">
            <h3>🔎 Transparent Tracking</h3>
            <p>Timestamped entries with edit history & organized insights.</p>
          </div>
        </div>
      </section>

      {/* ================= TECH STACK SECTION ================= */}
      <section className="tech-section">
        <h2>Technology Used</h2>

        <div className="tech-grid">

          <div className="tech-card">
            <h3>⚛️ React</h3>
            <p>Modern component-based UI with optimized rendering.</p>
          </div>

          <div className="tech-card">
            <h3>📡 Axios</h3>
            <p>Used for API calls with token-based authentication.</p>
          </div>

          <div className="tech-card">
            <h3>🟢 Node.js</h3>
            <p>High-performance server environment for backend logic.</p>
          </div>

          <div className="tech-card">
            <h3>🚀 Express.js</h3>
            <p>Fast and minimalist API framework powering the backend.</p>
          </div>

          <div className="tech-card">
            <h3>🍃 MongoDB</h3>
            <p>NoSQL database storing encrypted transaction data.</p>
          </div>

          <div className="tech-card">
            <h3>🔑 JWT</h3>
            <p>Ensures secure login, route protection & user sessions.</p>
          </div>

        </div>
      </section>
    </main>
  );
};
