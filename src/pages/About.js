import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import aboutTeam from '../assets/about-team.jpg';
import '../styles/About.css';

const values = [
  { icon: '✓', text: 'Integrity & Transparency' },
  { icon: '✓', text: 'HIPAA Compliance First' },
  { icon: '✓', text: 'Client-Centric Approach' },
  { icon: '✓', text: 'Continuous Innovation' },
  { icon: '✓', text: 'Accuracy & Precision' },
  { icon: '✓', text: 'Accountability' },
];

const About = () => {
  return (
    <>
      <Header />
      <PageBanner
        title="About Revno RCM — Your Revenue Cycle Management Partner"
        subtitle="Revno RCM, a medical billing company and trusted HIPAA compliant billing company was born out of our dedicated mission of getting healthcare providers fully in control of their revenue cycle without overplaying on time availability, staff resources, or compliance. If you’re looking to learn more about Revno RCM We know the stress physicians, practice managers, and healthcare administrators experience each day  high stakes payer regulations; ever-changing core back office coding rules; claims denials; getting paid for every encounter."
        currentPage="About Us"
      />

      <section className="section">
        <div className="container">
          <div className="about-intro">
            <div className="about-intro-content">
              <h2>About Revno RCM — Your Revenue Cycle Management Partner</h2>
              <p>
              Revno RCM, a medical billing company and trusted HIPAA compliant billing company was born out of our dedicated
               mission of getting healthcare providers fully in control of their revenue cycle without overplaying on time 
               availability, staff resources, or compliance.
              </p>
              <p>
                If you’re looking to learn more about Revno RCM We know the stress physicians, practice managers, and healthcare
                 administrators experience each day  high stakes payer regulations; ever-changing core back office coding rules;
                  claims denials; getting paid for every encounter
              </p>
              <p>
                Revno RCM company was specifically developed to address the aforementioned issues. We are a team of healthcare
                 billing experts we are not vendors; our certified medical billing experts, coders, and compliance experts work 
                 as an extension of your practice.
              </p>
            </div>
            <div className="about-intro-image">
              <img src={aboutTeam} alt="HIPAA Claims team" loading="lazy" width={1280} height={720} />
            </div>
          </div>
        </div>
      </section>

      <section className="section mission-vision">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Our Foundation</div>
            <h2 className="section-title">Mission, Vision & Values</h2>
          </div>
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-card-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                We strive to provide a transparent, data driven and results-oriented revenue cycle management service that 
                preserves resources so healthcare providers can focus on patient care while we capture every dollar through 
                for their proud work.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-card-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To be the most trusted name in medical billing and RCM, recognized for innovation,
                integrity, and consistently delivering measurable results for healthcare providers
                of all sizes.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-card-icon">💎</div>
              <h3>Our Values</h3>
              <p>
                Built on a foundation of compliance, accuracy, and client-first service, our core
                values drive every interaction and decision we make.
              </p>
            </div>
          </div>
        </div>

            
      </section>
              <div className="container">
                      <div className="about-intro-content">
              <h2 >Our Certifications & Credentials</h2>
              <p>
              Our billing and coding team holds certifications in the top industry standards from leading organizations such as
               AAPC (CPC, CRC, CPMA) and AHIMA (CCS, RHIT). And with each team member receiving regular training on ICD-10 
               updates, CPT revisions, and RCMS policy changes as well as payer-specific billing guidelines, our healthcare 
               billing experts are coded appropriately and in compliance.
              </p>
             </div>
                    <div className="about-intro-content">
              <h2 >Our Commitment to HIPAA Compliance</h2>
              <p>
              Patient data security is non-negotiable. Revno RCM is 100% HIPAA-compliant billing company, secure encrypted data
               transmission, role-based access controls and continuous risk assessments. We document and sign Business Associate
                Agreements (BAA) with all our clients, and make sure our technology and operational workflows comply with or 
                exceed HIPAA Privacy and Security Rule requirements.
              </p>
             </div>
                    <div className="about-intro-content">
              <h2 >Technology & Integrations</h2>
              <p>
              Our Synchrony integrations connect seamlessly with Epic, Athenahealth, eClinicalWorks, Kareo, DrChrono, Nexgen and
               more of the leading EHR and practice management systems. We require little set up time so there is no impact on 
               your existing workflow.
              </p>
             </div>
            </div>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-label">What Drives Us</div>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="values-list">
            {values.map((v, i) => (
              <div className="value-item" key={i}>
                <span className="icon">{v.icon}</span>
                <span>{v.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
};

export default About;