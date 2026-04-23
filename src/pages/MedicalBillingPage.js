import React from 'react';
import {
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Clock,
  Users,
  FileCheck,
  ArrowRight,
  Stethoscope,
  Heart,
  Brain,
  Bone,
  Baby,
  Activity,
  Eye,
  HandHeart,
  Microscope,
  Building2,
} from "lucide-react";

import "../pages/MedicalBillingPage.css";
import Header from '../components/Header';
import Footer from '../components/Footer';


const benefits = [
  {
    icon: TrendingUp,
    title: "Eliminate Internal Billing Costs",
    text: "Remove salaries, training, benefits, and turnover expenses tied to in-house billing staff.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Specialty Experts",
    text: "Access dedicated specialty medical billing teams with certified coders for every discipline.",
  },
  {
    icon: FileCheck,
    title: "Pre-Submission Claim Scrubbing",
    text: "Catch billing errors before submission to reduce denials and accelerate first-pass acceptance.",
  },
  {
    icon: Clock,
    title: "Paid in 14–21 Days",
    text: "Most claims are processed within two to three weeks so your cash flow stays predictable.",
  },
  {
    icon: ShieldCheck,
    title: "Always Compliant",
    text: "Real-time awareness of ICD-10, CPT updates, and payer policy changes — built into every claim.",
  },
  {
    icon: Users,
    title: "Scale On Demand",
    text: "Increase or decrease billing capacity at will, without the burden of hiring or layoffs.",
  },
];

const process = [
  { step: "01", title: "Charge Entry", text: "Accurate, timely capture of every billable service." },
  { step: "02", title: "Claim Scrubbing", text: "Pre-submission audit to catch coding and eligibility errors." },
  { step: "03", title: "Electronic Submission", text: "Clean claims sent directly to payers via secure clearinghouses." },
  { step: "04", title: "ERA Posting", text: "Fast, accurate posting of payments and adjustments." },
  { step: "05", title: "Denial Management", text: "Aggressive appeals and root-cause fixes on every denial." },
  { step: "06", title: "Patient Billing & A/R", text: "Patient statements and persistent follow-up on aging accounts." },
];

const specialties = [
  { icon: Stethoscope, name: "Internal Medicine & Family Practice" },
  { icon: Heart, name: "Cardiology & Interventional Cardiology" },
  { icon: Bone, name: "Orthopedics & Sports Medicine" },
  { icon: Brain, name: "Behavioral Health & Psychiatry" },
  { icon: Activity, name: "Physical & Occupational Therapy" },
  { icon: HandHeart, name: "Emergency Medicine & Urgent Care" },
  { icon: Baby, name: "Obstetrics & Gynecology" },
  { icon: Microscope, name: "Dermatology" },
  { icon: Brain, name: "Neurology & Neurosurgery" },
  { icon: Microscope, name: "Radiology & Imaging" },
  { icon: Building2, name: "Home Health & Hospice" },
  { icon: Eye, name: "Podiatry & Ophthalmology" },
];

