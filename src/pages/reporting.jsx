import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/reporting.css";

export default function Reporting() {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  const features = [
    "Monthly revenue cycle performance reports covering charges, payments, adjustments, and A/R",
    "Accounts receivable aging reports by payer, provider, and site of service",
    "Denial rate tracking and trend analysis by denial category",
    "Clean claim rate and first-pass resolution rate reporting",
    "Payer mix and reimbursement rate analysis",
    "Provider productivity and collection rate benchmarking",
    "Days in A/R reporting and cash flow projections",
    "Procedure and diagnosis code utilization analysis",
    "Custom billing KPI dashboards tailored to practice objectives",
    "Quarterly business reviews with action-focused recommendations",
  ];

  const benefits = [
    "Full financial transparency across payers, providers, and sites",
    "Proactive identification of denial patterns before they become major revenue issues",
    "Benchmark KPI dashboards to identify performance gaps",
    "Data-backed support for payer contract negotiations",
    "Executive-ready reports that clearly show financial health",
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Medical Billing Reporting & Analytics Services",
    provider: {
      "@type": "Organization",
      name: "HIPAA Claims",
      url: "https://www.revnorcm.com/",
    },
    areaServed: "United States",
    serviceType:
      "Medical Billing Reporting Services, Healthcare Revenue Cycle Analytics, RCM Reporting Services",
    description:
      "Get clear, actionable insights into your practice's financial performance with HIPAA Claims' Reporting Services.",
    url: "https://www.revnorcm.com/reporting",
  };

  return (
    <div className="reporting-page">
      <Helmet>
        <title>
          Medical Billing Reporting & Analytics Services | HIPAA Claims
        </title>

        <meta
          name="description"
          content="Get clear, actionable insights into your practice's financial performance with HIPAA Claims' Reporting Services. Custom dashboards, KPI tracking, and revenue cycle analytics built for healthcare."
        />

        <meta
          name="keywords"
          content="medical billing reporting services, healthcare revenue cycle analytics, practice financial reporting, billing KPI dashboard, medical billing analytics, RCM reporting services"
        />

        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-Robots-Tag" content="index, follow" />
        <link rel="canonical" href="https://www.revnorcm.com/reporting" />

        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      {/* HERO */}
       <div className="page-hero contact-hero-clean">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <button type="button" onClick={() => goToPage("/")}>
              Home
            </button>{" "}
            › Services › Reporting
          </div>

          <h1>Reporting</h1>

          <p>
            Data-driven decisions only as a concept makes sense when the driver is accurate, timely, and actionable. There are far too many healthcare practices flying in the dark, using out-of-date reports or incomplete data and unable to make financial or operational decisions — much less know how healthy their revenue cycle is.
          </p>
        </div>
      </div>

      {/* INTRO */}
      <section className="bg-white reporting-section">
        <div className="container">
          <div className="two-col">
            <div>
              <div className="sec-label">Medical Billing Analytics</div>
              <h2 className="sec-title">
                Turn Billing Data Into Clear Financial Direction
              </h2>
              <div className="divider" />

              <p className="reporting-text">
                With HIPAA Claims&apos; medical billing reporting services and
                advanced healthcare revenue cycle analytics, your practice gets
                an instant view of financial performance, year-over-year trends,
                payer performance, denials, collections, and the exact actions
                needed to improve results.
              </p>

              <p className="reporting-text">
                Our reporting team builds and delivers customized financial and
                operational reports tailored to the specific needs of your
                practice through comprehensive RCM reporting services.
              </p>

              <button
                type="button"
                className="hbtn"
                onClick={() => goToPage("/contact-us")}
              >
                Request Reporting Consultation →
              </button>
            </div>

            <div className="illus-panel reporting-panel">
              <svg
                viewBox="0 0 420 320"
                xmlns="http://www.w3.org/2000/svg"
                className="reporting-svg"
              >
                <defs>
                  <linearGradient id="reportGrad" x1="0" x2="1">
                    <stop offset="0%" stopColor="#0ab5c8" />
                    <stop offset="100%" stopColor="#6ee7df" />
                  </linearGradient>
                </defs>

                <rect x="65" y="55" width="290" height="210" rx="24" className="rep-screen" />
                <rect x="90" y="85" width="95" height="18" rx="9" className="rep-title-bar" />
                <rect x="200" y="85" width="60" height="18" rx="9" className="rep-small-bar" />

                <g className="rep-bars">
                  <rect x="105" y="190" width="32" height="45" rx="8" />
                  <rect x="155" y="160" width="32" height="75" rx="8" />
                  <rect x="205" y="132" width="32" height="103" rx="8" />
                  <rect x="255" y="112" width="32" height="123" rx="8" />
                </g>

                <path
                  className="rep-line"
                  d="M102 165 C135 145 155 150 180 125 C214 92 240 112 268 88 C295 65 315 72 335 55"
                />

                <g className="rep-kpi-card rep-kpi-one">
                  <rect x="65" y="225" width="95" height="48" rx="16" />
                  <text x="112" y="247" textAnchor="middle">98%</text>
                  <text x="112" y="263" textAnchor="middle">Clean Claims</text>
                </g>

                <g className="rep-kpi-card rep-kpi-two">
                  <rect x="260" y="220" width="98" height="48" rx="16" />
                  <text x="309" y="242" textAnchor="middle">A/R</text>
                  <text x="309" y="258" textAnchor="middle">Analytics</text>
                </g>

                <circle className="rep-pulse" cx="335" cy="55" r="9" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="reporting-section">
        <div className="container">
          <div className="center">
            <div className="sec-label">What We Do</div>
            <h2 className="sec-title">
              Custom RCM Reporting Services for Smarter Decisions
            </h2>
            <p className="sec-sub">
              We translate billing data into actionable intelligence that drives
              smarter decision-making and accurate practice financial reporting.
            </p>
          </div>

          <div className="cards reporting-feature-grid">
            {features.map((item, index) => (
              <div
                className={`card ${index % 2 === 0 ? "card-t" : "card-b"}`}
                key={item}
              >
                <div className="reporting-card-icon">
                  <svg viewBox="0 0 48 48">
                    <rect
                      x="8"
                      y="10"
                      width="32"
                      height="28"
                      rx="8"
                      fill="rgba(10,181,200,.12)"
                    />
                    <path
                      d="M15 30L21 24L26 28L34 18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY MATTERS */}
      <section className="bg-white reporting-section">
        <div className="container">
          <div className="two-col">
            <div>
              <div className="sec-label">Why This Matters</div>
              <h2 className="sec-title">
                RCM Without Reporting Is Like Driving Without a Dashboard
              </h2>
              <div className="divider" />

              <p className="reporting-text">
                Revenue cycle management with no reporting is like driving a car
                without a dashboard. You may be making progress — but you have
                no clue how quickly, how effectively, or whether you are just
                about to shut down.
              </p>

              <p className="reporting-text">
                Our healthcare revenue cycle analytics and medical billing
                reporting services allow your practice management to know
                real-time information and respond proactively.
              </p>
            </div>

            <div>
              {benefits.map((benefit) => (
                <div className="benefit-row" key={benefit}>
                  <span>✓</span>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <div className="container">
          <h2>No More Guessing at How Your Practice Is Performing</h2>
          <p>
            Partner with HIPAA Claims for medical billing reporting services,
            RCM reporting services, and healthcare revenue cycle analytics that
            help you lead confidently and drive decisions with data.
          </p>

          <button
            type="button"
            className="hbtn"
            onClick={() => goToPage("/contact-us")}
          >
            Get Your Reporting Dashboard Consultation →
          </button>
        </div>
      </div>
    </div>
  );
}