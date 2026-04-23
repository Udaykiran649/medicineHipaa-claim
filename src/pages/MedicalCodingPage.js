import React from "react";
import {
  ShieldCheck,
  Stethoscope,
  FileCheck2,
  ClipboardList,
  Activity,
  Search,
  Award,
  TrendingUp,
  Clock,
  Lock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Mail,
  Phone,
} from "lucide-react";

import "../styles/MedicalCodingPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";



const capabilities = [
  {
    icon: FileCheck2,
    title: "ICD-10-CM Diagnosis Coding",
    body:
      "Accurate ICD-10 coding that reflects a complete clinical picture from provider documentation — establishing medical necessity, meeting specificity requirements, and supporting clean claims.",
  },
  {
    icon: ClipboardList,
    title: "CPT Procedure Coding",
    body:
      "Expert CPT coding that captures the complexity, site, and type of each procedure. We apply correct modifiers, honor bundling rules, and stay within payer guidelines.",
  },
  {
    icon: Activity,
    title: "HCPCS Level II Coding",
    body:
      "Precise HCPCS assignments for DME, drugs, supplies, and select outpatient services billed under Medicare and Medicaid — so government program reimbursements arrive on time.",
  },
  {
    icon: Stethoscope,
    title: "E&M (Evaluation & Management)",
    body:
      "One of the most audited areas in medical coding. Our coders apply the 2021 AMA E&M guidelines so office, hospital, and outpatient encounters are coded to match the work performed.",
  },
  {
    icon: Search,
    title: "Coding Audits & Compliance",
    body:
      "Prospective and retrospective audits that surface compliance patterns. Audit reports include actionable recommendations and provider documentation education.",
  },
  {
    icon: ShieldCheck,
    title: "Denial Prevention & Rework",
    body:
      "We identify root causes behind coding-related denials, rework affected claims, and feed learnings back into provider workflows to prevent repeat losses.",
  },
];

const metrics = [
  { value: "98%", label: "First-pass clean claim rate" },
  { value: "30+", label: "Specialties coded" },
  { value: "24h", label: "Average turnaround" },
  { value: "100%", label: "AAPC / AHIMA certified" },
];

const specialties = [
  "Primary Care",
  "General Surgery",
  "Radiology",
  "Pathology",
  "Behavioral Health",
  "Anesthesiology",
  "Oncology",
  "Cardiology",
  "Orthopedics",
  "OB-GYN",
  "Dermatology",
  "Gastroenterology",
  "Urology",
  "ENT",
  "Nephrology",
  "Pulmonology",
  "Endocrinology",
  "Rheumatology",
  "Neurology",
  "Ophthalmology",
  "Pediatrics",
  "Emergency Medicine",
  "Physical Therapy",
  "Chiropractic",
];

const process = [
  {
    step: "01",
    title: "Documentation Review",
    body: "Coders review provider notes, op reports, and ancillary documents for completeness before assigning codes.",
  },
  {
    step: "02",
    title: "Code Assignment",
    body: "ICD-10, CPT, HCPCS, and modifiers applied per AMA, CMS, and payer-specific guidelines.",
  },
  {
    step: "03",
    title: "Internal QA",
    body: "Dual-layer quality review catches specificity gaps and bundling issues before claims leave the door.",
  },
  {
    step: "04",
    title: "Feedback Loop",
    body: "Documentation insights routed back to providers — reducing queries and strengthening future encounters.",
  },
];

const differentiators = [
  { icon: Award, title: "AAPC & AHIMA Certified", body: "Every coder holds active certification and completes annual continuing education." },
  { icon: Lock, title: "HIPAA-Compliant Infrastructure", body: "SOC 2-aligned workflows, encrypted transfers, and access-controlled environments." },
  { icon: TrendingUp, title: "Revenue-First Mindset", body: "We optimize for clean-claim rate and net collections — not just code volume." },
  { icon: Clock, title: "Scalable Turnaround", body: "24-hour standard TAT with same-day options for high-volume or urgent encounters." },
];

