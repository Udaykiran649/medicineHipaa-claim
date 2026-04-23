import React from "react";
import { Link } from "react-router-dom";

import heroImg from "../assets/credentialing-hero.jpg";
import "../styles/ProviderCredentialing.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  { t: "CAQH Profile Management", d: "CAQH profile creation and ongoing maintenance." },
  { t: "Initial Payer Enrollment", d: "Enrollment with all commercial and government insurers." },
  { t: "Medicare & Medicaid Enrollment", d: "CMS-855 applications handled end-to-end." },
  { t: "Re-credentialing", d: "Proactive re-credentialing and re-enrollment management." },
  { t: "Group NPI Enrollment", d: "Group NPI and taxonomy code management." },
  { t: "License Verification", d: "State license verification and expiration tracking." },
  { t: "Status Tracking", d: "Credentialing status tracking and payer follow-up." },
  { t: "Hospital Privileging", d: "Full hospital privileging support for your providers." },
];

const payers = [
  "Medicare", "Medicaid", "Aetna", "Cigna", "UnitedHealthcare",
  "BCBS", "Humana", "Molina", "WellCare", "TRICARE",
];

export default function ProviderCredentialing() {
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "Service",
//     "serviceType": "Provider Credentialing Services",
//     "provider": {
//       "@type": "Organization",
//       "name": "Revno RCM",
//       "url": "https://revnorcm.com/"
//     },
//     "areaServed": "United States",
//     "description":
//       "Provider credentialing and payer enrollment services for physicians and healthcare groups."
//   };

  return (
    <>
     
      <Header />

      {/* HERO */}
      <section className="cred-hero">
        <div className="cred-hero-inner">
          <div>
            <div className="cred-crumb">
              <Link to="/">Home</Link> / Services / Provider Credentialing
            </div>
            <span className="cred-pill">🛡️ Faster Payer Enrollment</span>
            <h1 className="cred-h1">
              Provider <span className="cred-highlight">Credentialing</span> & Payer Enrollment Services
            </h1>
            <p className="cred-lead">
             Credentialing is the gateway to getting paid. Until a provider is fully credentialed through medical credentialing
              and payer enrollment claims cannot be submitted and every day of delay costs the practice revenue it can never 
              recover. Revno RCM provider credentialing services to manage the entire credentialing and payer enrollment process,
               cutting through the red tape so your providers can start seeing patients and billing immediately including faster 
               in network enrollment.
            </p>
            <div className="cred-ctas">
              <Link to="/contact" className="cred-btn cred-btn-primary">
                Start Credentialing →
              </Link>
              <a href="#services" className="cred-btn cred-btn-outline">
                View Services
              </a>
            </div>
          </div>

          <div className="cred-hero-card">
            <h3>Credentialing at a Glance</h3>
            <div className="cred-card-row">
              <span>Avg. payer timeline</span>
              <b>60–180 days</b>
            </div>
            <div className="cred-card-row">
              <span>Revenue lost per delayed provider</span>
              <b>$10K–$30K/mo</b>
            </div>
            <div className="cred-card-row">
              <span>Our proactive follow-up cadence</span>
              <b>Weekly</b>
            </div>
            <div className="cred-card-row">
              <span>Payers in network</span>
              <b>500+</b>
            </div>
            <div className="cred-card-row">
              <span>Specialties supported</span>
              <b>25+</b>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS CREDENTIALING */}
      <section className="cred-section">
        <div className="cred-container">
          <div className="cred-two-col">
            <div>
              <span className="cred-eyebrow">What is Credentialing</span>
              <h2>What Is Provider Credentialing?</h2>
              <p>
                Provider credentialing is the process through which insurance payers
                review a healthcare provider's qualifications, licensing, education,
                training, and history prior to accepting them as an in-network
                provider.
              </p>
              <p>
                Physician credentialing and insurance credentialing are known for
                being time- and paper-intensive, with timelines of <b>60–180 days
                per payer</b> when working at capacity. Revno RCM removes that
                burden from your team.
              </p>
            </div>
            <div className="cred-img-wrap">
              <img
                src={heroImg}
                alt="Medical providers reviewing credentialing documents"
                width={1600}
                height={1024}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="cred-section cred-section-light">
        <div className="cred-container">
          <div className="cred-section-head">
            <span className="cred-eyebrow">What We Do</span>
            <h2>Our Credentialing Services Include</h2>
            <p>
              Comprehensive provider credentialing and payer enrollment, managed
              end-to-end by a dedicated team.
            </p>
          </div>
          <div className="cred-services-grid">
            {services.map((s) => (
              <div key={s.t} className="cred-service-item">
                <span className="cred-check">✓</span>
                <div>
                  <h4>{s.t}</h4>
                  <p>{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYERS */}
      <section className="cred-section">
        <div className="cred-container">
          <div className="cred-section-head">
            <span className="cred-eyebrow">In-Network Enrollment</span>
            <h2>Payers We Credential With</h2>
            <p>
              Complete insurance credentialing and payer enrollment with the major
              national and regional payers, plus specialty plans for behavioral
              health, dental, and vision networks.
            </p>
          </div>
          <div className="cred-payer-grid">
            {payers.map((p) => (
              <div key={p} className="cred-payer">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FAST CREDENTIALING */}
      <section className="cred-section cred-section-light">
        <div className="cred-container">
          <div className="cred-section-head">
            <span className="cred-eyebrow">Why It Matters</span>
            <h2>Why Fast Credentialing Matters</h2>
            <p>
              A delay in physician credentialing can cost a practice $10,000 to
              $30,000 a month in lost billing. Our streamlined process is faster
              than in-house management.
            </p>
          </div>
          <div className="cred-why-grid">
            <div className="cred-why-card">
              <div className="cred-why-num">$30K</div>
              <h4>Monthly Revenue at Risk</h4>
              <p>Per provider during credentialing delays.</p>
            </div>
            <div className="cred-why-card">
              <div className="cred-why-num">60d</div>
              <h4>Avg. Faster Enrollment</h4>
              <p>Compared to typical in-house timelines.</p>
            </div>
            <div className="cred-why-card">
              <div className="cred-why-num">98%</div>
              <h4>Application Accuracy</h4>
              <p>First-pass acceptance from payers.</p>
            </div>
            <div className="cred-why-card">
              <div className="cred-why-num">24/7</div>
              <h4>Status Visibility</h4>
              <p>Live tracking and weekly payer follow-up.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cred-cta-band">
        <div>
          <h2>Ready to get your providers in-network — faster?</h2>
          <p>
            Talk to our credentialing experts and get a free enrollment timeline
            for your practice.
          </p>
          <div className="cred-ctas" style={{ justifyContent: "center" }}>
            <Link to="/contact" className="cred-btn cred-btn-primary">
              Start Credentialing →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
