import React from "react";
import "./StudentServices.css";

const services = [
  { title: "Admission Counselling", icon: "🎓" },
  { title: "Eligibility Checks", icon: "📋" },
  { title: "Simple Application", icon: "📝" },
  { title: "Financial Guidance", icon: "💰" },
  { title: "100% Free Support", icon: "🤝" },
];

const StudentServices = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">
        OUR SERVICES FOR <span>STUDENTS</span>
      </h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StudentServices;
