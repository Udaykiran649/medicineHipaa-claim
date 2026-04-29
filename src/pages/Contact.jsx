import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const GOOGLE_SHEET_WEBHOOK_URL =
    "https://script.google.com/macros/s/AKfycbwG2wY3LRGXNoytvHELIcL2SvntHXeBMufHJjg2DGhiJusNLVMIcwQoCox6pQkuS5KA4g/exec";

  const [form, setForm] = useState({
    name: "",
    practice: "",
    email: "",
    phone: "",
    specialty: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handle = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!form.practice.trim()) {
      newErrors.practice = "Practice / organization name is required.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\-\s()]{8,20}$/.test(form.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.specialty) {
      newErrors.specialty = "Please select a medical specialty.";
    }

    if (!form.service) {
      newErrors.service = "Please select a service.";
    }

    if (form.message.trim() && form.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", form.name.trim());
      formData.append("practice", form.practice.trim());
      formData.append("email", form.email.trim());
      formData.append("phone", form.phone.trim());
      formData.append("specialty", form.specialty);
      formData.append("service", form.service);
      formData.append("message", form.message.trim());
      formData.append("page", "Contact Revno RCM");
      formData.append("submittedAt", new Date().toLocaleString());

      await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setSubmitted(true);
      setErrors({});

      setForm({
        name: "",
        practice: "",
        email: "",
        phone: "",
        specialty: "",
        service: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Revno RCM",
    url: "https://www.revnorcm.com/contact",
    description:
      "Contact Revno RCM for a free revenue cycle management consultation. Our medical billing and RCM experts are ready to help your practice increase collections and reduce denials.",
    mainEntity: {
      "@type": "Organization",
      name: "Revno RCM",
      url: "https://www.revnorcm.com/",
      email: "info@revnorcm.com",
    },
  };

  return (
    <div>
      <Helmet>
        <title>
          Contact Revno RCM | Free RCM & Medical Billing Consultation
        </title>

        <meta
          name="description"
          content="Contact Revno RCM for a free revenue cycle management consultation. Our medical billing and RCM experts are ready to help your practice increase collections and reduce denials."
        />

        <meta
          name="keywords"
          content="contact medical billing company, free RCM consultation, medical billing consultation, contact Revno RCM, healthcare billing support"
        />

        <meta name="robots" content="index, follow" />
        <meta httpEquiv="X-Robots-Tag" content="index, follow" />
        <link rel="canonical" href="https://www.revnorcm.com/contact" />

        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      {submitted && (
        <div className="toast">
          Thank you! Your consultation request has been submitted successfully.
        </div>
      )}

      <div className="page-hero contact-hero-clean">
        <div className="page-hero-inner">
          <div className="breadcrumb">
            <button type="button" onClick={() => goToPage("/")}>
              Home
            </button>{" "}
            › Contact Us
          </div>

          <h1>Contact Revno RCM — Free RCM Consultation</h1>

          <p>
            Ready to optimize your revenue cycle, reduce claim denials, and
            increase collections? Our specialists are here to help.
          </p>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="contact-grid">
            <div className="cform">
              <h3>Request Your Free RCM Consultation</h3>

              <form onSubmit={submit} noValidate>
                <div className="fg">
                  <label>Full Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handle}
                    type="text"
                    placeholder="Dr. Jane Smith"
                  />
                  {errors.name && <small className="form-error">{errors.name}</small>}
                </div>

                <div className="fg">
                  <label>Practice / Organization *</label>
                  <input
                    name="practice"
                    value={form.practice}
                    onChange={handle}
                    type="text"
                    placeholder="ABC Medical Group"
                  />
                  {errors.practice && (
                    <small className="form-error">{errors.practice}</small>
                  )}
                </div>

                <div className="fg">
                  <label>Email Address *</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handle}
                    type="email"
                    placeholder="you@yourpractice.com"
                  />
                  {errors.email && (
                    <small className="form-error">{errors.email}</small>
                  )}
                </div>

                <div className="fg">
                  <label>Phone Number *</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handle}
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                  />
                  {errors.phone && (
                    <small className="form-error">{errors.phone}</small>
                  )}
                </div>

                <div className="fg">
                  <label>Medical Specialty *</label>
                  <select
                    name="specialty"
                    value={form.specialty}
                    onChange={handle}
                  >
                    <option value="">Select Specialty...</option>
                    {[
                      "Family Medicine / Internal Medicine",
                      "Cardiology",
                      "Orthopedics",
                      "Behavioral Health / Psychiatry",
                      "Physical / Occupational Therapy",
                      "Emergency Medicine / Urgent Care",
                      "OB/GYN",
                      "Radiology",
                      "Dermatology",
                      "Neurology",
                      "Home Health / Hospice",
                      "Other",
                    ].map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.specialty && (
                    <small className="form-error">{errors.specialty}</small>
                  )}
                </div>

                <div className="fg">
                  <label>Service Interested In *</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handle}
                  >
                    <option value="">Select Service...</option>
                    {[
                      "Full Revenue Cycle Management",
                      "Medical Billing Services",
                      "Medical Coding Services",
                      "Denial Management",
                      "Provider Credentialing",
                      "HIPAA Compliance Consulting",
                      "All Services / Not Sure Yet",
                    ].map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <small className="form-error">{errors.service}</small>
                  )}
                </div>

                <div className="fg">
                  <label>Tell Us About Your Challenges</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    placeholder="Describe your current billing setup, challenges, or goals..."
                  />
                  {errors.message && (
                    <small className="form-error">{errors.message}</small>
                  )}
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading
                    ? "Submitting..."
                    : "Submit & Request Free Consultation"}
                </button>

                <p
                  style={{
                    fontSize: "12px",
                    color: "var(--gray)",
                    marginTop: "10px",
                    textAlign: "center",
                  }}
                >
                  No obligation · A consultant responds within 1 business day
                </p>
              </form>
            </div>

            <div className="cinfo">
              <h3>Why Contact Us Today?</h3>

              <p>
                Get a no-obligation free RCM consultation and performance audit
                from our certified specialists.
              </p>

              {[
                "Get a free analysis of your current billing and denial rates",
                "Discover how much revenue your practice may be leaving uncollected",
                "Speak directly with a certified RCM specialist who knows your specialty",
                "Learn how quickly Revno RCM can onboard and improve your revenue cycle",
                "No long-term contracts — flexible engagement models to fit your needs",
              ].map((item) => (
                <div className="why-item" key={item}>
                  {item}
                </div>
              ))}

              <div className="after-contact-box">
                <h4>What Happens After You Contact Us?</h4>

                <div className="after-steps">
                  {[
                    [
                      "01",
                      "Dedicated Consultant Assigned",
                      "A specialist will reach out within 1 business day to schedule your consultation.",
                    ],
                    [
                      "02",
                      "Free Billing Workflow Review",
                      "We review your current workflow, identify pain points, and create personalized recommendations at no cost.",
                    ],
                    [
                      "03",
                      "Our Commitment to You",
                      "Honest expert guidance, full transparency, and lasting partnership.",
                    ],
                  ].map(([num, title, desc]) => (
                    <div className="after-step" key={title}>
                      <div className="after-num">{num}</div>
                      <div>
                        <strong>{title}</strong>
                        <p>{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="info-box">
                <p>Prefer to Talk Directly?</p>
                <a href="mailto:info@revnorcm.com">info@revnorcm.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}