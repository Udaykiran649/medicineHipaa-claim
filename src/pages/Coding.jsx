import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/coding.css";

export default function Coding() {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const features = [
    "Diagnosis coding to ICD-10-CM with full compliance of specificity & hierarchy",
    "Assigning procedure and service codes by CPT coding services and HCPCS coding",
    "E&M coding in compliance with 2024 guidelines",
    "Application of modifiers for accuracy and reimbursement improvement",
    "Specialty-specific medical coding services across 30+ specialties",
    "HCC coders for risk adjustment",
    "Coding audits and documentation improvement programs",
    "Query management and physician education support",
    "Yearly code update training and implementation",
    "Adherence to CMS, AHA, and AMA coding guidelines by certified coders",
  ];

  const benefits = [
    "Better clean claim submission rates with lower denials",
    "Maximized reimbursement with accurate CPT coding and modifier usage",
    "Reduced audit risk with ICD-10 and HCPCS guideline compliance",
    "Certified medical coders available across all specialties",
    "24–48 hours turnaround after receipt of documentation for most coding work",
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Medical Coding Services",
    provider: {
      "@type": "Organization",
      name: "HIPAA Claims",
    },
    serviceType: "Medical Coding Services",
    description:
      "Accurate, compliant medical coding services from certified coders.",
    areaServed: "US",
  };

  return (
    <div>
      <Helmet>
        <title>Medical Coding Services | Certified Medical Coders</title>
        <meta
          name="description"
          content="Accurate, compliant medical coding services from certified coders."
        />
        <link rel="canonical" href="https://revnorcm.com/medical-coding" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      {/* HERO */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <button type="button" onClick={() => goToPage("/")}>
              Home
            </button>{" "}
            ›{" "}

            RCM Services
            {" "}
            › Medical Coding
          </div>

          <h1>Medical Coding Services</h1>
          <p>Certified Medical Coders for ICD-10, CPT & HCPCS Coding Accuracy</p>
        </div>
      </div>

      {/* SECTION */}
      <section className="bg-white">
        <div className="container">
          <div className="two-col">
            <div>
              <div className="sec-label">Medical Coding Accuracy</div>
              <h2 className="sec-title">
                Accurate Coding Protects Your Revenue
              </h2>
              <div className="divider" />

              <p>
                Wrong or inconsistent coding can cost your practice thousands in
                denials and underpayments.
              </p>

              <p>
                Our certified coders ensure accurate ICD-10, CPT & HCPCS coding
                every time.
              </p>
            </div>

            <div className="illus-panel coding-animated-panel">
              <svg
                viewBox="0 0 360 280"
                xmlns="http://www.w3.org/2000/svg"
                className="coding-running-svg"
              >
                <circle className="code-ring code-ring-1" cx="180" cy="135" r="82" />
                <circle className="code-ring code-ring-2" cx="180" cy="135" r="54" />

                <rect className="code-doc" x="115" y="55" width="130" height="170" rx="14" />
                <path className="code-doc-top" d="M210 55 L245 90 L210 90 Z" />

                <line className="code-line l1" x1="140" y1="105" x2="220" y2="105" />
                <line className="code-line l2" x1="140" y1="130" x2="205" y2="130" />
                <line className="code-line l3" x1="140" y1="155" x2="225" y2="155" />

                <circle className="code-check-circle" cx="250" cy="190" r="28" />
                <path className="code-check" d="M238 190 L248 200 L265 178" />

                <text x="180" y="205" textAnchor="middle" className="code-text">
                  ICD-10
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section>
        <div className="container">
          <div className="center">
            <div className="sec-label">What We Do</div>
            <h2 className="sec-title">
              Outsource Medical Coding by Certified Experts
            </h2>
            <div className="divider" />
          </div>

          <div className="cards">
            {features.map((item, index) => (
              <div
                className={`card ${index % 2 === 0 ? "card-t" : "card-b"}`}
                key={item}
              >
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white">
        <div className="container">
          <div className="two-col">
            <div>
              <div className="sec-label">Why This Matters</div>
              <h2 className="sec-title">
                Medical Coding Is the Fuel of Your Revenue Cycle
              </h2>
              <div className="divider" />
            </div>

            <div>
              {benefits.map((b) => (
                <div className="benefit-row" key={b}>
                  <span>✓</span>
                  <p>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <div className="container">
          <h2>Mistakes in Code Are Silent Revenue Killers</h2>
          <p>
            Let certified coders maximize value on every patient encounter.
          </p>

          <button
            type="button"
            className="hbtn"
            onClick={() => goToPage("/contact-us")}
          >
            Get a Free Coding Assessment →
          </button>
        </div>
      </div>
    </div>
  );
}