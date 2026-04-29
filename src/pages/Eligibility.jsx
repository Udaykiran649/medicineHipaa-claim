import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/eligibility.css";

export default function Eligibility({ onNavigate }) {
  const navigate = useNavigate();

  const features = [
    "Live real-time eligibility verification for all payers",
    "Confirm active coverage, effective dates & termination",
    "Deductibles, co-pay, co-insurance & out-of-pocket checks",
    "In-network vs out-of-network benefits verification",
    "Prior authorization requirements identification",
    "COB & secondary insurance verification",
    "Specialty benefits verification (mental health, PT, labs)",
    "Verification 24–48 hours before service",
    "Patient financial responsibility calculation",
    "Detailed eligibility report for billing team",
  ];

  const benefits = [
    "Reduce claim denials with proactive verification",
    "Improve patient satisfaction with financial clarity",
    "Faster reimbursements with clean claims",
    "Lower front desk workload",
    "Improve collections with better patient counseling",
  ];

  return (
    <div>
      <Helmet>
        <title>Eligibility & Benefits Verification Services | HIPAA Claims</title>
        <meta
          name="description"
          content="Prevent claim denials before they happen. HIPAA Claims verifies patient insurance eligibility and benefits in real time, reducing billing errors and protecting your revenue."
        />
        <meta
          name="keywords"
          content="eligibility verification services, insurance benefits verification, patient eligibility check, prior authorization services, real-time eligibility verification, medical billing eligibility"
        />
        <link rel="canonical" href="https://www.hipaaclaims.com/eligibility-verification" />
        <meta name="robots" content="index, follow" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Eligibility & Benefits Verification Services",
            provider: {
              "@type": "Organization",
              name: "HIPAA Claims",
              url: "https://www.hipaaclaims.com",
            },
            description:
              "Real-time insurance eligibility and benefits verification services including prior authorization and patient responsibility checks.",
            areaServed: "US",
          })}
        </script>
      </Helmet>

      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <button onClick={() => onNavigate?.("home") || navigate("/")}>Home</button> ›{" "}
          
              RCM Services
         
            › Eligibility Verification
          </div>

          <h1>Eligibility & Benefits Verification Services</h1>
          <p>"Verify Before You Serve. Get Paid Every Time."</p>
        </div>
      </div>

      <section className="elig-section">
        <div className="container">
          <div className="elig-two-col">
            <div className="elig-content">
              <div className="sec-label">What We Do</div>
              <h2 className="sec-title">Eligibility Checks That Prevent Denials Before They Start</h2>
              <div className="divider" />

              <p>
                One of the top reasons claims are denied is due to eligibility issues
                — and most claim denials are easily avoidable. By not confirming
                patient coverage, co-pay, deductible or plan limitations before the
                appointment, practices face denials, write-offs & lost revenue.
                HIPAA Claims' eligibility verification service helps eliminate these
                losses permanently.
              </p>

              <p>
                Our real-time eligibility verification ensures every patient is
                checked before the visit. We verify coverage, assess patient
                responsibility, identify prior authorization requirements, and flag
                restrictions so your billing team has complete clarity before
                service.
              </p>
            </div>

            <div className="elig-visual-panel">
              <div className="elig-svg-wrap">
                <svg viewBox="0 0 280 260" className="elig-main-svg" fill="none">
                  <rect x="72" y="48" width="136" height="168" rx="24" className="elig-doc" />
                  <rect x="98" y="78" width="84" height="12" rx="6" className="elig-line-main" />
                  <rect x="98" y="110" width="68" height="8" rx="4" className="elig-line" />
                  <rect x="98" y="132" width="82" height="8" rx="4" className="elig-line light" />
                  <rect x="98" y="154" width="58" height="8" rx="4" className="elig-line soft" />

                  <rect x="82" y="67" width="116" height="5" rx="2.5" className="elig-scan" />

                  <circle cx="190" cy="190" r="27" className="elig-check-bg" />
                  <path d="M177 190 L187 200 L205 176" className="elig-check" />

                  <circle cx="62" cy="86" r="18" className="elig-node node-one" />
                  <circle cx="220" cy="90" r="18" className="elig-node node-two" />
                  <circle cx="58" cy="195" r="18" className="elig-node node-three" />

                  <text x="62" y="92" textAnchor="middle" fontSize="13" fill="white" fontWeight="900">ID</text>
                  <text x="220" y="96" textAnchor="middle" fontSize="13" fill="white" fontWeight="900">$</text>
                  <text x="58" y="201" textAnchor="middle" fontSize="13" fill="white" fontWeight="900">✓</text>
                </svg>

                <div className="elig-tags">
                  <span>Active Coverage</span>
                  <span>Benefits Check</span>
                  <span>Prior Auth</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white elig-section">
        <div className="container">
          <div className="center">
            <div className="sec-label">Key Features & Capabilities</div>
            <h2 className="sec-title">Complete Eligibility Verification Support</h2>
            <div className="divider" />
          </div>

          <div className="eligibility-grid">
            {features.map((item, index) => (
              <div className="eligibility-card" key={index}>
                <span>{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="elig-section">
        <div className="container">
          <div className="elig-two-col">
            <div className="elig-content">
              <div className="sec-label">Why This Matters for Your Practice</div>
              <h2 className="sec-title">Eligibility Errors Turn Into Lost Revenue</h2>
              <div className="divider" />

              <p>
                According to the American Medical Association, eligibility-related
                denials account for 37% of all first-time denials. Every denial costs
                time, money, and lost revenue. Our eligibility verification catches
                issues at patient intake — before they impact your revenue cycle.
              </p>
            </div>

            <div className="elig-visual-panel">
              <div className="elig-svg-wrap">
                <svg viewBox="0 0 280 240" className="elig-main-svg" fill="none">
                  <path d="M45 178 H230" className="elig-axis" />
                  <rect x="70" y="118" width="34" height="60" rx="8" className="elig-bar bar-one" />
                  <rect x="123" y="88" width="34" height="90" rx="8" className="elig-bar bar-two" />
                  <rect x="176" y="56" width="34" height="122" rx="8" className="elig-bar bar-three" />

                  <path d="M67 98 C105 88 128 70 168 54 C193 44 214 36 232 28" className="elig-growth" />
                  <path d="M216 27 L233 28 L225 44" className="elig-growth" />

                  <circle cx="142" cy="72" r="18" className="elig-check-bg" />
                  <text x="142" y="78" textAnchor="middle" fontSize="14" fill="white" fontWeight="900">✓</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white elig-section">
        <div className="container">
          <div className="center">
            <div className="sec-label">Key Benefits</div>
            <h2 className="sec-title">Cleaner Claims Start With Verified Coverage</h2>
            <div className="divider" />
          </div>

          <div className="eligibility-benefits">
            {benefits.map((item, index) => (
              <div className="eligibility-benefit" key={index}>
                <strong>✓</strong>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="container">
          <h2>Stop Revenue Leakage Today</h2>
          <p>
            Don’t let eligibility errors cost you money. Start verifying smarter
            today.
          </p>

          <button
            className="hbtn"
            onClick={() => {
              navigate("/contact-us");
              window.scrollTo(0, 0);
            }}
          >
           Free Audit →
          </button>
        </div>
      </div>
    </div>
  );
}