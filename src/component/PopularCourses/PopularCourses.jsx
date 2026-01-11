import React from "react";

const PopularCourses = () => {
  const courses = [
    { title: "Law", icon: "⚖️" },
    { title: "Business", icon: "💼" },
    { title: "Engineering", icon: "⚙️" },
    { title: "MBA", icon: "🎓" },
    { title: "Accounting", icon: "📊" },
  ];

  return (
    <>
      <section className="courses-section">
        <h2 className="courses-heading">
          Popular Courses <span>in the UK</span>
        </h2>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <div className="course-card" key={index}>
              <div className="course-icon">{course.icon}</div>
              <h3>{course.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Internal CSS */}
      <style>{`
        .courses-section {
          padding: 80px 20px;
          background: linear-gradient(135deg, #f8fafc, #eef2ff);
          text-align: center;
        }

        .courses-heading {
          font-size: 38px;
          font-weight: 700;
          margin-bottom: 60px;
          color: #0f172a;
        }

        .courses-heading span {
          color: #6366f1;
        }

        .courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: auto;
        }

        .course-card {
          position: relative;
          padding: 50px 20px 35px;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          transition: all 0.4s ease;
          cursor: pointer;
          overflow: hidden;
        }

        .course-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #6366f1, #ec4899);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }

        .course-card:hover::before {
          opacity: 1;
        }

        .course-card:hover {
          transform: translateY(-14px) scale(1.05);
          box-shadow: 0 35px 80px rgba(99, 102, 241, 0.4);
        }

        .course-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: #eef2ff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 34px;
          margin: 0 auto 18px;
          position: relative;
          z-index: 1;
          transition: all 0.4s ease;
        }

        .course-card:hover .course-icon {
          background: rgba(255, 255, 255, 0.25);
          transform: rotate(10deg) scale(1.15);
        }

        .course-card h3 {
          font-size: 20px;
          font-weight: 600;
          color: #0f172a;
          position: relative;
          z-index: 1;
          transition: color 0.4s ease;
        }

        .course-card:hover h3 {
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .courses-heading {
            font-size: 28px;
          }
        }

        @media (max-width: 480px) {
          .course-icon {
            width: 60px;
            height: 60px;
            font-size: 28px;
          }

          .course-card h3 {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
};

export default PopularCourses;