const payerGroups = [
  {
    title: "Commercial Payers",
    items: ["Aetna", "Cigna", "UnitedHealthcare", "BCBS", "Humana"],
  },
  {
    title: "Government Programs",
    items: ["Medicare", "Medicaid", "Tricare", "VA"],
  },
  {
    title: "Managed Care",
    items: ["HMO Networks", "PPO Networks", "IPAs", "ACOs"],
  },
];
const MedicalBillingPage = () => {

  return (
  <div className="main-wrapper">
     <Header/>

     {/* HERO SECTION */}
      <section className="hero-sectionmed">
        <div className="hero-bg-overlaymed" aria-hidden="true" />
        <div className="container">
          <div className="hero-gridmed">
            <div className="hero-contentmed">
              <span className="badgemed">
                <ShieldCheck size={14} />
                HIPAA-Compliant Billing Partner
              </span>
              <h1 className="hero-titlemed">
                Professional <span className="gradient-textmed">Medical Billing Services</span> for Every Healthcare Specialty
              </h1>
              <p className="hero-descriptionmed">
                Medical billing is not just about submitting claims — it is a precision exercise that will greatly influence
                 whether and when your practice receives payment. Our medical billing services team of  specialists at Revno RCM
                  is trained to make the most out of your collections by giving them full attention throughout every step in the
                   billing process.

              </p>

              <div className="hero-actionsmed">
                <a href="#contact" className="btnmed btn-primarymed">
                  Request a Free Audit <ArrowRight size={16} />
                </a>
                <a href="#process" className="btnmed btn-outlinemed">
                  See Our Process
                </a>
              </div>

              <dl className="stats-listmed">
                {[
                  { k: "97%+", v: "Collection Rate" },
                  { k: "14–21", v: "Days to Payment" },
                  { k: "12+", v: "Specialties Served" },
                ].map((s) => (
                  <div key={s.v} className="stat-itemmed">
                    <dt className="stat-valuemed">{s.k}</dt>
                    <dd className="stat-labelmed">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="hero-visualmed">
              <div className="glow-blobmed" aria-hidden="true" />
              <div className="info-cardmed">
                <h3 className="card-titlemed">What you get with Revno RCM</h3>
                <ul className="check-listmed">
                  {[
                    "Dedicated certified billing specialist",
                    "Full revenue cycle transparency",
                    "Denial prevention + aggressive appeals",
                    "Real-time reporting dashboards",
                    "Faster, more predictable cash flow",
                  ].map((item) => (
                    <li key={item} className="check-itemmed">
                      <CheckCircle2 size={20} className="icon-accentmed" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="card-notemed">
                  <p>
                    Whether you're a solo physician or a multi-specialty group, our medical
                    billing solution is tailor-fit to your practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY OUTSOURCE */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Outsource Medical Billing to Revno RCM?</h2>
            <p className="section-subtitle">
              We replace the cost and risk of in-house billing with a proven, specialty-trained
              team that's accountable to your bottom line.
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((b) => (
              <div key={b.title} className="benefit-card">
                <div className="benefit-icon">
                  <b.icon size={24} />
                </div>
                <h3 className="benefit-title">{b.title}</h3>
                <p className="benefit-text">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* PROCESS SECTION */}
      <section id="process" className="process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Our Workflow</span>
            <h2 className="section-title">Our Medical Billing Process</h2>
            <p className="section-subtitle">
              A well-defined, proven workflow. Your money is always tracked, reported, and you
              know exactly which step it's on.
            </p>
          </div>

          <div className="process-grid">
            {process.map((p) => (
              <div key={p.step} className="process-card">
                <div className="step-number">{p.step}</div>
                <h3 className="card-heading">{p.title}</h3>
                <p className="card-text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALTIES SECTION */}
      <section className="specialties-sectionmed">
        <div className="container">
          <div className="section-headermed">
            <h2 className="section-titlemed">Specialties We Bill For</h2>
            <p className="section-subtitlemed">
              Certified expertise across the specialties that matter most.
            </p>
          </div>

          <div className="specialties-gridmed">
            {specialties.map((s) => (
              <div key={s.name} className="specialty-itemmed">
                <div className="specialty-icon-boxmed">
                  <s.icon size={20} />
                </div>
                <span className="specialty-namemed">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYERS SECTION */}
      <section className="payers-section">
        <div className="container">
          <div className="payers-layout">
            <div className="payers-text">
              <h2 className="section-title">Payers We Work With</h2>
              <p className="section-description">
                We're experienced billing specialists for all major commercial payers,
                government programs, and managed care organizations — and we know the unique
                billing rules, fee schedules, and documentation requirements for each.
              </p>
            </div>
            <div className="payers-grid">
              {payerGroups.map((g) => (
                <div key={g.title} className="payer-card">
                  <h3 className="payer-group-title">{g.title}</h3>
                  <ul className="payer-list">
                    {g.items.map((i) => (
                      <li key={i} className="payer-item">
                        <CheckCircle2 size={16} className="icon-accent" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" className="cta-section">
        <div className="cta-container">
          <div className="cta-bg-overlay" aria-hidden="true" />
          <div className="cta-content">
            <div className="cta-text">
              <h2 className="cta-title">
                Ready to get paid faster — with fewer denials?
              </h2>
              <p className="cta-description">
                Get a free, no-obligation revenue analysis. We'll review your current
                collection rate, denial trends, and A/R aging — and show you exactly where
                Revno RCM can recover lost revenue.
              </p>
            </div>
            <div className="cta-buttons">
              <a href="mailto:hello@revnorcm.com" className="btn btn-white">
                Request Free Audit
              </a>
              <a href="tel:+18885550199" className="btn btn-ghost">
                Call (888) 555-0199
              </a>
            </div>
          </div>
        </div>
      </section>

     <Footer/>
    </div>
  );
}
export default MedicalBillingPage;