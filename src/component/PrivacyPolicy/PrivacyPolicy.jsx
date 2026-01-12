import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-slate-950 text-slate-300 min-h-screen">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 -top-32 h-56 bg-linear-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-slate-400 text-sm">
            Last updated: 9 September 2025
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 pb-24 space-y-12">
        <PolicyBlock title="Introduction">
          This Privacy Policy explains how <strong>UK Educational Hub (UKEduHub)</strong>
          collects, uses, and protects your personal data when you use our website
          <strong> www.ukeducationalhub.com</strong>. We comply with the UK GDPR,
          Data Protection Act 2018, and the Data (Use and Access) Act 2025.
        </PolicyBlock>

        <PolicyBlock title="Who We Are">
          <p><strong>UK Educational Hub (UKEduHub)</strong></p>
          <p>5 Moor End, Manchester, United Kingdom</p>
          <p>Email: ukeduh@gmail.com</p>
          <p>Website: www.ukeducationalhub.com</p>
        </PolicyBlock>

        <PolicyBlock title="What Data We Collect">
          <ul className="list-disc pl-6 space-y-2">
            <li>Identity data (name)</li>
            <li>Contact data (email, phone number, address)</li>
            <li>Technical data (IP address, browser, device)</li>
            <li>Usage data (pages visited, interactions)</li>
            <li>Academic or application information you submit</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock title="Legal Basis for Processing">
          We process data based on contract necessity, consent, legitimate interests,
          legal obligations, and public interest under applicable UK laws.
        </PolicyBlock>

        <PolicyBlock title="How We Use Your Data">
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide education counselling services</li>
            <li>Process university applications</li>
            <li>Respond to enquiries</li>
            <li>Improve website performance</li>
            <li>Send updates (with consent)</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock title="Sharing Your Data">
          We may share data with trusted service providers and partner universities
          only when required. <strong>We never sell your personal data.</strong>
        </PolicyBlock>

        <PolicyBlock title="Data Retention">
          Data is retained only as long as necessary:
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Student records: up to 6 years</li>
            <li>Marketing data: until consent is withdrawn</li>
            <li>Technical data: up to 2 years</li>
          </ul>
        </PolicyBlock>

        <PolicyBlock title="Your Rights">
          You have the right to access, correct, delete, restrict, or object to
          processing of your personal data. Requests can be sent to
          <strong> ukeduh@gmail.com</strong>.
        </PolicyBlock>

        <PolicyBlock title="Cookies & Tracking">
          We use cookies to ensure website functionality, analyse traffic,
          and improve user experience. You can manage cookies via your browser.
        </PolicyBlock>

        <PolicyBlock title="Children’s Privacy">
          Our services are not intended for children under 13. We do not knowingly
          collect data from children.
        </PolicyBlock>

        <PolicyBlock title="Changes to This Policy">
          We may update this policy from time to time. Changes will be posted on
          this page with an updated date.
        </PolicyBlock>

        <PolicyBlock title="Contact Us">
          For privacy concerns, contact us at:
          <p className="mt-2">📧 ukeduh@gmail.com</p>
          <p>🌐 www.ukeducationalhub.com</p>
        </PolicyBlock>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

/* Reusable section component */
const PolicyBlock = ({ title, children }) => (
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-lg">
    <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
      {title}
    </h2>
    <div className="text-slate-400 leading-relaxed space-y-2">
      {children}
    </div>
  </div>
);
