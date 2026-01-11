import React from "react";
import hero from "./../../../public/s1.jpg"; // from public folder
import Counter from "./Counter";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src={hero}
        alt="UK Education"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 min-h-screen flex items-center">

        <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16
                        flex justify-center lg:justify-start">

          {/* Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl
                          p-6 md:p-8 lg:p-10 max-w-xl w-full
                          text-center lg:text-left">

            <p className="text-xs md:text-sm font-semibold text-gray-500 mb-3">
              100% Free Counselling & Application Processing
            </p>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
              Helping Students Secure{" "}
              <span className="text-red-600">Top UK Universities</span>
            </h1>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <div>
                <p className="text-red-600 font-extrabold text-xl md:text-2xl">
                  <Counter end={20000} />
                </p>
                <p className="text-sm text-gray-600">Students Guided</p>
              </div>

              <div>
                <p className="text-red-600 font-extrabold text-xl md:text-2xl">
                  <Counter end={35} />
                </p>
                <p className="text-sm text-gray-600">Awards</p>
              </div>

              <div>
                <p className="text-red-600 font-extrabold text-xl md:text-2xl">
                  <Counter end={140} />
                </p>
                <p className="text-sm text-gray-600">Universities</p>
              </div>
            </div>

            {/* CTA */}
            {/* <button className="mt-10 bg-blue-900 hover:bg-blue-800 text-white
                               font-semibold px-8 py-3 rounded-lg transition
                               duration-300 shadow-md">
              Start Your Application
            </button> */}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
