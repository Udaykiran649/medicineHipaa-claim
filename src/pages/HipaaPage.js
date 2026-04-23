import React from "react";
import "../styles/HipaaPage.css";
import Footer from "../components/Footer";
import Header from "../components/Header";



function Icon({ name }) {
  const paths = {
    shield: (
      <path d="M12 2l8 3v7c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V5l8-3z" />
    ),
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 018 0v3" />
      </>
    ),
    key: (
      <>
        <circle cx="8" cy="15" r="4" />
        <path d="M11 12l9-9m-3 3l2 2m-5 1l2 2" />
      </>
    ),
    badge: (
      <>
        <circle cx="12" cy="10" r="6" />
        <path d="M8 14l-2 7 6-3 6 3-2-7" />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
      </>
    ),
    cloud: (
      <path d="M7 18a4 4 0 01-.6-7.95A6 6 0 0118 10a4 4 0 01-1 7.87H7z" />
    ),
    doc: (
      <>
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M8 13h8M8 17h5" />
      </>
    ),
  };
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const features = [
  {
    icon: "doc",
    title: "Business Associate Agreements (BAA)",
    body: "We execute a signed HIPAA business associate agreement with every client before any PHI is shared — legally binding us to HIPAA requirements and establishing clear responsibilities for data protection.",
  },
  {
    icon: "lock",
    title: "Encrypted Data Transmission",
    body: "All PHI moving between your practice and Revno RCM is encrypted at rest using AES-256 and transmitted over secure, HIPAA-compliant channels. No unencrypted data ever leaves your system or ours.",
  },
  {
    icon: "key",
    title: "Role-Based Access Controls",
    body: "Patient data is only available to authorized, background-checked staff with a documented business need. Fine-grained role permissions and full audit logs across all systems.",
  },
  {
    icon: "badge",
    title: "HIPAA Training & Certification",
    body: "Every team member completes full HIPAA training at onboarding with annual refreshers. A dedicated compliance team keeps our standards aligned with the latest healthcare regulations.",
  },
  {
    icon: "chart",
    title: "Regular Risk Assessments",
    body: "In line with the HIPAA Security Rule, we periodically complete Security Risk Assessments (SRA) to identify and evaluate vulnerabilities across our systems and workflows.",
  },
  {
    icon: "cloud",
    title: "Secure Cloud Infrastructure",
    body: "Our billing platform is hosted in a HIPAA-eligible cloud environment with physical security controls, disaster recovery protocols, and automatic data backups for availability.",
  },
];

function HipaaPage() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="hipaa-hero">
        <div className="hipaa-hero-inner">
          <span className="hipaa-eyebrow">
            <span className="hipaa-dot" />
            HIPAA-Certified Revenue Cycle Partner
          </span>
          <h1 className="hipaa-hero-title">
            HIPAA-Compliant Revenue Cycle Management &amp; Medical Billing
          </h1>
          <p className="hipaa-lede">
            At Revno RCM, protecting patient data isn&apos;t optional — it&apos;s
            built into every process. Your PHI stays secure with encrypted
            transmission, signed BAAs, and fully certified staff.
          </p>
          <div className="hipaa-hero-ctas">
            <a href="#consult" className="hipaa-btn hipaa-btn-primary">
              Request a Compliance Review
            </a>
            <a href="#how" className="hipaa-btn hipaa-btn-ghost">
              How We Protect PHI
            </a>
          </div>
          <div className="hipaa-trust-row">
            <div className="hipaa-trust-pill">AES-256 Encryption</div>
            <div className="hipaa-trust-pill">Signed BAAs</div>
            <div className="hipaa-trust-pill">Certified Staff</div>
            <div className="hipaa-trust-pill">Audit-Ready Logs</div>
          </div>
        </div>
      </section>

      {/* WHAT IS HIPAA */}
      <section className="hipaa-section">
        <div className="hipaa-section-inner hipaa-two-col">
          <div>
            <span className="hipaa-kicker">Why It Matters</span>
            <h2 className="hipaa-section-title">
              What Is HIPAA and Why Does It Matter for Billing?
            </h2>
            <p className="hipaa-paragraph">
              In healthcare, ensuring the confidentiality of patient data is
              neither optional nor a matter of preference — it is a legal and
              ethical obligation. Every process, system, and interaction at
              Revno RCM follows strict HIPAA compliance healthcare standards.
            </p>
            <p className="hipaa-paragraph">
              As a HIPAA-compliant RCM partner, we ensure that when you
              outsource revenue cycle management or medical billing to us, your
              patients&apos; Protected Health Information (PHI) is fully
              secured with industry-leading protection practices.
            </p>
          </div>
          <div className="hipaa-stat-card">
            <h3 className="hipaa-stat-title">Cost of Non-Compliance</h3>
            <div className="hipaa-stat-big">$100 – $50,000</div>
            <p className="hipaa-stat-desc">
              Per-violation fines under HIPAA — plus reputational harm and
              potential criminal liability. Partnering with a certified
              compliance expert eliminates that risk.
            </p>
            <ul className="hipaa-stat-list">
              <li>
                <span className="hipaa-check">✓</span>
                Zero PHI breaches since inception
              </li>
              <li>
                <span className="hipaa-check">✓</span>
                100% staff HIPAA-certified
              </li>
              <li>
                <span className="hipaa-check">✓</span>
                Audit-ready at any time
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW WE ENSURE */}
      <section id="how" className="hipaa-section hipaa-section-tint">
        <div className="hipaa-section-inner">
          <div className="hipaa-section-head">
            <span className="hipaa-kicker">Our Compliance Framework</span>
            <h2 className="hipaa-section-title">How Revno RCM Ensures HIPAA Compliance</h2>
            <p className="hipaa-section-subtitle">
              Six pillars that keep your patient data safe and your practice
              audit-ready, backed by certified processes and continuous
              monitoring.
            </p>
          </div>
          <div className="hipaa-features">
            {features.map((f) => (
              <article key={f.title} className="hipaa-feature">
                <div className="hipaa-icon">
                  <Icon name={f.icon} />
                </div>
                <h3 className="hipaa-feature-title">{f.title}</h3>
                <p className="hipaa-feature-body">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTING CTA */}
      <section id="consult" className="hipaa-section">
        <div className="hipaa-section-inner">
          <div className="hipaa-consult">
            <div className="hipaa-consult-text">
              <h2 className="hipaa-section-title">HIPAA Compliance Consulting for Your Practice</h2>
              <p className="hipaa-paragraph">
                Beyond billing, Revno RCM helps practices strengthen internal
                HIPAA posture — from risk evaluation and policy updates to
                staff training and audit preparation.
              </p>
              <a href="#contact" className="hipaa-btn hipaa-btn-primary">
                Contact Us About Risk Assessments →
              </a>
            </div>
            <div className="hipaa-consult-list">
              <div className="hipaa-consult-item">✓ Security Risk Assessments (SRA)</div>
              <div className="hipaa-consult-item">✓ Policy &amp; Procedure Review</div>
              <div className="hipaa-consult-item">✓ Staff HIPAA Training Programs</div>
              <div className="hipaa-consult-item">✓ Pre-Audit Readiness Support</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HipaaPage;