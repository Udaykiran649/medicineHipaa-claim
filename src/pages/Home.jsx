import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";

/* SERVICE ICONS */
import rcmIcon from "../assests/icons/rcm.png";
import billingIcon from "../assests/icons/billing.png";
import codingIcon from "../assests/icons/coding.png";
import insuranceIcon from "../assests/icons/insurance.png";
import denialIcon from "../assests/icons/denial.png";
import credentialingIcon from "../assests/icons/credentialing.png";
import collectionsIcon from "../assests/icons/collections.png";
import hipaaIcon from "../assests/icons/hipaa.png";
import reportingIcon from "../assests/icons/Reporting.png";
import chargesIcon from "../assests/icons/Charges.png";

function CountUp({ end, prefix = "", suffix = "", duration = 1800 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = 20;
    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <>
      {prefix}
      {count}
      {suffix}
    </>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const GOOGLE_SHEET_WEBHOOK_URL =
    "https://script.google.com/macros/s/AKfycbwQ8h_9U6PYpUiGU0m5yC6_7mZXgOnKjsqc1S3XlTNE8tYItimZrGwXvANJyBVG_j943w/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const phone = form.phone.value.trim();

    if (!/^[0-9+\-\s()]{8,20}$/.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    setLoading(true);
    setSuccess(false);

    const formData = new FormData(form);

    try {
      await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setSuccess(true);
      form.reset();
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const servicesData = [
    {
      img: rcmIcon,
      title: "Revenue Cycle Management (RCM)",
      desc: "End-to-end RCM from patient registration through final payment. We close every gap in your revenue cycle.",
      page: "/rcm-services",
    },
    {
      img: billingIcon,
      title: "Medical Billing",
      desc: "Accurate claim submission, faster reimbursements, and reduced denials across all major payers.",
      page: "/medical-billing",
    },
    {
      img: codingIcon,
      title: "Medical Coding",
      desc: "Certified ICD-10, CPT, and HCPCS coding for compliance and maximum reimbursement.",
      page: "/medical-coding",
    },
    {
      img: insuranceIcon,
      title: "Eligibility & Benefits Verification",
      desc: "Real-time insurance verification to eliminate front-end denials and improve cash flow.",
      page: "/eligibility-and-benifits",
    },
    {
      img: denialIcon,
      title: "Denial Management",
      desc: "Identify, correct, and recover denied claims with aggressive follow-up strategies.",
      page: "/denial-management",
    },
    {
      img: credentialingIcon,
      title: "Provider Credentialing",
      desc: "Complete payer enrollment and credentialing to get you in-network faster.",
      page: "/credentialing",
    },
    {
      img: chargesIcon,
      title: "Charges Entry",
      desc: "Accurate charge capture and entry to ensure no revenue is missed.",
      page: "/charges-entry",
    },
    {
      img: collectionsIcon,
      title: "Payment Posting",
      desc: "Precise payment posting and reconciliation for complete financial accuracy.",
      page: "/payment-posting",
    },
    {
      img: hipaaIcon,
      title: "HIPAA Compliance",
      desc: "End-to-end compliance, audits, and data security for your healthcare operations.",
      page: "/hipaa-compliance",
    },
    {
      img: reportingIcon,
      title: "Reporting & Analytics",
      desc: "Advanced dashboards, KPI tracking, and revenue cycle insights for smarter decisions.",
      page: "/reporting",
    },
  ];

  const animatedStats = [
    { end: 500, suffix: "+", label: "Healthcare Providers" },
    { end: 98, suffix: "%", label: "Clean Claim Rate" },
    { end: 50, prefix: "$", suffix: "M+", label: "Revenue Recovered" },
    { end: 15, suffix: "+", label: "Years Experience" },
  ];

  return (
    <div>
      <Helmet>
        <title>
          Revenue Cycle Management Services | Medical Billing & RCM | Revno RCM
        </title>
        <meta
          name="description"
          content="Revno RCM delivers expert revenue cycle management, medical billing, and HIPAA-compliant RCM services to healthcare providers. Maximize reimbursements and reduce denials. Get a free consultation today."
        />
        <meta
          name="keywords"
          content="revenue cycle management, medical billing services, RCM services, HIPAA compliant medical billing, healthcare revenue cycle"
        />
        <meta name="publisher" content="Revno RCM" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-Robots-Tag" content="index, follow" />
        <link rel="canonical" href="https://www.revnorcm.com/" />

        <meta
          property="og:title"
          content="Revenue Cycle Management Services | Medical Billing & RCM | Revno RCM"
        />
        <meta
          property="og:description"
          content="Revno RCM delivers expert revenue cycle management, medical billing, and HIPAA-compliant RCM services to healthcare providers. Maximize reimbursements and reduce denials."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.revnorcm.com/" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Revenue Cycle Management Services | Medical Billing & RCM | Revno RCM"
        />
        <meta
          name="twitter:description"
          content="Revno RCM delivers expert revenue cycle management, medical billing, and HIPAA-compliant RCM services to healthcare providers."
        />
      </Helmet>

      {/* HERO */}
      <div style={{ background: "var(--bg)" }}>
        <div className="hero">
          <div className="hero-content">
            <div className="hero-badge">
              HIPAA-Compliant · Certified Coders · End-to-End RCM
            </div>

            <h1>
              Trusted Revenue
              <br />
              Cycle Management
              <br />
              &amp; <span className="teal">Medical Billing</span>
              <br />
              Services
            </h1>

            <p>
              Revno RCM enables healthcare providers across the United States to
              recover more revenue, reduce claim denials, and streamline
              operations — whether you're a solo practice, multi-specialty group,
              or hospital system.
            </p>

            <div className="hero-btns">
              <button
                type="button"
                className="hbtn"
                onClick={() => goToPage("/contact-us")}
              >
                Get a Free RCM Audit
              </button>

              <button
                type="button"
                className="hbtn-o"
                onClick={() => goToPage("/rcm-services")}
              >
                Explore Services
              </button>
            </div>
          </div>

          <div className="hero-form-wrap">
            <form className="audit-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div>
                  <label>First Name</label>
                  <input name="firstName" placeholder="Dr. Amanda" required />
                </div>

                <div>
                  <label>Last Name</label>
                  <input name="lastName" placeholder="Collins" required />
                </div>
              </div>

              <label>Practice Email</label>
              <input
                type="email"
                name="practiceEmail"
                placeholder="billing@yourpractice.com"
                required
              />

              <label>Phone Number</label>
              <input name="phone" placeholder="+1 (555) 000-0000" required />

              <div className="form-row">
                <div>
                  <label>Practice Type / Specialty</label>
                  <select name="specialty" required>
                    <option value="">Select specialty</option>
                    <option>Internal Medicine / Family Practice</option>
                    <option>Cardiology</option>
                    <option>Orthopedics & Sports Medicine</option>
                    <option>Behavioral Health & Psychiatry</option>
                    <option>Physical / Occupational Therapy</option>
                    <option>Emergency Medicine / Urgent Care</option>
                    <option>OB/GYN</option>
                    <option>Dermatology</option>
                    <option>Neurology</option>
                    <option>Radiology</option>
                    <option>Home Health & Hospice</option>
                    <option>Podiatry / Ophthalmology</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label>Monthly Claim Volume</label>
                  <select name="claimVolume" required>
                    <option value="">Select volume</option>
                    <option>Under 200</option>
                    <option>200 – 500</option>
                    <option>500 – 2,000</option>
                    <option>2,000 – 10,000</option>
                    <option>10,000+</option>
                  </select>
                </div>
              </div>

              <label>What billing challenges are you facing?</label>
              <textarea
                name="billingChallenges"
                placeholder="e.g. High denial rates, slow collections, manual coding errors, staff turnover, payer disputes..."
              />

              <button type="submit" disabled={loading}>
                {loading
                  ? "Sending..."
                  : "Request Free RCM Audit & Consultation →"}
              </button>

              {success && (
                <p style={{ color: "green", marginTop: "10px", fontWeight: 600 }}>
                  Message sent successfully ✅
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* ANIMATED COUNT STATS */}
      <section className="animated-stats-section">
        <div className="container animated-stats-grid">
          {animatedStats.map(({ end, prefix, suffix, label }, index) => (
            <div
              className="animated-stat-card"
              key={label}
              style={{ animationDelay: `${index * 0.18}s` }}
            >
              <h3>
                <CountUp end={end} prefix={prefix} suffix={suffix} />
              </h3>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT IS RCM */}
      <section className="bg-white">
        <div className="container">
          <div className="two-col">
            <div>
              <div className="sec-label">What We Do</div>
              <h2 className="sec-title">What Is Revenue Cycle Management?</h2>
              <div className="divider" />

              <p
                style={{
                  fontSize: "15px",
                  color: "var(--gray)",
                  lineHeight: 1.85,
                  marginBottom: "18px",
                }}
              >
                Revenue Cycle Management (RCM) forms the financial backbone of
                every healthcare organization. It covers every phase — from
                insurance eligibility checks and pre-authorization before an
                appointment, to accurate medical coding, claim submission,
                payment posting, denial management, and final collections.
              </p>

              <p
                style={{
                  fontSize: "15px",
                  color: "var(--gray)",
                  lineHeight: 1.85,
                  marginBottom: "28px",
                }}
              >
                An optimized revenue cycle allows your practice to be
                compensated quickly, with fewer errors and at higher rates.
                Revno RCM ensures every dollar you earn ends up in your account.
              </p>

              <button
                type="button"
                className="hbtn"
                onClick={() => goToPage("/rcm-services")}
              >
                Explore RCM Services →
              </button>
            </div>

            <div className="illus-panel" style={{ minHeight: "300px" }}>
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <svg
                  viewBox="0 0 360 280"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rcm-running-svg"
                >
                  <defs>
                    <linearGradient id="rcmGlow" x1="0" x2="1">
                      <stop offset="0%" stopColor="#0ab5c8" />
                      <stop offset="100%" stopColor="#6ee7df" />
                    </linearGradient>
                  </defs>

                  <circle className="rcm-pulse rcm-pulse-1" cx="180" cy="135" r="86" />
                  <circle className="rcm-pulse rcm-pulse-2" cx="180" cy="135" r="58" />

                  <path
                    className="rcm-orbit"
                    d="M180 45a90 90 0 1 1 0 180a90 90 0 1 1 0-180"
                  />

                  <g className="rcm-hospital">
                    <rect x="120" y="96" width="120" height="98" rx="12" />
                    <path d="M105 102L180 60L255 102Z" />
                    <rect x="138" y="132" width="34" height="62" rx="6" />
                    <rect x="188" y="132" width="34" height="62" rx="6" />
                    <rect x="172" y="86" width="16" height="50" rx="4" />
                    <rect x="155" y="103" width="50" height="16" rx="4" />
                  </g>

                  <g className="rcm-coin">
                    <circle cx="280" cy="75" r="22" />
                    <text x="280" y="83" textAnchor="middle">$</text>
                  </g>

                  <path
                    className="rcm-heart-line"
                    d="M55 230 L92 230 L112 198 L132 248 L158 210 L182 230 L218 230 L238 203 L260 246 L285 225 L312 225"
                  />

                  <g className="rcm-floating-card card-one">
                    <rect x="42" y="78" width="82" height="34" rx="10" />
                    <text x="83" y="100" textAnchor="middle">Claims</text>
                  </g>

                  <g className="rcm-floating-card card-two">
                    <rect x="238" y="182" width="84" height="34" rx="10" />
                    <text x="280" y="204" textAnchor="middle">Payments</text>
                  </g>
                </svg>

                <div
                  style={{
                    color: "white",
                    fontSize: "14px",
                    fontWeight: 700,
                    marginTop: "4px",
                  }}
                >
                  Complete Healthcare Revenue Optimization
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section>
        <div className="container">
          <div className="center">
            <div className="sec-label">Why Choose Us</div>
            <h2 className="sec-title">
              Why Healthcare Providers Choose Revno RCM
            </h2>
            <div className="divider" />
          </div>

          <div className="cards">
            {[
              [
                "card-t",
                "10+ Years Specialty Expertise",
                "Certified medical billers and coders with over a decade of experience across every major specialty.",
              ],
              [
                "card-b",
                "Complete End-to-End RCM",
                "From patient registration through final payment reconciliation — full-cycle management in one place.",
              ],
              [
                "card-t",
                "100% HIPAA Compliant",
                "Fully encrypted, secure data processing with signed BAAs for every client and role-based access controls.",
              ],
              [
                "card-b",
                "Real-Time Dashboards",
                "KPI tracking and full financial transparency so you always know exactly where your revenue stands.",
              ],
              [
                "card-t",
                "Dedicated Account Managers",
                "Specialists who understand your niche — your direct, personal contact for all billing concerns.",
              ],
              [
                "card-b",
                "EHR System Integration",
                "Fully integrated with Epic, Athenahealth, eClinicalWorks, Kareo, DrChrono, Nexgen, and more.",
              ],
            ].map(([border, title, desc]) => (
              <div className={`card ${border}`} key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL SERVICES */}
      <section className="bg-white service-bg-grid">
        <div className="container">
          <div className="center">
            <div className="sec-label">Our Services</div>
            <h2 className="sec-title">
              Full Suite of{" "}
              <span className="teal">Everything Your Revenue </span> Cycle
              Needs
            </h2>
            <p className="sec-sub">
              Complete healthcare revenue cycle services — each managed by
              certified specialists.
            </p>
          </div>

          <div className="service-cards-grid">
            {servicesData.map(({ img, title, desc, page }) => (
              <div
                className="service-card-full"
                key={title}
                onClick={() => goToPage(page)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") goToPage(page);
                }}
              >
                <div className="service-card-icon">
                  <img src={img} alt={title} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPage(page);
                  }}
                >
                  Learn more →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section>
        <div className="container">
          <div className="two-col">
            <div>
              <div className="sec-label">Specialties</div>
              <h2 className="sec-title">Industries &amp; Specialties We Serve</h2>
              <div className="divider" />

              <p
                style={{
                  fontSize: "15px",
                  color: "var(--gray)",
                  lineHeight: 1.85,
                  marginBottom: "24px",
                }}
              >
                Expert RCM services across more than 30 medical specialties —
                each with a dedicated coding team that understands unique payer
                rules and compliance requirements.
              </p>

              <div className="tags">
                {[
                  "Family Medicine",
                  "Internal Medicine",
                  "Cardiology",
                  "Orthopedics",
                  "Behavioral Health",
                  "Physical Therapy",
                  "Urgent Care",
                  "Home Health",
                  "Dermatology",
                  "Neurology",
                  "OB/GYN",
                  "Radiology",
                  "Podiatry",
                  "Psychiatry",
                  "Anesthesiology",
                  "Oncology",
                  "Ophthalmology",
                  "Surgery",
                ].map((s) => (
                  <span className="tag" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="illus-panel" style={{ minHeight: "320px" }}>
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <svg
                  viewBox="0 0 360 280"
                  xmlns="http://www.w3.org/2000/svg"
                  className="specialty-running-svg"
                >
                  <defs>
                    <linearGradient id="specialtyGrad" x1="0" x2="1">
                      <stop offset="0%" stopColor="#0ab5c8" />
                      <stop offset="100%" stopColor="#93c5fd" />
                    </linearGradient>
                  </defs>

                  <circle className="sp-ring sp-ring-1" cx="180" cy="135" r="86" />
                  <circle className="sp-ring sp-ring-2" cx="180" cy="135" r="58" />
                  <circle className="sp-core" cx="180" cy="135" r="44" />

                  <text x="180" y="130" textAnchor="middle" className="sp-main-text">
                    30+
                  </text>
                  <text x="180" y="148" textAnchor="middle" className="sp-sub-text">
                    Specialties
                  </text>

                  {[
                    ["Psychiatry", 180, 30],
                    ["Cardio", 275, 78],
                    ["Ortho", 288, 185],
                    ["OB/GYN", 180, 242],
                    ["Neuro", 72, 185],
                    ["Dermatology", 85, 78],
                  ].map(([label, x, y], i) => (
                    <g className={`sp-chip sp-chip-${i + 1}`} key={label}>
                      <rect x={x - 38} y={y - 14} width="76" height="28" rx="14" />
                      <text x={x} y={y + 5} textAnchor="middle">
                        {label}
                      </text>
                    </g>
                  ))}

                  <path
                    className="sp-dash-path"
                    d="M180 30 C275 45 315 115 288 185 C245 260 115 260 72 185 C45 115 85 45 180 30Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <div className="container">
          <h2>Start Maximizing Your Revenue Today</h2>
          <p>
            Stop leaving money on the table. Get a complimentary RCM audit and
            discover how much revenue your practice may be missing.
          </p>

          <button
            type="button"
            className="hbtn"
            onClick={() => goToPage("/contact-us")}
          >
            Get Your Free RCM Audit →
          </button>
        </div>
      </div>
    </div>
  );
}