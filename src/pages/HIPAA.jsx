import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/credentialing.css";

export default function HIPAA({ onNavigate }) {
  const navigate = useNavigate();

  const features = [
    "Initial provider credentialing services with all major commercial and government payers",
    "Medicare and Medicaid enrollment / re-enrollment under comprehensive medical enrollment services.",
    "Setup and maintenance of your CAQH credentialing profiles, including attestation",
    "Group Practice and Facility Credentialing",
    "Hospital privileges and medical staff credentialing assistance",
    "Keeping track of re-credentialing management and deadlines",
    "Real-time updates and Credentialing status tracking",
    "NPI registration & taxonomy code handling",
    "Support for transitioning from out-of-network to in-network via efficient insurance panel enrollment",
    "Onboarding new providers and acquiring practices through streamlined healthcare provider enrollment.",
  ];

  const benefits = [
    "Streamlined enrollment processing times — average 30–45% faster than in-house",
    "No re-credentialing deadline has been missed with our consistent tracking system",
    "Less claim denials related to credentialing and insurance panel enrollment.",
    "Meets NCQA and URAC credentialing standards in full compliance",
    "Separated credentialing specalists for your account",
  ];

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
        <link rel="canonical" href="https://www.revnorcm.com/credentialing" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="HIPAA Claims" />
        <meta name="publisher" content="HIPAA Claims" />

        <meta property="og:title" content="Credentialing & Enrollment Services | HIPAA Claims" />
        <meta
          property="og:description"
          content="Streamline your provider credentialing and enrollment with HIPAA Claims. We handle insurance panel enrollment, CAQH updates, and re-credentialing to keep your practice revenue-ready."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.revnorcm.com/credentialing" />
        <meta property="og:site_name" content="HIPAA Claims" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Credentialing & Enrollment Services | HIPAA Claims" />
        <meta
          name="twitter:description"
          content="Provider credentialing, medical enrollment services, CAQH updates, insurance panel enrollment, and re-credentialing support."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Credentialing & Enrollment Services",
            description:
              "Provider credentialing services, medical enrollment services, CAQH credentialing, insurance panel enrollment, physician credentialing, and healthcare provider enrollment.",
            provider: {
              "@type": "Organization",
              name: "HIPAA Claims",
              url: "https://www.revnorcm.com/",
            },
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            serviceType: [
              "Provider Credentialing Services",
              "Medical Enrollment Services",
              "CAQH Credentialing",
              "Insurance Panel Enrollment",
              "Physician Credentialing",
              "Healthcare Provider Enrollment",
            ],
            url: "https://www.revnorcm.com/credentialing",
          })}
        </script>
      </Helmet>

      {/* HERO SECTION SAME */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <button onClick={() => onNavigate("home")}>Home</button> › Services › HIPAA Compliance{" "}
          </div>
          <h1>HIPAA-Compliant Revenue Cycle Management &amp; Billing</h1>
          <p>
            Every process, system, and interaction at Revno RCM follows strict HIPAA compliance standards — protecting your patients and your practice.
          </p>
        </div>
      </div>

      {/* WHAT WE DO */}
      <section className="cred-section">
        <div className="container">
          <div className="cred-two-col">
            <div className="cred-content">
              <div className="sec-label">What We Do</div>
              <h2 className="sec-title">Credentialing & Enrollment Services</h2>
              <div className="divider" />
              <p>
                Our credentialing specialists handle the complete life cycle of healthcare provider enrollment  from application to re-credentialing (and everything in between). We provide end-to-end physician credentialing and insurance panel enrollment,  partnering with insurance carriers, government payers, and managed care organizations to enroll each of your providers on every panel and get them verified and active.
              </p>
            </div>

            <div className="cred-visual-panel">
              <div className="cred-svg-wrap">
                <svg viewBox="0 0 260 260" className="cred-main-svg" fill="none">
                  <circle cx="130" cy="130" r="92" className="cred-ring" />
                  <circle cx="130" cy="130" r="110" className="cred-orbit" />

                  <rect x="84" y="70" width="92" height="120" rx="18" className="cred-doc" />
                  <rect x="104" y="95" width="52" height="9" rx="4.5" className="cred-line-main" />
                  <rect x="104" y="116" width="42" height="7" rx="3.5" className="cred-line" />
                  <rect x="104" y="134" width="55" height="7" rx="3.5" className="cred-line light" />

                  <circle cx="178" cy="178" r="25" className="cred-check-bg" />
                  <path d="M166 178 L175 187 L193 166" className="cred-check" />

                  <circle cx="70" cy="82" r="15" className="cred-node node-one" />
                  <circle cx="196" cy="90" r="15" className="cred-node node-two" />
                  <circle cx="66" cy="190" r="15" className="cred-node node-three" />

                  <path d="M70 82 C100 48 160 48 196 90" className="cred-connection" />
                  <path d="M66 190 C95 218 150 220 178 178" className="cred-connection" />
                </svg>

                <div className="cred-tags">
                  <span>CAQH Updates</span>
                  <span>Panel Enrollment</span>
                  <span>Re-Credentialing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="bg-white cred-section">
        <div className="container">
          <div className="center">
            <div className="sec-label">Key Features & Capabilities</div>
            <h2 className="sec-title">Complete Provider Credentialing Support</h2>
            <div className="divider" />
          </div>

          <div className="credential-feature-grid">
            {features.map((item, index) => (
              <div className="credential-feature-card" key={index}>
                <span>{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section className="cred-section">
        <div className="container">
          <div className="cred-two-col">
            <div className="cred-content">
              <div className="sec-label">Why This Matters for Your Practice</div>
              <h2 className="sec-title">Credentialing Delays Directly Hurt Cash Flow</h2>
              <div className="divider" />
              <p>
                When credentialing is delayed or incomplete, the ramifications are felt directly in your cash flow. For every day a provider is not credentialed, that revenue is lost forever. Credentialing errors and delays are estimated to cost practices four figures over the course of a year. With a proactive approach to physician credentialing and provider credentialing services, we make sure that your providers are always up to date, compliant and eligible to bill protecting your revenue proactively before the issue starts.
              </p>
            </div>

            <div className="cred-visual-panel">
              <div className="cred-svg-wrap">
                <svg viewBox="0 0 280 240" className="cred-main-svg" fill="none">
                  <rect x="58" y="74" width="164" height="120" rx="22" className="cred-doc" />
                  <circle cx="140" cy="112" r="38" className="cred-check-bg" />
                  <path d="M121 112 L136 127 L161 94" className="cred-check big" />

                  <rect x="90" y="165" width="100" height="8" rx="4" className="cred-line-main" />
                  <rect x="102" y="183" width="76" height="7" rx="3.5" className="cred-line" />

                  <circle cx="68" cy="66" r="18" className="cred-node node-one" />
                  <circle cx="218" cy="74" r="18" className="cred-node node-two" />
                  <circle cx="218" cy="190" r="18" className="cred-node node-three" />

                  <path d="M83 72 C110 38 178 38 206 72" className="cred-connection" />
                  <path d="M218 92 C236 122 236 156 218 172" className="cred-connection" />
                  <text x="68" y="72" textAnchor="middle" fontSize="13" fill="white" fontWeight="900">ID</text>
                  <text x="218" y="80" textAnchor="middle" fontSize="13" fill="white" fontWeight="900">$</text>
                  <text x="218" y="196" textAnchor="middle" fontSize="13" fill="white" fontWeight="900">✓</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white cred-section">
        <div className="container">
          <div className="center">
            <div className="sec-label">Key Benefits</div>
            <h2 className="sec-title">Revenue-Ready Credentialing Outcomes</h2>
            <div className="divider" />
          </div>

          <div className="benefit-list">
            {benefits.map((item, index) => (
              <div className="benefit-item" key={index}>
                <strong>✓</strong>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <div className="container">
          <h2>No More Losing Revenue to Credentialing Delays</h2>
          <p>
            Reach out to HIPAA Claims now for a free credentialing audit and allow us to expedite your providers healthcare provider enrollment, CAQH credentialing and billing.
          </p>
          <button
            className="hbtn"
            onClick={() => {
              navigate("/contact-us");
              window.scrollTo(0, 0);
            }}
          >
            Request Free Credentialing Audit →
          </button>
        </div>
      </div>
    </div>
  );
}