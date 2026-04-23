import { Link } from "react-router-dom";
import {
  ShieldCheck,
  TrendingDown,
  FileSearch,
  Gavel,
  Scale,
  BarChart3,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  ClipboardList,
  Calendar,
  Users,
  FileBarChart,
} from "lucide-react";

import denialHero from "../assets/denial-hero.jpg";
import "../styles/DenialManagement.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const preventionItems = [
  {
    icon: ShieldCheck,
    title: "4,000+ Payer-Specific Edits",
    text: "Every claim is scrubbed against thousands of payer-specific edits before submission to catch issues early.",
  },
  {
    icon: CheckCircle2,
    title: "Real-Time Eligibility Verification",
    text: "Insurance eligibility is verified in real time at every patient encounter to prevent eligibility-based denials.",
  },
  {
    icon: FileSearch,
    title: "Precision Coding Verification",
    text: "Specialist coders verify medical necessity and coding accuracy to avert clinical and coding-related denials.",
  },
  {
    icon: ClipboardList,
    title: "Prior Authorization Tracking",
    text: "Active prior authorization checks eliminate denials caused by missing or expired authorizations.",
  },
  {
    icon: AlertTriangle,
    title: "Documentation Gap Alerts",
    text: "When clinical notes are insufficient, providers receive instant alerts so claims aren't denied for missing detail.",
  },
];

const recoverySteps = [
  {
    icon: BarChart3,
    title: "Denial Categorization & Root Cause Analysis",
    text: "Every denial — not just the ones we work — is logged, categorized (coding error, eligibility, authorization, duplicate claim, medical necessity, etc.), and traced back to root cause. Data drives both immediate rework and long-term process improvements.",
  },
  {
    icon: Calendar,
    title: "Timely Appeals Submission",
    text: "We track every payer's appeal deadline and submit well-documented, clinically supported appeals within the required time frames. Our appeals team knows payer-specific processes and is focused on maximizing overturn rates.",
  },
  {
    icon: Users,
    title: "Payer Escalation & Provider Relations",
    text: "When systemic denial issues appear with specific payers, we escalate through provider relations channels and advocate on your behalf — resolving payer-side errors that would otherwise become permanent write-offs.",
  },
  {
    icon: FileBarChart,
    title: "Denial Management Reporting",
    text: "You receive monthly denial reports broken down by payer, reason code, successful appeal rates, and recovered revenue — giving you full visibility into the financial impact of our work.",
  },
];

const stats = [
  { value: "5–10%", label: "Average denial rate at small practices" },
  { value: "65%", label: "Of denied claims are never reworked" },
  { value: "$25–30", label: "Average cost to rework a single claim" },
  { value: "98%", label: "Clean claim rate with our scrubbing" },
];