function MedicalCodingPage() {
  return (
    <div className="page-containercod">
      <Header />

      {/* HERO */}
      <section className="hero-sectioncod">
        <div className="hero-bg-gridcod" aria-hidden="true" />
        <div className="hero-bg-circlecod" aria-hidden="true" />
        <div className="hero-contentcod">
          <div className="hero-textcod">
            <span className="hero-badgecod">
              <Sparkles className="hero-badge-iconcod" />
              Certified Medical Coding Services
            </span>
            <h1 className="hero-titlecod">
              ICD-10, CPT & HCPCS coding <span className="hero-title-highlightcod">done right</span> — the first time.
            </h1>
            <p className="hero-descriptioncod">
              One mis-assigned code is the difference between a clean claim, a delayed payment, and an audit. Revno RCM pairs AAPC- and AHIMA-certified coders with deep specialty expertise — so every encounter is coded accurately, compliantly, and profitably.
            </p>
            <div className="hero-buttonscod">
              <a href="#contact" className="btn-primarycod">
                Get a Free Coding Audit
                <ArrowRight className="btn-iconcod" />
              </a>
              <a href="#capabilities" className="btn-secondarycod">
                Explore Capabilities
              </a>
            </div>
            <div className="hero-featurescod">
              {["AAPC Certified", "AHIMA Credentialed", "HIPAA Compliant", "SOC 2 Aligned"].map((t) => (
                <div key={t} className="hero-feature-itemcod">
                  <CheckCircle2 className="hero-feature-iconcod" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="hero-statscod">
            <div className="stats-cardcod">
              <div className="stats-headercod">
                <div>
                  <p className="stats-labelcod">Live Claim Health</p>
                  <p className="stats-valuecod">98.4%</p>
                  <p className="stats-subcod">Clean-claim rate this month</p>
                </div>
                <div className="stats-iconcod">
                  <TrendingUp className="stats-icon-svgcod" />
                </div>
              </div>
              <div className="stats-barscod">
                {[
                  { label: "ICD-10 accuracy", value: 99 },
                  { label: "CPT accuracy", value: 98 },
                  { label: "Denial rate", value: 2, inverted: true },
                ].map((row) => (
                  <div key={row.label} className="stats-bar-itemcod">
                    <div className="stats-bar-labelcod">
                      <span>{row.label}</span>
                      <span className="stats-bar-valuecod">{row.value}%</span>
                    </div>
                    <div className="stats-bar-bgcod">
                      <div
                        className="stats-bar-fillcod"
                        style={{ width: `${row.inverted ? 100 - row.value * 10 : row.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="stats-footercod">
                <div className="stats-footer-itemcod">
                  <p className="stats-footer-valuecod">24h</p>
                  <p className="stats-footer-labelcod">TAT</p>
                </div>
                <div className="stats-footer-itemcod">
                  <p className="stats-footer-valuecod">30+</p>
                  <p className="stats-footer-labelcod">Specialties</p>
                </div>
                <div className="stats-footer-itemcod">
                  <p className="stats-footer-valuecod">0</p>
                  <p className="stats-footer-labelcod">Breaches</p>
                </div>
              </div>
            </div>
            <div className="stats-badgecod">
              <div className="stats-badge-iconcod">
                <ShieldCheck className="stats-badge-svgcod" />
              </div>
              <div>
                <p className="stats-badge-titlecod">HIPAA Compliant</p>
                <p className="stats-badge-subcod">End-to-end encrypted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="metrics-sectioncod">
        <div className="metrics-containercod">
          {metrics.map((m) => (
            <div key={m.label} className="metric-itemcod">
              <p className="metric-valuecod">{m.value}</p>
              <p className="metric-labelcod">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-sectioncod">
        <span className="section-labelcod">What we do</span>
        <h2 className="section-titlecod">
          Medical coding connects clinical documentation with reimbursement.
        </h2>
        <p className="section-descriptioncod">
          It's a critical part of the revenue cycle — and one small code can mean the difference between a denied claim, a delayed payment, or an audit. Our certified coders bring specialty-specific expertise and an exacting eye for detail to every encounter they touch.
        </p>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="capabilities-sectioncod">
        <div className="capabilities-containercod">
          <div className="capabilities-headercod">
            <span className="section-labelcod">Our Medical Coding Capabilities</span>
            <h2 className="section-titlecod">Full-spectrum medical coding</h2>
            <p className="section-descriptioncod">From diagnosis coding to compliance audits — one partner, every step of the coding lifecycle.</p>
          </div>
          <div className="capabilities-gridcod">
            {capabilities.map((c) => (
              <div key={c.title} className="capability-cardcod">
                <div className="capability-iconcod">
                  <c.icon className="capability-icon-svgcod" />
                </div>
                <h3 className="capability-titlecod">{c.title}</h3>
                <p className="capability-descriptioncod">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-sectioncod">
        <div className="process-containercod">
          <div className="process-textcod">
            <span className="section-labelcod">Our Process</span>
            <h2 className="section-titlecod">A quality-first coding workflow</h2>
            <p className="section-descriptioncod">
              Every encounter moves through a documented four-stage pipeline built for accuracy, compliance, and speed — with a feedback loop that continuously improves provider documentation.
            </p>
            <a href="#contact" className="btn-primarycod">
              Start with a free audit
              <ArrowRight className="btn-iconcod" />
            </a>
          </div>
          <div className="process-gridcod">
            {process.map((p) => (
              <div key={p.step} className="process-cardcod">
                <p className="process-stepcod">{p.step}</p>
                <h3 className="process-titlecod">{p.title}</h3>
                <p className="process-descriptioncod">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="specialties-sectioncod">
        <div className="specialties-containercod">
          <div className="specialties-headercod">
            <span className="section-labelcod">Specialties Coded</span>
            <h2 className="section-titlecod">30+ specialties. Matched by expertise.</h2>
            <p className="section-descriptioncod">
              Certified coders are assigned to accounts in their specialty area — because surgical bundling rules and behavioral health time-based codes aren't solved with the same playbook.
            </p>
          </div>
          <div className="specialties-listcod">
            {specialties.map((s) => (
              <span key={s} className="specialty-tagcod">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY REVNO */}
      <section className="why-sectioncod">
        <div className="why-containercod">
          <div className="why-headercod">
            <span className="section-labelcod">Why Revno RCM</span>
            <h2 className="section-titlecod">Built for compliance. Optimized for revenue.</h2>
          </div>
          <div className="why-gridcod">
            {differentiators.map((d) => (
              <div key={d.title} className="why-cardcod">
                <div className="why-iconcod">
                  <d.icon className="why-icon-svgcod" />
                </div>
                <h3 className="why-titlecod">{d.title}</h3>
                <p className="why-descriptioncod">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta-sectioncod">
        <div className="cta-bg-gridcod" aria-hidden="true" />
        <div className="cta-contentcod">
          <h2 className="cta-titlecod">Ready to stop leaving revenue in denials?</h2>
          <p className="cta-descriptioncod">
            Get a free coding audit. We'll review a sample of your recent encounters and show you exactly where accuracy, compliance, and reimbursement can improve.
          </p>
          <div className="cta-buttonscod">
            <a href="mailto:hello@revnorcm.com" className="btn-primarycod">
              <Mail className="btn-iconcod" />
              hello@revnorcm.com
            </a>
            <a href="tel:+18005550199" className="btn-secondarycod">
              <Phone className="btn-iconcod" />
              +1 (800) 555-0199
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <div className="footer-logo-icon">
              <Stethoscope className="footer-logo-svg" />
            </div>
            <span className="footer-logo-text">Revno RCM</span>
          </div>
          <p className="footer-text">
            © {new Date().getFullYear()} Revno RCM. All rights reserved. HIPAA-compliant medical billing & coding services.
          </p>
          <Link to="/" className="footer-link">
            ← Back to home
          </Link>
        </div>
      </footer> */}
      <Footer/>
    </div>
  );
}

export default MedicalCodingPage;