import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import "../css/chargesentry.css";

export default function ChargesEntry({ onNavigate }) {
    const navigate = useNavigate();

    const features = [
        "Daily charge entry services for all patient encounters: Same day or within 24 hours",
        "Manual & EHR-Integrated Charge Entry medical billing Workflows",
        "Review the Superbill and reconcile all charges for complete medical charge capture.",
        "Validate Codes for Procedure, Diagnosis codes through accurate medical billing data entry.",
        "Review of modifier and application for compliance and reimbursement",
        "Verify location of service and rendering provider",
        "Gap analysis for healthcare charge capture services and identification of Missing Charges",
        "Detection of unauthorizated and duplicate charge detection",
        "Support for multi-specialty / multi-location charge entry services.",
        "Daily charge reconciliation reports ensuring accurate charge entry.",
    ];

    const benefits = [
        "Multi-level quality checks at ultra-low charge entry error rates in medical billing data.",
        "Same-day charge entry services that shortens your billing cycle by days",
        "Missing charge identification through strong medical charges capture, brings in money you are unaware that your losing",
        "Hashing out the same formatting cuts down re-filing and clearinghouse denials",
        "Scalable charge entry medical billing easily manages volume spikes without staffing headaches",
    ];

    return (
        <div>
            <Helmet>
                <title>Charges Entry Services | Accurate Medical Charge Capture | HIPAA Claims</title>

                <meta
                    name="description"
                    content="Eliminate charge entry errors and missed charges with HIPAA Claims. Our accurate, timely charge capture services ensure every billable service is entered correctly and submitted on time."
                />

                <meta
                    name="keywords"
                    content="charges entry services, medical charge capture, charge entry medical billing, accurate charge entry, healthcare charge capture services, medical billing data entry"
                />

                <link rel="canonical" href="https://www.revnorcm.com/charges-entry" />
                <meta name="robots" content="index, follow" />
                <meta name="author" content="HIPAA Claims" />
                <meta name="publisher" content="HIPAA Claims" />

                <meta property="og:title" content="Charges Entry Services | Accurate Medical Charge Capture | HIPAA Claims" />
                <meta
                    property="og:description"
                    content="Eliminate charge entry errors and missed charges with HIPAA Claims. Accurate charge capture services for clean and timely claim submission."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.revnorcm.com/charges-entry" />
                <meta property="og:site_name" content="HIPAA Claims" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Charges Entry Services | HIPAA Claims" />
                <meta
                    name="twitter:description"
                    content="Accurate medical charge capture and charge entry services to prevent missed charges, billing errors, denials, and revenue leakage."
                />

                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        name: "Charges Entry Services",
                        url: "https://www.revnorcm.com/charges-entry",
                        description:
                            "Accurate and timely medical charge capture services to ensure every billable service is entered correctly and submitted on time.",
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
                            "Charges Entry Services",
                            "Medical Charge Capture",
                            "Charge Entry Medical Billing",
                            "Medical Billing Data Entry",
                            "Healthcare Charge Capture Services",
                        ],
                        keywords:
                            "charges entry services, medical charge capture, charge entry medical billing, accurate charge entry, healthcare charge capture services, medical billing data entry",
                    })}
                </script>
            </Helmet>

            <div className="page-hero">
                <div className="page-hero-inner">
                    <div className="breadcrumb">
                        <button onClick={() => onNavigate?.("home") || navigate("/")}>Home</button> › RCM Services › Charges Entry{" "}




                    </div>

                    <h1>Charges Entry Services</h1>
                    <p>Accurate Medical Charge Capture. Clean Claims. Faster Revenue Flow.</p>
                </div>
            </div>

            {/* INTRO */}
            <section className="charge-section">
                <div className="container">
                    <div className="charge-two-col">
                        <div className="charge-content">
                            <div className="sec-label">Introduction</div>
                            <h2 className="sec-title">Medical Charge Capture Is the Make-or-Break Point</h2>
                            <div className="divider" />

                            <p>
                                One incorrect code, one modifier not included, one service above something else
                                (a bundling service or supply) not accounted for and you have a denial or an
                                underpayment. Medical charge capture is the make-or-break point for a revenue cycle.
                            </p>

                            <p>
                                Ensuring that every charge gets entered through accurate charge entry that not a
                                single billable service slips through the cracks, and that each claim is built upon
                                a clean slate long before it ever winds its way to the payer this is why our charge
                                entry services at HIPAA Claims exists.
                            </p>
                        </div>

                        <div className="charge-visual-panel">
                            <div className="charge-svg-wrap">
                                <svg viewBox="0 0 280 260" className="charge-main-svg" fill="none">
                                    <rect x="72" y="48" width="136" height="166" rx="22" className="charge-doc" />
                                    <rect x="96" y="78" width="88" height="12" rx="6" className="charge-line-main" />
                                    <rect x="96" y="110" width="66" height="8" rx="4" className="charge-line" />
                                    <rect x="96" y="132" width="82" height="8" rx="4" className="charge-line light" />
                                    <rect x="96" y="154" width="58" height="8" rx="4" className="charge-line soft" />

                                    <circle cx="192" cy="188" r="28" className="charge-check-bg" />
                                    <path d="M178 188 L189 199 L209 173" className="charge-check" />

                                    <circle cx="62" cy="86" r="18" className="charge-node node-one" />
                                    <circle cx="220" cy="90" r="18" className="charge-node node-two" />
                                    <circle cx="58" cy="196" r="18" className="charge-node node-three" />

                                    <text x="62" y="92" textAnchor="middle" fontSize="13" fill="white" fontWeight="900">$</text>
                                    <text x="220" y="96" textAnchor="middle" fontSize="13" fill="white" fontWeight="900">CPT</text>
                                    <text x="58" y="202" textAnchor="middle" fontSize="13" fill="white" fontWeight="900">✓</text>

                                    <rect x="84" y="68" width="112" height="5" rx="2.5" className="charge-scan" />
                                </svg>

                                <div className="charge-tags">
                                    <span>Accurate Entry</span>
                                    <span>Modifier Check</span>
                                    <span>Clean Claim</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT WE DO */}
            <section className="bg-white charge-section">
                <div className="container">
                    <div className="charge-two-col">
                        <div className="charge-content">
                            <div className="sec-label">What We Do</div>
                            <h2 className="sec-title">Clean Charge Entry From Documentation to Claim</h2>
                            <div className="divider" />

                            <p>
                                Your clinical documentation, superbills or EHR system has all the patient encounter
                                data — and our charge entry medical billing will translate that information into
                                clean, complete claims.
                            </p>

                            <p>
                                Every entry is scrutinized through medical billing data entry, provider, date of
                                service, procedure codes, diagnosis codes, modifiers and place of service are all
                                verified further slashing denials and dragging timelines.
                            </p>
                        </div>

                        <div className="charge-visual-panel">
                            <div className="charge-svg-wrap">
                                <svg viewBox="0 0 280 240" className="charge-main-svg" fill="none">
                                    <rect x="54" y="54" width="172" height="132" rx="22" className="charge-doc" />
                                    <path d="M86 90 H178" className="charge-stroke" />
                                    <path d="M86 118 H194" className="charge-stroke soft-stroke" />
                                    <path d="M86 146 H160" className="charge-stroke soft-stroke" />

                                    <circle cx="202" cy="160" r="27" className="charge-check-bg" />
                                    <path d="M189 160 L200 171 L219 145" className="charge-check" />

                                    <path d="M64 202 C100 218 176 218 214 190" className="charge-connection" />
                                    <path d="M66 42 C105 22 178 25 216 50" className="charge-connection" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="charge-section">
                <div className="container">
                    <div className="center">
                        <div className="sec-label">Key Features & Capabilities</div>
                        <h2 className="sec-title">Complete Charge Entry Support</h2>
                        <div className="divider" />
                    </div>

                    <div className="charge-feature-grid">
                        {features.map((item, index) => (
                            <div className="charge-feature-card" key={index}>
                                <span>{index + 1}</span>
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY THIS MATTERS */}
            <section className="bg-white charge-section">
                <div className="container">
                    <div className="charge-two-col">
                        <div className="charge-content">
                            <div className="sec-label">Why This Matters for Your Practice</div>
                            <h2 className="sec-title">Missed Charges Are Revenue Left on the Table</h2>
                            <div className="divider" />

                            <p>
                                Charge capture failures services rendered that end up in limbo and are never billed
                                — cost healthcare providers 1–3% of annual revenue. That translates to hundreds of
                                thousands of dollars per year, at scale, down the drain.
                            </p>

                            <p>
                                Our healthcare charge capture services combined with precise charge entry medical
                                billing guarantees that each service you perform is converted to a billable,
                                collectible claim.
                            </p>
                        </div>

                        <div className="charge-visual-panel">
                            <div className="charge-svg-wrap">
                                <svg viewBox="0 0 280 240" className="charge-main-svg" fill="none">
                                    <path d="M45 178 H230" className="charge-axis" />
                                    <rect x="70" y="118" width="34" height="60" rx="8" className="charge-bar bar-one" />
                                    <rect x="123" y="92" width="34" height="86" rx="8" className="charge-bar bar-two" />
                                    <rect x="176" y="58" width="34" height="120" rx="8" className="charge-bar bar-three" />
                                    <path d="M67 96 C104 86 130 70 168 54 C194 44 214 36 232 28" className="charge-growth" />
                                    <path d="M216 27 L233 28 L225 44" className="charge-growth" />
                                    <circle cx="142" cy="72" r="18" className="charge-check-bg" />
                                    <text x="142" y="78" textAnchor="middle" fontSize="14" fill="white" fontWeight="900">$</text>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section className="charge-section">
                <div className="container">
                    <div className="center">
                        <div className="sec-label">Key Benefits</div>
                        <h2 className="sec-title">Better Charge Capture. Fewer Errors. Faster Billing.</h2>
                        <div className="divider" />
                    </div>

                    <div className="charge-benefits">
                        {benefits.map((item, index) => (
                            <div className="charge-benefit" key={index}>
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
                    <h2>Close Every Loophole in Your Charge Capture Process</h2>
                    <p>
                        For each successful transaction, a missed charge is money you leave on the table. We work
                        with you to close every loophole in your charge capture process to preserve every dollar.
                    </p>
                    <button
                        className="hbtn"
                        onClick={() => {
                            navigate("/contact-us");
                            window.scrollTo(0, 0);
                        }}
                    >
                        Request Charge Entry Support →
                    </button>
                </div>
            </div>
        </div>
    );
}