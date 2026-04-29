import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/paymentposting.css";

export default function PaymentPosting({ onNavigate }) {
  const navigate = useNavigate();

  const features = [
    "ERA (Electronic Remittance Advice) processing — manual & auto",
    "EOB posting for paper remittances",
    "Patient payments posting (checks, cards, portals)",
    "Write-offs and contractual adjustments processing",
    "Underpayment identification & reporting",
    "Denial identification and AR follow-up queue tagging",
    "Refund handling (secondary insurance / patient)",
    "Day-end reconciliation & deposit tracking",
    "Overpayment identification & refunding",
    "Real-time payment posting for accurate balances",
  ];

  const benefits = [
    "Accurate AR aging with same-day or next-day posting",
    "Underpayment detection and revenue recovery",
    "Clean reconciliation with zero mismatch",
    "Faster denial handling and appeals",
    "Full transparency with daily payment reports",
  ];

  return (
    <div>
      <Helmet>
        <title>Payment Posting Services | EOB & ERA Processing | HIPAA Claims</title>

        <meta
          name="description"
          content="Accurate, timely payment posting services from HIPAA Claims. We post EOBs, ERAs, and patient payments with precision to give you real-time visibility into your revenue cycle."
        />

        <meta
          name="keywords"
          content="payment posting services, EOB posting, ERA payment posting, medical billing payment posting, insurance payment posting, cash posting medical billing"
        />

        <link rel="canonical" href="https://revnorcm.com/payment-posting" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="HIPAA Claims" />
        <meta name="publisher" content="HIPAA Claims" />

        <meta property="og:title" content="Payment Posting Services | EOB & ERA Processing | HIPAA Claims" />
        <meta
          property="og:description"
          content="Accurate ERA, EOB, insurance, and patient payment posting services for real-time revenue cycle visibility."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://revnorcm.com/payment-posting" />
        <meta property="og:site_name" content="HIPAA Claims" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Payment Posting Services | HIPAA Claims" />
        <meta
          name="twitter:description"
          content="Post EOBs, ERAs, insurance payments, and patient payments accurately with HIPAA Claims."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Payment Posting Services",
            url: "https://revnorcm.com/payment-posting",
            provider: {
              "@type": "Organization",
              name: "HIPAA Claims",
              url: "https://revnorcm.com",
            },
            serviceType: [
              "Payment Posting Services",
              "EOB Posting",
              "ERA Payment Posting",
              "Medical Billing Payment Posting",
              "Insurance Payment Posting",
              "Cash Posting Medical Billing",
            ],
            description:
              "Accurate, timely payment posting services including EOB posting, ERA payment posting and insurance payment posting for complete revenue visibility.",
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
            keywords:
              "payment posting services, EOB posting, ERA payment posting, medical billing payment posting, insurance payment posting, cash posting medical billing",
          })}
        </script>
      </Helmet>

      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <button onClick={() => onNavigate?.("home") || navigate("/")}>Home</button> ›{" "}
           
              RCM Services
        {" "}
            › Payment Posting
          </div>

          <h1>Payment Posting Services</h1>
          <p>Post Every Payment Right. See Your Revenue Clearly.</p>
        </div>
      </div>

      {/* INTRO */}
      <section className="payment-section">
        <div className="container">
          <div className="payment-two-col">
            <div className="payment-content">
              <div className="sec-label">Revenue Accuracy</div>
              <h2 className="sec-title">Payment Posting Is Your Financial Backbone</h2>
              <div className="divider" />

              <p>
                Payment posting is not simply data entry — it is the bedrock of your entire revenue cycle.
                Incorrect or delayed medical billing payment posting can distort your financial reports,
                delay follow-ups, and hide underpayments.
              </p>

              <p>
                Our HIPAA Claims team ensures every dollar is posted exactly where it belongs — using
                precise cash posting medical billing practices for accuracy and speed.
              </p>
            </div>

            <div className="payment-visual-panel">
              <div className="payment-svg-wrap">
                <svg viewBox="0 0 280 260" className="payment-main-svg" fill="none">
                  <rect x="58" y="52" width="164" height="148" rx="24" className="payment-doc" />
                  <rect x="86" y="82" width="110" height="12" rx="6" className="payment-line-main" />
                  <rect x="86" y="112" width="72" height="8" rx="4" className="payment-line" />
                  <rect x="86" y="134" width="96" height="8" rx="4" className="payment-line light" />
                  <rect x="86" y="156" width="66" height="8" rx="4" className="payment-line soft" />

                  <circle cx="205" cy="178" r="29" className="payment-money-bg" />
                  <text x="205" y="188" textAnchor="middle" fontSize="30" fill="#86efac" fontWeight="900">$</text>

                  <circle cx="62" cy="82" r="18" className="payment-node node-one" />
                  <circle cx="222" cy="88" r="18" className="payment-node node-two" />
                  <circle cx="58" cy="190" r="18" className="payment-node node-three" />

                  <text x="62" y="88" textAnchor="middle" fontSize="13" fill="white" fontWeight="900">ERA</text>
                  <text x="222" y="94" textAnchor="middle" fontSize="13" fill="white" fontWeight="900">EOB</text>
                  <text x="58" y="196" textAnchor="middle" fontSize="13" fill="white" fontWeight="900">✓</text>

                  <rect x="74" y="70" width="132" height="5" rx="2.5" className="payment-scan" />
                </svg>

                <div className="payment-tags">
                  <span>ERA Posting</span>
                  <span>EOB Posting</span>
                  <span>Reconciliation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-white payment-section">
        <div className="container">
          <div className="payment-two-col">
            <div className="payment-content">
              <div className="sec-label">What We Do</div>
              <h2 className="sec-title">Complete Payment Posting Services</h2>
              <div className="divider" />

              <p>
                Our specialists process all incoming payments from insurance and patients. We handle
                ERA payment posting, EOB posting, and insurance payment posting accurately, identify
                underpayments, flag denials, and ensure proper adjustments inside your system.
              </p>
            </div>

            <div className="payment-visual-panel">
              <div className="payment-svg-wrap">
                <svg viewBox="0 0 280 240" className="payment-main-svg" fill="none">
                  <rect x="56" y="58" width="168" height="126" rx="22" className="payment-doc" />
                  <path d="M86 94 H188" className="payment-stroke" />
                  <path d="M86 122 H172" className="payment-stroke soft-stroke" />
                  <path d="M86 150 H198" className="payment-stroke soft-stroke" />

                  <circle cx="205" cy="162" r="28" className="payment-money-bg" />
                  <path d="M191 162 L202 173 L222 146" className="payment-check" />

                  <path d="M64 202 C100 218 176 218 216 188" className="payment-connection" />
                  <path d="M66 42 C105 22 178 25 216 50" className="payment-connection" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="payment-section">
        <div className="container">
          <div className="center">
            <div className="sec-label">Key Features & Capabilities</div>
            <h2 className="sec-title">Accurate Payment Posting Support</h2>
            <div className="divider" />
          </div>

          <div className="payment-feature-grid">
            {features.map((item, index) => (
              <div className="payment-feature-card" key={index}>
                <span>{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-white payment-section">
        <div className="container">
          <div className="payment-two-col">
            <div className="payment-content">
              <div className="sec-label">Why It Matters</div>
              <h2 className="sec-title">Accurate Posting Drives Smart Decisions</h2>
              <div className="divider" />

              <p>
                Incorrect or delayed posting creates a domino effect — inaccurate AR, missed denials,
                and hidden underpayments. A disciplined cash posting process gives your team real-time
                financial visibility for faster collections and follow-ups.
              </p>
            </div>

            <div className="payment-visual-panel">
              <div className="payment-svg-wrap">
                <svg viewBox="0 0 280 240" className="payment-main-svg" fill="none">
                  <path d="M45 178 H230" className="payment-axis" />
                  <rect x="70" y="118" width="34" height="60" rx="8" className="payment-bar bar-one" />
                  <rect x="123" y="92" width="34" height="86" rx="8" className="payment-bar bar-two" />
                  <rect x="176" y="58" width="34" height="120" rx="8" className="payment-bar bar-three" />
                  <path d="M67 96 C104 86 130 70 168 54 C194 44 214 36 232 28" className="payment-growth" />
                  <path d="M216 27 L233 28 L225 44" className="payment-growth" />
                  <circle cx="142" cy="72" r="18" className="payment-money-bg" />
                  <text x="142" y="78" textAnchor="middle" fontSize="14" fill="white" fontWeight="900">$</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="payment-section">
        <div className="container">
          <div className="center">
            <div className="sec-label">Key Benefits</div>
            <h2 className="sec-title">Cleaner Posting. Better Visibility. Faster Action.</h2>
            <div className="divider" />
          </div>

          <div className="payment-benefits">
            {benefits.map((item, index) => (
              <div className="payment-benefit" key={index}>
                <strong>✓</strong>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="container">
          <h2>Fix Payment Posting Errors Before They Hurt Revenue</h2>
          <p>
            Let HIPAA Claims handle ERA payment posting, EOB posting, and cash posting medical billing with precision.
          </p>

          <button
            className="hbtn"
            onClick={() => {
              navigate("/contact-us");
              window.scrollTo(0, 0);
            }}
          >
            Get Started →
          </button>
        </div>
      </div>
    </div>
  );
}