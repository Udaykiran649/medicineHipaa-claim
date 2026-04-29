import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/denial.css";

export default function Denial({ onNavigate }) {
  const navigate = useNavigate();

  const features = [
    "Systematic AR follow-up on 30, 60, 90, 120+ day claims",
    "Denial analysis with root cause categorization per payer",
    "Claim denial appeals submission for all denial types",
    "Claim resubmission with corrected errors and documentation",
    "Peer-to-peer review coordination and authorization appeals",
    "Medicare & Medicaid redetermination and reconsideration",
    "Denial trend reporting and prevention strategies",
    "Insurance claim status check via EDI, portals, and calls",
    "Secondary & tertiary claim processing after primary",
    "Write-off justification and bad debt analysis reporting",
  ];

  const benefits = [
    "20–40% recovery of previously denied revenue",
    "Reduced AR days with structured follow-up",
    "Lower denial rates through root cause fixes",
    "Weekly transparency with AR & denial reports",
    "Avoidance of timely filing write-offs",
  ];

  return (
    <div>
      <Helmet>
        <title>AR & Denial Management Services | Reduce Denials | HIPAA Claims</title>
        <meta
          name="description"
          content="Recover lost revenue with HIPAA Claims' AR & Denial Management Services. We work aging accounts, appeal denied claims, and implement denial prevention strategies to protect your cash flow."
        />
        <meta
          name="keywords"
          content="denial management services, AR management medical billing, accounts receivable management healthcare, claim denial appeals, reduce claim denials, medical billing AR follow-up"
        />
        <link rel="canonical" href="https://revnorcm.com/denial-management" />
        <meta name="robots" content="index, follow" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "AR & Denial Management Services",
            provider: {
              "@type": "Organization",
              name: "HIPAA Claims",
              url: "https://revnorcm.com",
            },
            serviceType: [
              "Denial Management Services",
              "AR Management Medical Billing",
              "Accounts Receivable Management Healthcare",
              "Claim Denial Appeals",
            ],
            description:
              "Recover lost revenue with AR & Denial Management services. Includes claim denial appeals, AR follow-up, and denial prevention strategies.",
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            url: "https://revnorcm.com/denial-management",
          })}
        </script>
      </Helmet>

      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <button onClick={() => onNavigate?.("home") || navigate("/")}>Home</button> ›{" "}
         
              RCM Services
           {" "}
            › Denial Management
          </div>
          <h1>AR & Denial Management Services</h1>
          <p>Recover Revenue. Reduce Denials. Strengthen Your Cash Flow.</p>
        </div>
      </div>

      <section className="denial-section">
        <div className="container">
          <div className="denial-two-col">
            <div className="denial-content">
              <div className="sec-label">Revenue Recovery</div>
              <h2 className="sec-title">Fix Aging AR Before It Hurts Your Practice</h2>
              <div className="divider" />

              <p>
                Rough billing is more than just delayed payments, denied claims, and aging AR — it signals a deeper problem in your revenue cycle. Untreated AR can pile up and threaten the financial health of your practice.
              </p>

              <p>
                Our AR & Denial Management services team focuses on finding that money, fighting for it, and recovering it through structured accounts receivable management healthcare processes.
              </p>
            </div>

            <div className="denial-visual-panel">
              <div className="denial-svg-wrap">
                <svg viewBox="0 0 280 260" className="denial-main-svg" fill="none">
                  <circle cx="140" cy="130" r="92" className="denial-ring" />
                  <circle cx="140" cy="130" r="110" className="denial-orbit" />

                  <rect x="80" y="66" width="120" height="142" rx="22" className="denial-doc" />
                  <rect x="104" y="96" width="72" height="10" rx="5" className="denial-line-main" />
                  <rect x="104" y="124" width="56" height="8" rx="4" className="denial-line" />
                  <rect x="104" y="146" width="70" height="8" rx="4" className="denial-line light" />

                  <circle cx="195" cy="178" r="28" className="denial-recover-bg" />
                  <path d="M181 178 L192 189 L212 163" className="denial-check" />

                  <circle cx="68" cy="86" r="18" className="denial-node node-one" />
                  <circle cx="218" cy="94" r="18" className="denial-node node-two" />
                  <circle cx="60" cy="194" r="18" className="denial-node node-three" />

                  <text x="68" y="92" textAnchor="middle" fontSize="13" fill="white" fontWeight="900">AR</text>
                  <text x="218" y="100" textAnchor="middle" fontSize="13" fill="white" fontWeight="900">!</text>
                  <text x="60" y="200" textAnchor="middle" fontSize="13" fill="white" fontWeight="900">$</text>

                  <path d="M67 202 C104 222 178 220 207 188" className="denial-connection" />
                </svg>

                <div className="denial-tags">
                  <span>Appeals</span>
                  <span>AR Follow-Up</span>
                  <span>Revenue Recovery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-white denial-section">
        <div className="container">
          <div className="denial-two-col">
            <div className="denial-content">
              <div className="sec-label">What We Do</div>
              <h2 className="sec-title">Complete AR & Denial Management</h2>
              <div className="divider" />

              <p>
                We review your entire AR aging report, prioritize claims by payer and urgency, and follow up systematically on every unpaid or underpaid claim.
              </p>

              <p>
                Our denial management services team performs root cause analysis, builds strong claim denial appeals, and implements corrective strategies to reduce future denials.
              </p>
            </div>

            <div className="denial-visual-panel">
              <div className="denial-svg-wrap">
                <svg viewBox="0 0 280 240" className="denial-main-svg" fill="none">
                  <path d="M45 178 H230" className="denial-axis" />
                  <rect x="68" y="78" width="34" height="100" rx="8" className="denial-bar bar-danger" />
                  <rect x="123" y="110" width="34" height="68" rx="8" className="denial-bar bar-mid" />
                  <rect x="178" y="135" width="34" height="43" rx="8" className="denial-bar bar-safe" />

                  <path d="M68 68 C104 86 132 102 168 122 C194 136 214 146 232 156" className="denial-down" />
                  <path d="M216 150 L233 157 L217 166" className="denial-down" />

                  <circle cx="140" cy="92" r="18" className="denial-recover-bg" />
                  <text x="140" y="98" textAnchor="middle" fontSize="14" fill="white" fontWeight="900">↓</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="denial-section">
        <div className="container">
          <div className="center">
            <div className="sec-label">Key Features & Capabilities</div>
            <h2 className="sec-title">Structured Denial Recovery Support</h2>
            <div className="divider" />
          </div>

          <div className="denial-feature-grid">
            {features.map((item, index) => (
              <div className="denial-feature-card" key={index}>
                <span>{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-white denial-section">
        <div className="container">
          <div className="denial-two-col">
            <div className="denial-content">
              <div className="sec-label">Why It Matters</div>
              <h2 className="sec-title">Denied Claims = Lost Revenue If Ignored</h2>
              <div className="divider" />

              <p>
                Healthcare providers often have 5–10% of revenue stuck in denied or unworked claims. Many are recoverable but must be appealed within payer deadlines.
              </p>

              <p>
                Our team ensures every claim is worked strategically and efficiently so recoverable revenue does not become a write-off.
              </p>
            </div>

            <div className="denial-visual-panel">
              <div className="denial-svg-wrap">
                <svg viewBox="0 0 280 240" className="denial-main-svg" fill="none">
                  <rect x="58" y="56" width="164" height="128" rx="22" className="denial-doc" />
                  <path d="M88 92 H188" className="denial-stroke" />
                  <path d="M88 120 H166" className="denial-stroke soft-stroke" />
                  <path d="M88 148 H194" className="denial-stroke soft-stroke" />

                  <circle cx="204" cy="164" r="28" className="denial-recover-bg" />
                  <path d="M191 164 L202 175 L222 148" className="denial-check" />

                  <path d="M64 202 C100 218 176 218 216 188" className="denial-connection" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="denial-section">
        <div className="container">
          <div className="center">
            <div className="sec-label">Key Benefits</div>
            <h2 className="sec-title">Recover More. Write Off Less. Reduce Future Denials.</h2>
            <div className="divider" />
          </div>

          <div className="denial-benefits">
            {benefits.map((item, index) => (
              <div className="denial-benefit" key={index}>
                <strong>✓</strong>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="container">
          <h2>Your Denied Claims Are Real Money</h2>
          <p>
            Let our denial management services experts recover what you've already earned through strong claim denial appeals.
          </p>

          <button
            className="hbtn"
            onClick={() => {
              navigate("/contact-us");
              window.scrollTo(0, 0);
            }}
          >
            Start Recovering Revenue →
          </button>
        </div>
      </div>
    </div>
  );
}