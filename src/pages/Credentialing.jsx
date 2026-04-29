import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

export default function Credentialing() {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const payers = [
    "Medicare",
    "Medicaid",
    "Aetna",
    "Cigna",
    "UnitedHealthcare",
    "BCBS",
    "Humana",
    "Molina",
    "WellCare",
    "Tricare",
  ];

  const checks = [
    "CAQH profile creation and ongoing maintenance",
    "Initial payer enrollment — all commercial and government insurers",
    "Medicare and Medicaid enrollment (CMS-855 applications)",
    "Re-credentialing and re-enrollment management",
    "Group NPI enrollment and taxonomy code management",
    "State license verification and expiration tracking",
    "Credentialing status tracking and payer follow-up",
    "Hospital privileging support",
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Credentialing & Enrollment Services",
    provider: {
      "@type": "Organization",
      name: "HIPAA Claims",
      url: "https://www.revnorcm.com/",
    },
    areaServed: "United States",
    serviceType:
      "Provider Credentialing Services, Medical Enrollment Services, CAQH Credentialing, Insurance Panel Enrollment, Physician Credentialing, Healthcare Provider Enrollment",
    description:
      "Streamline your provider credentialing and enrollment with HIPAA Claims. We handle insurance panel enrollment, CAQH updates, and re-credentialing to keep your practice revenue-ready.",
    url: "https://www.revnorcm.com/credentialing",
  };

  return (
    <div>
      <Helmet>
        <title>Credentialing & Enrollment Services | HIPAA Claims</title>

        <meta
          name="description"
          content="Streamline your provider credentialing and enrollment with HIPAA Claims. We handle insurance panel enrollment, CAQH updates, and re-credentialing to keep your practice revenue-ready."
        />

        <meta
          name="keywords"
          content="provider credentialing services, medical enrollment services, CAQH credentialing, insurance panel enrollment, physician credentialing, healthcare provider enrollment"
        />

        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-Robots-Tag" content="index, follow" />
        <meta name="publisher" content="HIPAA Claims" />
        <meta name="author" content="HIPAA Claims" />

        <link rel="canonical" href="https://www.revnorcm.com/credentialing" />

        <meta
          property="og:title"
          content="Credentialing & Enrollment Services | HIPAA Claims"
        />
        <meta
          property="og:description"
          content="Streamline your provider credentialing and enrollment with HIPAA Claims. We handle insurance panel enrollment, CAQH updates, and re-credentialing to keep your practice revenue-ready."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.revnorcm.com/credentialing"
        />
        <meta property="og:site_name" content="HIPAA Claims" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Credentialing & Enrollment Services | HIPAA Claims"
        />
        <meta
          name="twitter:description"
          content="Streamline your provider credentialing and enrollment with HIPAA Claims. We handle insurance panel enrollment, CAQH updates, and re-credentialing to keep your practice revenue-ready."
        />

        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <button type="button" onClick={() => goToPage("/")}>
              Home
            </button>{" "}
            ›{" "}
      
              RCM Services
          {" "}
            › Credentialing
          </div>

          <h1>Provider Credentialing &amp; Payer Enrollment Services</h1>
          <p>
            Cutting through the red tape so your providers get in-network faster
            and start billing sooner — reducing costly delays.
          </p>
        </div>
      </div>

      <section className="bg-white">
        <div className="container">
          <div className="two-col">
            <div>
              <div className="sec-label">Why Credentialing Matters</div>
              <h2 className="sec-title">The Gateway to Getting Paid</h2>
              <div className="divider" />

              <p
                style={{
                  fontSize: "15px",
                  color: "var(--gray)",
                  lineHeight: 1.85,
                  marginBottom: "16px",
                }}
              >
                Until a provider is fully credentialed, claims cannot be
                submitted — and every day of delay costs the practice revenue it
                can never recover. The credentialing process typically takes
                60–180 days per payer.
              </p>

              <p
                style={{
                  fontSize: "15px",
                  color: "var(--gray)",
                  lineHeight: 1.85,
                  marginBottom: "22px",
                }}
              >
                A delay in physician credentialing can mean significant monthly
                losses in lost billing for a practice. Our streamlined process
                is significantly faster than in-house management.
              </p>

              <ul className="chklist">
                {checks.map((item) => (
                  <li key={item}>
                    <span className="chk">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="illus-panel" style={{ minHeight: "360px" }}>
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <svg
                  viewBox="0 0 280 260"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "100%", maxWidth: "300px" }}
                >
                  <rect x="55" y="30" width="170" height="110" rx="12" fill="rgba(255,255,255,.12)" stroke="rgba(255,255,255,.25)" strokeWidth="1.5" />
                  <rect x="55" y="30" width="170" height="32" rx="12" fill="rgba(10,181,200,.3)" />
                  <rect x="55" y="50" width="170" height="12" rx="0" fill="rgba(10,181,200,.3)" />
                  <text x="140" y="51" textAnchor="middle" fontSize="9" fill="white" fontWeight="700">PROVIDER CREDENTIAL CARD</text>
                  <rect x="68" y="72" width="35" height="42" rx="6" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.2)" strokeWidth="1" />
                  <circle cx="85" cy="84" r="9" fill="rgba(255,255,255,.3)" />
                  <path d="M68 114 Q85 104 102 114" fill="rgba(255,255,255,.2)" />
                  <text x="114" y="83" fontSize="8" fill="rgba(255,255,255,.85)" fontWeight="700">Dr. J. Williams MD</text>
                  <text x="114" y="95" fontSize="7" fill="rgba(255,255,255,.6)">NPI: 1234567890</text>
                  <text x="114" y="106" fontSize="7" fill="rgba(255,255,255,.6)">Specialty: Internal Med</text>
                  <text x="114" y="117" fontSize="7" fill="rgba(255,255,255,.6)">License: Active ✓</text>
                  <circle cx="208" cy="65" r="16" fill="rgba(16,185,129,.2)" stroke="rgba(16,185,129,.55)" strokeWidth="2" />
                  <text x="208" y="70" textAnchor="middle" fontSize="14" fill="rgba(16,185,129,.9)" fontWeight="900">✓</text>
                  <text x="140" y="165" textAnchor="middle" fontSize="9" fill="rgba(255,255,255,.5)" fontWeight="600">Credentialed With:</text>

                  {[
                    ["Medicare", 45],
                    ["Medicaid", 102],
                    ["Aetna/BCBS", 159],
                    ["Humana", 45],
                    ["Cigna", 102],
                    ["UnitedHC", 159],
                  ].map(([label, x], i) => (
                    <g key={label}>
                      <rect
                        x={x}
                        y={i < 3 ? 172 : 200}
                        width="50"
                        height="22"
                        rx="6"
                        fill={i === 2 || i === 5 ? "rgba(10,181,200,.12)" : "rgba(255,255,255,.08)"}
                        stroke={i === 2 || i === 5 ? "rgba(10,181,200,.35)" : "rgba(255,255,255,.18)"}
                        strokeWidth="1"
                      />
                      <text
                        x={x + 25}
                        y={i < 3 ? 186 : 214}
                        textAnchor="middle"
                        fontSize="7.5"
                        fill="rgba(255,255,255,.75)"
                        fontWeight="600"
                      >
                        {label}
                      </text>
                    </g>
                  ))}

                  <rect x="75" y="232" width="130" height="24" rx="12" fill="rgba(255,193,7,.15)" stroke="rgba(255,193,7,.45)" strokeWidth="1.5" />
                  <text x="140" y="247" textAnchor="middle" fontSize="9" fill="rgba(255,193,7,.9)" fontWeight="700">⚡ Faster In-Network Enrollment</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="sec-label" style={{ marginBottom: "10px" }}>
            Payers We Credential With
          </div>

          <h2 className="sec-title">All Major Payers Covered</h2>
          <div className="divider" />

          <p
            style={{
              fontSize: "15px",
              color: "var(--gray)",
              lineHeight: 1.85,
              marginBottom: "20px",
              maxWidth: "640px",
            }}
          >
            We handle complete insurance credentialing and payer enrollment with
            all national and regional payers — including specialty plans for
            behavioral health, dental, and vision networks.
          </p>

          <div className="tags">
            {payers.map((p) => (
              <span className="tag" key={p}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="container">
          <h2>Get In-Network Faster</h2>
          <p>
            Don't lose another month of billing revenue to credentialing delays.
            Let our specialists handle every step of payer enrollment.
          </p>

          <button
            type="button"
            className="hbtn"
            onClick={() => goToPage("/contact-us")}
          >
            Start Credentialing Today →
          </button>
        </div>
      </div>
    </div>
  );
}