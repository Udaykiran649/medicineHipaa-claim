import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

export default function RCM() {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const steps = [
    [
      "Patient Registration & Insurance Verification",
      "Demographics, eligibility and coverage verified prior to service — eliminating the majority of rejected claims due to eligibility issues.",
    ],
    [
      "Prior Authorization & Pre-Certification",
      "Prior authorizations handled before services are rendered — minimizing authorization-related denials that cost your practice revenue.",
    ],
    [
      "Medical Coding (ICD-10, CPT, HCPCS)",
      "AAPC/AHIMA certified coders assign proper diagnosis and procedure codes ensuring optimal reimbursement and compliance.",
    ],
    [
      "Charge Capture & Claims Submission",
      "All claims scrubbed through our clearinghouse engine before reaching any payer — clean claims mean quicker payment and fewer denials.",
    ],
    [
      "Payment Posting & Reconciliation",
      "All ERAs and manual payments posted with full reconciliation to identify underpayments, contractual adjustments, and patient balances.",
    ],
    [
      "Denial Management & Appeals",
      "Denied claims worked aggressively — root cause identified, errors corrected, appeals filed within payer timelines for maximum recovery.",
    ],
    [
      "A/R Follow-Up, Patient Statements & Analytics",
      "Strict follow-up on all outstanding claims, easy-to-read patient statements, and monthly reporting on all financial performance metrics.",
    ],
  ];

  const flowItems = [
    ["#6ee7df", "① Registration & Eligibility"],
    ["#93c5fd", "② Prior Authorization"],
    ["#0ab5c8", "③ Medical Coding (ICD-10 / CPT)", true],
    ["#86efac", "④ Claims Scrubbing & Submission"],
    ["#fde68a", "⑤ Payment Posting & Reconciliation"],
    ["#fca5a5", "⑥ Denial Management & Appeals"],
    ["#d8b4fe", "⑦ A/R Follow-Up & Reporting"],
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

        <meta name="robots" content="index, follow" />
        <meta name="publisher" content="Revno RCM" />
        <meta name="author" content="Revno RCM" />
        <meta httpEquiv="X-Robots-Tag" content="index, follow" />

        <link rel="canonical" href="https://www.revnorcm.com/rcm-services" />

        <meta
          property="og:title"
          content="Revenue Cycle Management Services | Medical Billing & RCM | Revno RCM"
        />
        <meta
          property="og:description"
          content="Revno RCM delivers expert revenue cycle management, medical billing, and HIPAA-compliant RCM services to healthcare providers. Maximize reimbursements and reduce denials. Get a free consultation today."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.revnorcm.com/rcm-services"
        />
        <meta property="og:site_name" content="Revno RCM" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Revenue Cycle Management Services | Medical Billing & RCM | Revno RCM"
        />
        <meta
          name="twitter:description"
          content="Revno RCM delivers expert revenue cycle management, medical billing, and HIPAA-compliant RCM services to healthcare providers. Maximize reimbursements and reduce denials. Get a free consultation today."
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Revenue Cycle Management Services",
            provider: {
              "@type": "Organization",
              name: "Revno RCM",
              url: "https://www.revnorcm.com/",
            },
            areaServed: "United States",
            serviceType:
              "Revenue Cycle Management, Medical Billing, RCM Services",
            description:
              "Revno RCM delivers expert revenue cycle management, medical billing, and HIPAA-compliant RCM services to healthcare providers.",
            url: "https://www.revnorcm.com/rcm-services",
          })}
        </script>
      </Helmet>

      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <button type="button" onClick={() => goToPage("/")}>
              Home
            </button>{" "}
            › Services › RCM Services
          </div>

          <h1>End-to-End Revenue Cycle Management Services</h1>

          <p>
            In today's world of healthcare RCM solutions are more complex than
            ever! Provider margins are being squeezed by a multitude of factors
            including rising claim denial rates, changing payer policies,
            increasing patient financial responsibility and tightening
            compliance. Revno RCM provides comprehensive end-to-end revenue
            cycle management services to close all gaps in your revenue cycle —
            from timely patient appointment booking through payment postings and
            reconciliation at BIC.
          </p>
        </div>
      </div>

      <section className="bg-white">
        <div className="container">
          <div className="two-col">
            <div>
              <div className="sec-label">Complete Lifecycle</div>
              <h2 className="sec-title">
                How Revno RCM Works — Step by Step
              </h2>
              <div className="divider" />

              <div className="steps" style={{ marginTop: "32px" }}>
                {steps.map(([title, desc], i) => (
                  <div className="step" key={i}>
                    <div className="step-num">{i + 1}</div>
                    <div>
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="illus-panel" style={{ minHeight: "500px" }}>
              <div className="process-flow">
                {flowItems.map(([color, text, highlight], i) => (
                  <div key={i}>
                    <div
                      className="pf-item"
                      style={
                        highlight
                          ? {
                              background: "rgba(10,181,200,.15)",
                              borderColor: "rgba(10,181,200,.4)",
                            }
                          : {}
                      }
                    >
                      <div className="pf-dot" style={{ background: color }} />
                      <span className="pf-text">{text}</span>
                    </div>

                    {i < flowItems.length - 1 && <div className="pf-line" />}
                  </div>
                ))}

                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {[
                    "✓ First-Pass Acceptance",
                    "✓ Under 30 Days A/R",
                    "✓ Denial Rate Under 5%",
                  ].map((b, i) => (
                    <span
                      key={i}
                      style={{
                        background:
                          i === 0
                            ? "rgba(10,181,200,.2)"
                            : "rgba(255,255,255,.08)",
                        border:
                          i === 0
                            ? "1px solid rgba(10,181,200,.4)"
                            : "1px solid rgba(255,255,255,.15)",
                        color: i === 0 ? "#6ee7df" : "rgba(255,255,255,.8)",
                        fontSize: "11px",
                        fontWeight: 700,
                        padding: "6px 14px",
                        borderRadius: "20px",
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <div className="container">
          <h2>Ready to Optimize Your Revenue Cycle?</h2>
          <p>
            Our RCM specialists will audit your current process and show you
            exactly where revenue is slipping through.
          </p>

          <button
            type="button"
            className="hbtn"
            onClick={() => goToPage("/contact-us")}
          >
            Request Your Free RCM Audit →
          </button>
        </div>
      </div>
    </div>
  );
}