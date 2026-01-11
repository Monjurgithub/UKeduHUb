import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-linear-to-b from-slate-50 to-white py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Your privacy matters to us. This policy explains how UkEduHub
            collects, uses, and protects your personal information.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What Information Do We Collect?
            </h2>
            <p>
              When you register on our website, fill out a form, or contact us,
              you may be asked to provide personal details such as your name,
              email address, phone number, or other relevant information to help
              us improve your experience.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              When Do We Collect Information?
            </h2>
            <p>
              We collect information from you when you voluntarily submit forms,
              register on our site, or communicate with us through email or other
              channels.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How Do We Use Your Information?
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to inquiries and provide student counselling</li>
              <li>To follow up after communication via email or phone</li>
              <li>To improve our website, services, and user experience</li>
              <li>To send important updates and relevant information</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How Do We Protect Your Information?
            </h2>
            <p>
              Your personal information is stored behind secured networks and is
              accessible only by authorized personnel. We implement appropriate
              technical and organizational security measures to safeguard your
              data. Sensitive information is protected using SSL (Secure Socket
              Layer) technology.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Cookies</h2>
            <p>
              UkEduHub does not use cookies for tracking purposes. You can choose
              to disable cookies through your browser settings; however, some
              site features may not function properly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Third-Party Disclosure
            </h2>
            <p>
              We do not sell, trade, or transfer your Personally Identifiable
              Information to outside parties. We also do not include or offer
              third-party products or services on our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Children’s Information (COPPA)
            </h2>
            <p>
              UkEduHub does not knowingly collect any personal information from
              children under the age of 13 and does not specifically market to
              children.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Fair Information Practices
            </h2>
            <p>
              In the event of a data breach, we will notify affected users via
              email or on-site notification within one business day, in
              accordance with applicable laws and regulations.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              CAN-SPAM Act & GDPR Compliance
            </h2>
            <p>
              We comply with the CAN-SPAM Act and GDPR regulations. You may
              unsubscribe from our emails at any time by contacting us, and we
              will promptly remove you from all communications.
            </p>
          </div>

          <div className="bg-slate-50 border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Contacting Us
            </h2>
            <p className="mb-2">
              If you have any questions regarding this privacy policy, you may
              contact us at:
            </p>
            <ul className="space-y-1 text-sm">
              <li><strong>Company:</strong> UkEduHub</li>
              <li><strong>Address:</strong> 5 Moor End, Manchester, United Kingdom</li>
              <li><strong>Email:</strong> ukeduh@gmail.com</li>
            </ul>
          </div>

          <p className="text-sm text-gray-500">
            Last updated: January 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