const DenialManagement = () => {
  return (
  
<>
<Header/>
      {/* Hero */}
      <section className="denial-hero">
        <div className="denial-hero-background" />
        <div className="denial-container denial-hero-grid">
          <div className="denial-hero-copy">
            <span className="denial-hero-pill">
              <Gavel className="denial-icon-sm" /> Denial Management & Appeals
            </span>
            <h1 className="denial-hero-title">
              Denial Management & Claims Appeals Services <span className="denial-hero-highlight">Appeals Services.</span>
            </h1>
            <p className="denial-hero-description">
              One of the single largest sources of revenue leakage in healthcare is medical claim denials. Industry data cites 
              that the average denial rate for small practices of  healthcare can be around 5-10% and up to 65% of denied claims
               never get reworked  which amounts to writing off money. Here at Revno RCM, our denial management services take a
                two-fold approach to  insurance denial management  aggressive medical billing denial prevention on the front end
                 and relentless recovery on the back end to reduce claim denial rate.

            </p>
            <div className="denial-hero-actions">
              <Link to="/contact" className="btn btn-primary denial-button-link">
                Get a Free Denial Audit <ArrowRight className="denial-icon-sm" />
              </Link>
              <a href="#prevention" className="btn btn-outline denial-button-link">See How It Works</a>
            </div>
            <div className="denial-hero-trustline">
              <div className="denial-hero-trust-item"><CheckCircle2 className="denial-icon-sm" /> HIPAA Compliant</div>
              <div className="denial-hero-trust-item"><CheckCircle2 className="denial-icon-sm" /> 24-hr Appeal Turnaround</div>
              <div className="denial-hero-trust-item"><CheckCircle2 className="denial-icon-sm" /> All Specialties</div>
            </div>
          </div>

          <div className="denial-hero-media">
            <div className="denial-hero-glow" />
            <img
              src={denialHero}
              alt="Denial management specialists reviewing insurance claims"
              width={1400}
              height={1000}
              className="denial-hero-image"
            />
            <div className="denial-hero-stat-card">
              <div className="denial-hero-stat-inner">
                <div className="denial-hero-stat-badge">
                  <TrendingDown className="denial-icon-sm" />
                </div>
                <div>
                  <div className="denial-hero-stat-value">−42%</div>
                  <div className="denial-hero-stat-label">Avg. denial rate reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="denial-section">
        <div className="denial-container denial-intro-section">
          <span className="denial-eyebrow"><Scale className="denial-icon-sm" /> The Problem</span>
          <h2>Denial Management & Claims Appeals Services</h2>
          <p className="denial-intro-copy">
            One of the single largest sources of revenue leakage in healthcare is medical claim denials.
            Industry data shows the average denial rate for small healthcare practices is around
            <strong className="denial-highlight-text"> 5–10%</strong>, and up to
            <strong className="denial-highlight-text"> 65%</strong> of denied claims never get reworked — money written
            off entirely. At Revno RCM, our denial management services take a two-fold approach:
            aggressive medical billing denial prevention on the front end and relentless recovery on the back
            end to reduce your claim denial rate.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="denial-stats-section">
        <div className="denial-container">
          <div className="denial-stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="denial-stat-card">
                <div className="denial-stat-value">{s.value}</div>
                <p className="denial-stat-label">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real cost callout */}
      <section className="denial-section">
        <div className="denial-container">
          <div className="denial-callout-card">
            <div className="denial-callout-grid">
              <div className="denial-callout-heading">
                <div className="denial-callout-icon">
                  <AlertTriangle className="denial-icon-lg" />
                </div>
                <h3>The Real Cost of Claim Denials</h3>
              </div>
              <div>
                <p className="denial-callout-copy">
                  It costs an average of <strong className="denial-highlight-text">$25–$30</strong> to rework a single
                  denied claim. For a practice filing hundreds of claims each month, unmanaged denials can
                  cost <strong className="denial-highlight-text">tens of thousands of dollars</strong> in lost monthly
                  revenue. Our denial management service gives you the ability to keep every dollar safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prevention */}
      <section id="prevention" className="denial-prevention-section">
        <div className="denial-container">
          <div className="denial-section-header">
            <span className="denial-eyebrow"><ShieldCheck className="denial-icon-sm" /> Front-End Defense</span>
            <h2>Our Denial Prevention Strategy</h2>
            <p className="denial-section-copy">
              The cheapest denial is the one that never happens. Here's how we stop them before submission.
            </p>
          </div>

          <div className="denial-prevention-grid">
            {preventionItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="denial-prevention-card">
                  <div className="denial-prevention-icon-box">
                    <Icon className="denial-icon-sm" />
                  </div>
                  <h3>{item.title}</h3>
                  <p className="denial-prevention-text">{item.text}</p>
                  <span className="denial-card-index">0{i + 1}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recovery process */}
      <section className="denial-section">
        <div className="denial-container">
          <div className="denial-section-header">
            <span className="denial-eyebrow"><Gavel className="denial-icon-sm" /> Back-End Recovery</span>
            <h2>Our Denial Recovery Process</h2>
            <p className="denial-section-copy">
              When denials do happen, our four-step process gets your money back — and prevents the next one.
            </p>
          </div>

          <div className="denial-recovery-grid">
            {recoverySteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="denial-recovery-card">
                  <div className="denial-recovery-card-header">
                    <div className="denial-recovery-badge">
                      <Icon className="denial-icon-sm" />
                    </div>
                    <div>
                      <div className="denial-step-label">Step 0{i + 1}</div>
                      <h3>{step.title}</h3>
                    </div>
                  </div>
                  <p className="denial-recovery-copy">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="denial-section">
        <div className="denial-container">
          <div className="denial-cta-card">
            <div className="denial-cta-overlay" />
            <div className="denial-cta-content">
              <h2>Ready to recover the revenue you've already earned?</h2>
              <p className="denial-cta-copy">
                Get a free denial audit. We'll analyze 90 days of your denied claims and show you exactly
                how much revenue is recoverable.
              </p>
              <div className="denial-cta-actions">
                <Link to="/contact" className="btn btn-primary denial-button-link">
                  Schedule My Free Audit <ArrowRight className="denial-icon-sm" />
                </Link>
                <Link to="/services" className="btn btn-outline denial-button-link">Explore All Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
   </>
  );
};

export default DenialManagement;