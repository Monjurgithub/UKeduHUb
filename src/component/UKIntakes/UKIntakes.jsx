import React from "react";
import { Calendar, GraduationCap } from "lucide-react";

const intakes = [
  {
    title: "September Intake",
    tag: "Main Intake",
    window: "October – June",
    description:
      "The largest intake with the widest selection of courses, universities, and scholarship opportunities.",
    highlight: true,
  },
  {
    title: "January Intake",
    tag: "Secondary Intake",
    window: "July – November",
    description:
      "Perfect for students who missed September. Available mainly for master's and selected bachelor's programs.",
  },
  {
    title: "May Intake",
    tag: "Limited Intake",
    window: "November – March",
    description:
      "Offered by select universities for specific programs with limited course availability.",
  },
];

const UKIntakes = () => {
  return (
    <section className="relative w-full bg-linear-to-b from-slate-50 to-white py-24">

      {/* Decorative Blur */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-125 h-50
                      bg-blue-500/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <span className="h-1 w-24 rounded-full bg-linear-to-r from-blue-600 to-red-500" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900">
            UK <span className="text-blue-900">Intakes</span>{" "}
            <span className="text-red-600">& Deadlines</span>
          </h2>

          <p className="mt-5 text-gray-600 text-sm md:text-base leading-relaxed">
            UK universities offer multiple intakes throughout the year.
            Choosing the right intake increases your chances of admission,
            scholarships, and program availability.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {intakes.map((intake, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8
                          border transition-all duration-300
                          hover:-translate-y-2 hover:shadow-2xl
                          ${
                            intake.highlight
                              ? "border-blue-500 shadow-xl"
                              : "border-gray-200 shadow-lg"
                          }`}
            >
              {/* Tag */}
              <span
                className={`absolute -top-3 right-6 text-xs font-semibold
                            px-4 py-1 rounded-full
                            ${
                              intake.highlight
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-700"
                            }`}
              >
                {intake.tag}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                {intake.title}
              </h3>

              {/* Window */}
              <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                <Calendar className="w-4 h-4 text-red-500" />
                <span className="font-medium">{intake.window}</span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {intake.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-16">
          <button
            className="inline-flex items-center gap-2
                       bg-blue-900 hover:bg-blue-800 text-white
                       font-semibold px-10 py-3 rounded-lg
                       transition duration-300 shadow-lg"
          >
            Get Free Counselling
          </button>
        </div> */}

      </div>
    </section>
  );
};

export default UKIntakes;
