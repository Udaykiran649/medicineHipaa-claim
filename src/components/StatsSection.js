import '../styles/Stats.css';
import doc1 from "../assets/smiling-physician.webp";
import doc2 from "../assets/male-doctor.webp";
const stats = [
  { number: '500+', label: 'Healthcare Providers' },
  { number: '98%', label: 'Clean Claim Rate' },
  { number: '$50M+', label: 'Revenue Recovered' },
  { number: '15+', label: 'Years Experience' },
];

const StatsSection = () => {
  return (
    <>
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* ===== BLUE SECTION ===== */}
      <section className="specialty-section">
        <div className="containersep">

          <div className="left">
            <img src={doc1} alt="doctor" />
            <img src={doc2} alt="doctor" />
          </div>

          <div className="right">
            <p className="tag">Industries & Specialties We Serve</p>
            <div className="underline"></div>

            <h2>Expertise Across 25+ Specialties</h2>

            <p className="desc">
              With a focus on delivering advanced RCM services and medical billing services for diverse specialties including but
               not limited to family medicine, internal medicine, cardiology, orthopedics, behavioral health, physical therapy,
                urgent care, home health and more. Not only do our expert coders individually submit your claims, but we also 
                have specialist coding teams who understand the unique coding requirements, payer rules and compliance intricacies
                 for each specialty.
            </p>

            <ul>
              <li><span>✔</span> <b>Urgent Care :</b> We get your urgent care claims processed swiftly. That means you get paid faster and avoid frustrating delays.</li>
              <li><span>✔</span> <b>Cardiology :</b> From intricate procedures to routine visits, we make sure your cardiology claims are spot-on and optimized for the best possible reimbursement.</li>
              <li><span>✔</span> <b>Podiatry :</b> Focus entirely on your patients' foot care. We'll take care of the precise coding and billing, keeping your revenue cycle strong and steady.</li>
              <li><span>✔</span> <b>Gastroenterology :</b> We know GI claims can be complex. Our goal is to help you receive timely payments with far fewer claim headaches.</li>
              <li><span>✔</span> <b>Endocrinology :</b> Our team handles all the billing specifics, so you can concentrate fully on patient care without a single worry about claim submissions.</li>
            </ul>
          </div>

        </div>
      </section>
      </>
  );
};

export default StatsSection;