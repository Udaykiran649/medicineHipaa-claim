import '../styles/WhyChooseUs.css';
import React, { useEffect, useState } from "react";
import { CheckCircle2, Shield } from "lucide-react";
import doctorImg from "../assets//doctor-about.jpg";
import img1 from "../assets/reporting.webp";
import img2 from "../assets/credentialing.webp";
import img3 from "../assets/benefits.webp";
import { Link } from 'react-router-dom'
// import icon1 from "../assets/icon1rep.webp";
// import icon2 from "../assets/icon2cre.webp";
// import icon3 from "../assets/icon3benf.webp";
// const reasons = [
//   { icon: '🛡️', title: 'HIPAA Compliant', description: 'Fully compliant with HIPAA regulations ensuring maximum security and privacy of patient data at all times.' },
//   { icon: '📈', title: 'Revenue Maximization', description: 'Our proven strategies increase collections by up to 30% while reducing claim denials and improving cash flow.' },
//   { icon: '⚡', title: 'Fast Turnaround', description: 'Claims submitted within 24 hours with real-time tracking and proactive follow-up for faster reimbursements.' },
//   { icon: '🎯', title: '98% Clean Claim Rate', description: 'Industry-leading first-pass acceptance rate through advanced claim scrubbing and quality checks.' },
//   { icon: '🌍', title: 'All Specialties', description: 'Experienced with 40+ medical specialties including cardiology, orthopedics, dermatology, and more.' },
//   { icon: '🤝', title: 'Dedicated Support', description: 'A dedicated account manager and support team available to address your needs with 24/7 assistance.' },
// ];
const reasons = [
    "Certified medical billers and coders who have 10+ years of experience within their specialty",
    " Complete RCM services: from patient registration through final payment reconciliation",
    "Fully encrypted, secure data processing and HIPAA- compliant medical billing processes",
    "First-pass claim acceptance rate of up to 97%",
    "Account managers who specialize in your niche",
    "Real-time dashboards and KPI tracking for transparent reporting",
    "Fully integrated with all leading EHR and practice management systems",
];
const data = [
  {
    title: "Reporting",
    desc: "Without clear reports, running your practice can feel like driving in the dark.",
    img: img1,
   
  },
  {
    title: "Credentialing & Enrollment",
    desc: "Credentialing is one of the biggest bottlenecks in healthcare and one of the...",
    img: img2,
   
  },
  {
    title: "Eligibility & Benefits Verification",
    desc: "Eligibility issues are one of the top reasons claims get denied.",
    img: img3,
   
  },
  
];
const WhyChooseUs = () => {
      const [index, setIndex] = useState(0);

  // ✅ Auto slide every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.length);
    }, 4000);

    return  () => clearInterval(interval) ;
  }, []);
    return (
        
        // <section className="section why-section">
        //   <div className="container">
        //     <div className="section-header">
        //       <div className="section-label">Why HIPAA Claims</div>
        //       <h2 className="section-title">Why Choose Us</h2>
        //       <p className="section-subtitle">
        //         We combine industry expertise with cutting-edge technology to deliver results that matter.
        //       </p>
        //     </div>
        //     <div className="why-grid">
        //       {reasons.map((reason, index) => (
        //         <div className="why-card" key={index}>
        //           <div className="why-card-icon">{reason.icon}</div>
        //           <h3>{reason.title}</h3>
        //           <p>{reason.description}</p>
        //         </div>
        //       ))}
        //     </div>
        //   </div>
        // </section>
        <>
        <section className="why-section">
            <div className="containers">
                     <div className="section-header">
                      <div className="section-label">Why HIPAA Claims</div>
          <h2 className="section-title">Why Healthcare Providers Choose Revno RCM</h2>
         <p className="section-subtitle">
           We combine industry expertise with cutting-edge technology to deliver results that matter.
           </p>
        </div>
                <div className="why-grid">

                    {/* Image side */}
                    <div className="image-wrapper">
                        <img src={doctorImg} alt="Healthcare professional" />

                        <div className="floating-badge">
                            <Shield size={28} />
                            <p className="badge-title">HIPAA</p>
                            <p className="badge-text">Fully Compliant</p>
                        </div>
                    </div>

                    {/* Content side */}
                    <div className="content">
                        <span className="tag">Why Choose Us</span>

                        <h2>
                           Trusted Revenue Cycle Management & Medical Billing Services
                        </h2>

                        <p className="desc">
                        Revno RCM enables healthcare providers across the United States to recover more revenue, reduce claim 
                        denials and streamline operations with expert medical billing service.  Whether you are a solo practice,
                         multi-specialty group, or hospital system our end-to-end revenue cycle management and medical billing 
                         services  are designed to optimize your healthcare revenue cycle financial performance.                        </p>

                        <div className="reasons">
                            {reasons.map((reason, index) => (
                                <div key={index} className="reason-item">
                                    <CheckCircle2 className="check-icon" />
                                    <span>{reason}</span>
                                </div>
                            ))}
                        </div>

                        <div className="highlight">
                            <Shield size={18} />
                            <span>Fully compliant with HIPAA standards</span>
                        </div>

                    </div>

                </div>

            </div>
        </section>
        <section className="revenue-sectionwhy">

      <h2>Revenue-Boosting Services Built for Your Practice</h2>

      <p className="subtitlewhy">
        We offer an all-in-one approach to medical billing that’s customized to fit your unique workflow and boost your revenue.
        Our expert team handles every step of your billing cycle with precision and care, so you can focus on patient care without the financial headaches.
      </p>

      <div className="underlinewhy"></div>

      <div className="slider-containerwhy">
        <div
          className="slider-trackwhy"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {data.map((item, i) => (
            <div className="cardwhy" >
              <div className="image-wrapperwhy">
                <img src={item.img} alt={item.title} />
                {/* <div className="iconwhy">
                  <img src={item.icon} alt="" />
                </div> */}
              </div>

              <div className="card-bodywhy">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

               <Link to="/services" className="read-morewhy">Learn More →</Link>
              </div>
            </div>
          ))}
        </div> 
      </div>

      {/* DOTS */}
      <div className="dots">
        {data.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </section>
        </>
    );
};

export default WhyChooseUs;