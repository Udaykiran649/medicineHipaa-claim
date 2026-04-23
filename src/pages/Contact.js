import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    specialty: '',
    message: '',
  });

  // ✅ FIXED (removed TypeScript types)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ FIXED (removed FormEvent type)
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      specialty: '',
      message: '',
    });
  };

  return (
    <>
      <Header />
      <PageBanner
        title="Contact Revno RCM — Get Your Free RCM Consultation"
        subtitle="Ready to optimize your revenue cycle, reduce claim denials, and increase collections? Our team of medical billing and RCM specialists is here to help. If you're looking to contact medical billing company experts, reach out today for a no-obligation free RCM consultation and performance audit for your practice. Get reliable healthcare billing support tailored to your needs when you contact Revno RCM.
"
        currentPage="Contact"
      />
       <div className="contact-container">
      <div className="contact-wrapper">
        <h1 className="main-heading">
          Contact Revno RCM — Get Your Free RCM Consultation
        </h1>

        <p className="description">
          Ready to optimize your revenue cycle, reduce claim denials, and
          increase collections? Our team of medical billing and RCM specialists
          is here to help. If you're looking to contact medical billing company
          experts, reach out today for a no-obligation free RCM consultation and
          performance audit for your practice. Get reliable healthcare billing
          support tailored to your needs when you contact Revno RCM.
        </p>

        <h2 className="section-title">Why Contact Us Today?</h2>

        <ul className="list">
          <li>Get a free analysis of your current billing and denial rates</li>
          <li>Discover how much revenue your practice may be leaving uncollected</li>
          <li>Speak directly with a certified RCM specialist who knows your specialty</li>
          <li>Learn how quickly Revno RCM can onboard and improve your revenue cycle</li>
          <li>No long-term contracts — flexible engagement models to fit your needs</li>
        </ul>

        <h2 className="section-title">What Happens After You Contact Us?</h2>

        <p className="description">
          A dedicated Revno RCM consultant will reach out whenever you submit an
          inquiry within a business day to schedule a medical billing consultant.
          We will overview all the on-going billing workflow, review over pain
          points, and come up with personal recommendation - without any kind of
          obligation and fees.
        </p>

        <h2 className="section-title">Our Commitment to You</h2>

        <p className="description">
          We believe in gaining your trust with delivering knowledge,
          transparency, and results. Our optimum objective is being your lasting
          revenue cycle partner, and build a connection that starts with
          providing added value to business. Revno RCM provides honest, expert
          guidance and dependable healthcare billing support to every health-care
          providers who contact Revno RCM.
        </p>
      </div>
    </div>
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">

            <div className="contact-info">
              <h2>Let's Talk About Your Revenue</h2>
              <p>
                Whether you're looking for a complete billing solution or need help with specific
                challenges, our team is here to help.
              </p>

              <div className="contact-detail">
                <div className="contact-detail-icon">📍</div>
                <div>
                  <h4>Office Address</h4>
                  <p>123 Healthcare Ave, Suite 500<br />New York, NY 10001</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (800) 555-0199</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>info@hipaaclaims.com</p>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-detail-icon">🕐</div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              <h3>Request a Free Audit</h3>

              <form onSubmit={handleSubmit}>
                <div className="form-row">

                  <div className="form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                </div>

                <div className="form-row">

                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Practice</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                </div>

                <div className="form-group">
                  <label>Specialty</label>
                  <select
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                  >
                    <option value="">Select Specialty</option>
                    <option>Internal Medicine</option>
                    <option>Cardiology</option>
                    <option>Orthopedics</option>
                    <option>Dermatology</option>
                    <option>Family Practice</option>
                    <option>Pediatrics</option>
                    <option>Neurology</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit Request →
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;