// import { Link } from 'react-router-dom';
import React from "react";
import{ useState } from "react";
import '../styles/Services.css';
import img1 from "../assets/rcmservice.jpg";
import img2 from "../assets/physician-billingservice.jpg";
import img3 from "../assets/medical-credentialingservice.jpg";
import img4 from "../assets/hospital-billingservice.jpg";
import img5 from "../assets/revenue-transformationservice.jpg";
import img6 from "../assets/hipaaservice.jpg";

import icon1 from "../assets/microscopeicon1.png";
import icon2 from "../assets/doctoricon2.png";
import icon3 from "../assets/toothicons3.png";
import icon4 from "../assets/radiologyicon4.png";
import icon5 from "../assets/psychologyicon5.png";
// const services = [
//   {
//     icon: '💰',
//     title: 'Medical Billing',
//     description: 'Complete end-to-end medical billing services with accurate coding, timely submissions, and maximum reimbursement for every claim.',
//   },
//   {
//     icon: '📋',
//     title: 'Claims Processing',
//     description: 'Expert claims submission and follow-up to ensure fast processing, minimal rejections, and quicker payments from insurance payers.',
//   },
//   {
//     icon: '🔄',
//     title: 'Denial Management',
//     description: 'Proactive denial analysis and appeals management to recover lost revenue and reduce future denial rates by up to 95%.',
//   },
//   {
//     icon: '✅',
//     title: 'Credentialing',
//     description: 'Comprehensive provider enrollment and credentialing services ensuring smooth payer participation and uninterrupted revenue flow.',
//   },
//   {
//     icon: '📊',
//     title: 'AR Management',
//     description: 'Aggressive accounts receivable follow-up and aging analysis to reduce outstanding balances and improve cash flow.',
//   },
//   {
//     icon: '🏥',
//     title: 'Practice Management',
//     description: 'Streamlined front-office and back-office operations including scheduling, eligibility verification, and patient collections.',
//   },
// ];
const sliderData = [
  { icon: icon1, text: "Laboratory Billing" },
  { icon: icon2, text: "Physician Billing" },
  { icon: icon3, text: "Dental Billing" },
  { icon: icon4, text: "Radiology Billing" },
  { icon: icon5, text: "Mental Health Billing" },
];

 

const services = [
  {
    title: "Revenue Cycle Management (RCM)",
    desc: "Enhance your financial process with our Revenue Cycle Management solutions. We assist healthcare providers in simplifying billing, minimizing denials, and improving revenue flow.",
    img: img1,
  },
  {
    title: "Medical Billing Service & Claim Submission",
    desc: "Ensure accurate and timely reimbursements with our Medical Billing Services. We manage claim submissions, minimize denials, and enhance revenue collection for healthcare providers.",
    img: img2,
    highlight: true,
  },
  {
    title: " Provider Credentialing",
    desc: "Streamline provider enrollment and ensure compliance with our  Provider Credentialing services. We manage paperwork, verifications, and approvals, allowing you to focus on patient care.",
    img: img3,
  },
  {
    title: " Denial Management & Appeals",
    desc: "Boost hospital revenue with our streamlined Billing services. We focus on accurate claims, reducing denials, and ensuring quicker reimbursements for smooth operations.",
    img: img4,
  },
  {
    title: " Medical e Procedure (ICD-10, CPT & HCPCS)",
    desc: "Fuel significant financial growth with our Revenue Transformation services. We optimize billing, reduce revenue leakage, and enhance overall profitability for healthcare providers.",
    img: img5,
    highlight: true,
  },
  {
    title: " Insurance Verify and Prior Authorization",
    desc: "Ensure complete HIPAA compliance with our expert services. We help your healthcare organization meet all regulatory requirements to safeguard patient privacy and secure data.",
    img: img6,
  },
   {
    title: " Patient statement processing & collections",
    desc: "Ensure complete HIPAA compliance with our expert services. We help your healthcare organization meet all regulatory requirements to safeguard patient privacy and secure data.",
    img: img6,
  },
   {
    title: "HIPAA Compliance Consulting",
    desc: "Ensure complete HIPAA compliance with our expert services. We help your healthcare organization meet all regulatory requirements to safeguard patient privacy and secure data.",
    img: img6,
  }
];
const ServicesOverview = () => {
     const [start, setStart] = useState(0);

  const next = () => {
    if (start < sliderData.length - 3) setStart(start + 1);
  };

  const prev = () => {
    if (start > 0) setStart(start - 1);
  };
  return (
    // <section className="section services-section">
    //   <div className="container">
    //     <div className="section-header">
    //       <div className="section-label">What We Offer</div>
    //       <h2 className="section-title">Our RCM Services</h2>
    //       <p className="section-subtitle">
    //         Comprehensive revenue cycle management solutions designed to optimize
    //         every step of your billing process.
    //       </p>
    //     </div>
    //     <div className="services-grid">
    //       {services.map((service, index) => (
    //         <div className="service-card" key={index}>
    //           <div className="service-icon">{service.icon}</div>
    //           <h3>{service.title}</h3>
    //           <p>{service.description}</p>
    //           <Link to="/services" className="learn-more">Learn More →</Link>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <>
    <section className="services-section">
      
      <div className="services-header">
        <div className="section-label">What We Offer</div><br/>
        <div className="badge">
          <span>💙</span> Our Core Services
        </div>

        <h2>Our Revno RCM redefines a full range of healthcare revenue cycle services such as</h2>
      </div>

      <div className="services-grid">
        {services.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-img">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="card-body">
              <h3 className={item.highlight ? "highlight" : ""}>
                {item.title}
              </h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button> */}
    </section>
    {/* ===== SLIDER SECTION ===== */}
      <section className="slider-sectionSpec">
        <h2>Our Specialities</h2>
        <p className="subSpec">Expertise in 25+ Specialities</p>
        <div className="underline center"></div>

        <div className="slider-wrapperSpec">
          <button className="nav left-btnSpec" onClick={prev}>❮</button>

          <div className="sliderSpec">
            {sliderData.slice(start, start + 5).map((item, index) => (
              <div className="slide-cardSpec" key={index}>
                <img src={item.icon} alt="" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <button className="nav right-btnSpec" onClick={next}>❯</button>
        </div>
      </section>
      </>
  );
};

export default ServicesOverview;