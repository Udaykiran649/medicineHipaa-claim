import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/about.css";

export default function About() {
  const navigate = useNavigate();

  const values = [
    "Deep specialty expertise across 30+ specialist",
    "Identifying attitudinal indicators of potential denials and intervening before a denial happens not just reacting to an appeal",
    "Staff is accredited by the US Department of Education as HIPAA certified and retains certifications through continual compliance training.",
    "Availability of real-time reporting and full financial transparency",
    "No long-term contracts we re-earn your business every month",
    "Support team located within the US along with dedicated account managers.",
  ];

  const certs = ["AAPC CPC", "AAPC CRC", "AAPC CPMA", "AHIMA CCS", "AHIMA RHIT", "HIPAA Certified"];

  const integrations = ["Epic", "Athenahealth", "eClinicalWorks", "Kareo", "DrChrono", "Nexgen"];

  return (
    <div>

      {/* ================= SEO ================= */}
    <Helmet>
  {/* PRIMARY SEO */}
  <title>About Revno RCM | Expert RCM & Medical Billing Company</title>

  <meta
    name="description"
    content="Learn about Revno RCM — a leading medical billing and revenue cycle management company helping healthcare providers nationwide increase collections, reduce denials, and stay HIPAA compliant."
  />

  <meta
    name="keywords"
    content="medical billing company, RCM company, about Revno RCM, healthcare billing experts, HIPAA compliant billing company

"
  />

  {/* CANONICAL */}
  <link rel="canonical" href="https://www.revnorcm.com/about-us" />

  {/* ROBOTS */}
  <meta name="robots" content="index, follow" />
  <meta httpEquiv="X-Robots-Tag" content="index, follow" />

  {/* AUTHOR */}
  <meta name="author" content="Revno RCM" />
  <meta name="publisher" content="Revno RCM" />

  {/* OPEN GRAPH */}
  <meta property="og:title" content="Revenue Cycle Management Services | End-to-End RCM Solutions | Revno RCM" />
  <meta
    property="og:description"
    content="End-to-end revenue cycle management solutions to reduce denials, improve collections, and optimize financial performance."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.revnorcm.com/about-us" />
  <meta property="og:site_name" content="Revno RCM" />

  {/* TWITTER */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Revenue Cycle Management Services | Revno RCM" />
  <meta
    name="twitter:description"
    content="Improve collections, reduce A/R days and eliminate revenue leakage with Revno RCM services."
  />

  {/* SCHEMA (VERY IMPORTANT SEO BOOST 🚀) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Revenue Cycle Management Services",
      "url": "https://www.revnorcm.com/revenue-cycle-management",
      "description": "End-to-end revenue cycle management services covering patient registration, coding, billing, denial management, and payment reconciliation.",
      "provider": {
        "@type": "Organization",
        "name": "Revno RCM",
        "url": "https://www.revnorcm.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "serviceType": [
        "Revenue Cycle Management",
        "Medical Billing",
        "Accounts Receivable Management",
        "Denial Management"
      ],
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Free RCM audit and consultation"
      }
    })}
  </script>
</Helmet>

      {/* ================= HERO ================= */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <button onClick={() => navigate("/")}>Home</button> › About Us
          </div>

          <h1>About Revno RCM — Your Revenue Cycle Management Partner</h1>

          <p>
            A trusted medical billing and HIPAA-compliant RCM company helping healthcare providers take control of collections, compliance, and claim performance.
          </p>
        </div>
      </div>

      {/* ================= INTRO ================= */}
      <section className="bg-white">
        <div className="container">
          <div className="about-intro-card">

            <div>
              <div className="sec-label">Who We Are</div>
              <h2 className="sec-title">Built for Healthcare Providers Who Want Financial Control</h2>
              <div className="divider" />

              <p>
                Revno RCM is a medical billing company and trusted HIPAA-compliant billing partner built with one clear mission — helping healthcare providers take full control of their revenue cycle without overloading staff, time, or compliance resources.
              </p>

              <p>
                We understand the daily pressure physicians, practice managers, and healthcare administrators face: strict payer regulations, changing coding rules, claim denials, delayed reimbursements, and the challenge of getting paid correctly for every encounter.
              </p>

              <p>
                Revno RCM was created to solve these problems. Our certified medical billing experts, coders, and compliance specialists work as an extension of your practice — not just as another vendor.
              </p>
            </div>

            <div className="about-highlight-box">
              <h3>Trusted RCM Support</h3>
              <p>Medical Billing · Coding · Denial Management · HIPAA Compliance</p>

              <div className="about-mini-stats">
                <span>30+ Specialties</span>
                <span>HIPAA Ready</span>
                <span>Certified Team</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section>
        <div className="container">
          <div className="mission-card">
            <div className="sec-label">Our Mission</div>

            <h2>Transparent, Data-Driven RCM That Protects Every Dollar</h2>

            <p>
              We provide transparent, data-driven, and result-oriented RCM services so healthcare providers can focus on patient care while we ensure every dollar is captured.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-white">
        <div className="container">
          <div className="center">
            <div className="sec-label">What Sets Us Apart</div>
            <h2 className="sec-title">Why Providers Choose Revno RCM</h2>
            <div className="divider" />
          </div>

          <div className="about-cards-grid">
            {values.map((item, index) => (
              <div className="about-feature-card" key={index}>
                <div className="about-card-num">{index + 1}</div>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CERT + HIPAA ================= */}
      <section>
        <div className="container">
          <div className="two-col">

            <div className="about-info-card">
              <div className="sec-label">Certifications</div>
              <h2 className="sec-title">Our Certifications & Credentials</h2>
              <div className="divider" />

              <p>
                Our team holds certifications from AAPC & AHIMA and stays updated with ICD-10, CPT, and payer rules.
              </p>

              <div className="cert-badges">
                {certs.map((cert, i) => (
                  <span key={i} className="cert-badge">{cert}</span>
                ))}
              </div>
            </div>

            <div className="about-info-card">
              <div className="sec-label">HIPAA & Security</div>
              <h2 className="sec-title">Our Commitment to HIPAA Compliance</h2>
              <div className="divider" />

              <p>
                We ensure 100% HIPAA compliance with encrypted systems, role-based access, and secure workflows.
              </p>

              <div className="security-points">
                <span>Encrypted Data</span>
                <span>Role-Based Access</span>
                <span>BAA Documentation</span>
                <span>Risk Assessments</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY ================= */}
      <section className="bg-white">
        <div className="container">
          <div className="technology-card">

            <div>
              <div className="sec-label">Technology & Integrations</div>
              <h2 className="sec-title">Seamless EHR Integrations</h2>
              <div className="divider" />

              <p>
                We integrate with top EHR systems with minimal setup and zero workflow disruption.
              </p>
            </div>

            <div className="tags">
              {integrations.map((item, i) => (
                <span key={i} className="tag">{item}</span>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <div className="cta-band">
        <div className="container">

          <h2>Ready to Work With a Trusted RCM Partner?</h2>

          <p>
            Increase collections, reduce denials, and take control of your revenue cycle today.
          </p>

          <button
            className="hbtn"
            onClick={() => {
              navigate("/contact-us");
              window.scrollTo(0, 0);
            }}
          >
            Schedule a Free Consultation →
          </button>

        </div>
      </div>

    </div>
  );
}