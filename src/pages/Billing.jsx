import { useNavigate } from "react-router-dom";
import "../css/billing.css"

export default function Billing() {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const specialties = [
    ["Internal Medicine & Family Practice", "Comprehensive billing for primary care, chronic care management, preventive services, and E&M visits."],
    ["Cardiology & Interventional", "Expert billing for cardiac procedures, catheterizations, stress testing, and interventional services."],
    ["Orthopedics & Sports Medicine", "Precise coding for surgical and non-surgical orthopedic services, joint procedures, and sports injury care."],
    ["Behavioral Health & Psychiatry", "Specialized billing for mental health services, therapy, psychiatry, and substance use treatment."],
    ["Physical & Occupational Therapy", "Accurate billing for therapy services, functional evaluations, and rehabilitation programs."],
    ["Emergency Medicine & Urgent Care", "High-volume, fast-turnaround billing for emergency visits, facility fees, and urgent care encounters."],
    ["OB/GYN & Women's Health", "Global maternity billing, gynecological procedures, preventive services, and prenatal care."],
    ["Radiology & Imaging", "Technical and professional component billing for MRI, CT, X-Ray, and ultrasound services."],
    ["Home Health & Hospice", "Medicare and Medicaid billing for home health agencies, hospice providers, and DME."],
  ];

  return (
    <div>
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <button type="button" onClick={() => goToPage("/")}>
              Home
            </button>{" "}
            ›{" "}

            RCM Services
            {" "}
            › Medical Billing
          </div>

          <h1>Professional Medical Billing Services for Every Specialty</h1>
          <p>
            Outsource medical billing to certified specialists — faster
            reimbursements, fewer denials, and industry-leading collection rates
            across all specialties.
          </p>
        </div>
      </div>

      <section className="bg-white">
        <div className="container">
          <div className="two-col">
            <div>
              <div className="sec-label">Expert Billing</div>
              <h2 className="sec-title">
                Precision Billing That Maximizes Collections
              </h2>
              <div className="divider" />

              <p
                style={{
                  fontSize: "15px",
                  color: "var(--gray)",
                  lineHeight: 1.85,
                  marginBottom: "20px",
                }}
              >
                Medical billing is not just about submitting claims — it's a
                precision exercise that greatly influences whether and when your
                practice receives payment. Our billing specialists are trained
                to maximize your collections at every step.
              </p>

              <ul className="chklist">
                {[
                  "Remove the cost of internal billing staff — salary, training, benefits, and turnover",
                  "Access specialty medical billing with certified experts for every specialty",
                  "Pre-submission claim scrubbing to reduce denials and billing errors",
                  "Most claims processed within 14–21 days for faster payment",
                  "Stay current with ICD-10, CPT updates, and payer policy changes",
                  "Scale billing capacity without hiring or layoffs",
                ].map((item) => (
                  <li key={item}>
                    <span className="chk">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "28px" }}>
                <button
                  type="button"
                  className="hbtn"
                  onClick={() => goToPage("/contact-us")}
                >
                  Get a Free Billing Assessment →
                </button>
              </div>
            </div>

            <div className="illus-panel" style={{ minHeight: "340px" }}>
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <svg
                  viewBox="0 0 360 280"
                  xmlns="http://www.w3.org/2000/svg"
                  className="billing-running-svg"
                >
                  <defs>
                    <linearGradient id="billingGrad" x1="0" x2="1">
                      <stop offset="0%" stopColor="#0ab5c8" />
                      <stop offset="100%" stopColor="#6ee7df" />
                    </linearGradient>
                    <linearGradient id="billingGold" x1="0" x2="1">
                      <stop offset="0%" stopColor="#facc15" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                  </defs>

                  <circle className="bill-pulse bill-pulse-one" cx="180" cy="135" r="92" />
                  <circle className="bill-pulse bill-pulse-two" cx="180" cy="135" r="62" />

                  <g className="bill-claim-card">
                    <rect x="82" y="44" width="180" height="130" rx="18" />
                    <rect x="82" y="44" width="180" height="34" rx="18" className="bill-card-head" />
                    <rect x="82" y="64" width="180" height="14" className="bill-card-head" />
                    <text x="172" y="66" textAnchor="middle" className="bill-head-text">
                      MEDICAL CLAIM
                    </text>

                    <line x1="105" y1="95" x2="236" y2="95" className="bill-line-soft" />

                    <text x="105" y="112" className="bill-label">Patient:</text>
                    <text x="150" y="112" className="bill-value">Johnson, M.A.</text>

                    <text x="105" y="128" className="bill-label">ICD-10:</text>
                    <text x="150" y="128" className="bill-value">J06.9 · M54.5</text>

                    <text x="105" y="144" className="bill-label">CPT:</text>
                    <text x="150" y="144" className="bill-value">99213 · 93000</text>
                  </g>

                  <g className="bill-clean-stamp">
                    <circle cx="258" cy="120" r="28" />
                    <text x="258" y="116" textAnchor="middle">CLEAN</text>
                    <text x="258" y="130" textAnchor="middle">CLAIM</text>
                  </g>

                  <path
                    className="bill-flow-line"
                    d="M66 204 C104 174 125 222 158 184 C185 152 210 177 236 142 C262 108 292 116 318 82"
                  />

                  <g className="bill-payers">
                    {[
                      ["Medicare", 72],
                      ["Medicaid", 150],
                      ["Aetna", 228],
                    ].map(([label, x], i) => (
                      <g className={`bill-payer bill-payer-${i + 1}`} key={label}>
                        <rect x={x} y="194" width="68" height="32" rx="10" />
                        <text x={x + 34} y="214" textAnchor="middle">
                          {label}
                        </text>
                      </g>
                    ))}
                  </g>

                  <g className="bill-reimburse">
                    <rect x="95" y="236" width="170" height="30" rx="15" />
                    <text x="180" y="256" textAnchor="middle">
                      14–21 Day Reimbursement
                    </text>
                  </g>
                  <g className="bill-dollar bill-dollar-one">
                    <circle cx="305" cy="70" r="18" />
                    <text x="305" y="77" textAnchor="middle">$</text>
                  </g>

                  <g className="bill-dollar bill-dollar-two">
                    <circle cx="55" cy="156" r="14" />
                    <text x="55" y="162" textAnchor="middle">$</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="center">
            <div className="sec-label">Specialties</div>
            <h2 className="sec-title">Medical Billing Across Every Specialty</h2>
            <div className="divider" />
          </div>

          <div className="cards">
            {specialties.map(([title, desc]) => (
              <div className="card" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-band">
        <div className="container">
          <h2>Outsource Your Medical Billing to the Experts</h2>
          <p>
            Stop chasing claims. Let our certified billers maximize your
            reimbursements so you can focus on patient care.
          </p>

          <button
            type="button"
            className="hbtn"
            onClick={() => goToPage("/contact-us")}
          >
            Get a Free Billing Assessment →
          </button>
        </div>
      </div>
    </div>
  );
}