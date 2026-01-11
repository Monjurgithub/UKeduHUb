import React from "react";
import {
  Facebook,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-slate-300 overflow-hidden">

      {/* Top Glow */}
      <div className="absolute inset-x-0 -top-32 h-56 bg-linear-to-r
                      from-blue-600/20 via-red-500/20 to-purple-600/20
                      blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* Brand */}
          <div>
            <h3 className="text-3xl font-extrabold text-white tracking-tight">
              UK<span className="text-blue-500">EH</span>
            </h3>

            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Helping students achieve their UK education dreams through
              free counselling, expert guidance, and trusted university
              admissions support.
            </p>

            {/* Contact */}
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>Ukeduh@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-500" />
                <span>
                  +44 7352 991215</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span>5 Moor End, Manchester, United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-lg">
              Quick Links
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                { name: "Study in UK", path: "#" },
                { name: "UK Universities", path: "#" },
                { name: "Scholarships", path: "#" },
                { name: "Contact Us", path: "/contact" },
                { name: "Privacy Policy", path: "/privacy" },
              ].map((item, i) => (
                <li key={i} className="hover:text-white transition hover:translate-x-1">
                  <NavLink to={item.path}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-lg">
              Follow Us
            </h4>

            <div className="flex gap-4">
              <SocialIcon icon={<Facebook />} color="hover:bg-blue-600" />
              <SocialIcon icon={<Twitter />} color="hover:bg-sky-500" />
              <SocialIcon icon={<Youtube />} color="hover:bg-red-600" />
            </div>

            <p className="mt-6 text-sm text-slate-400">
              Stay connected for updates, scholarships, and application tips.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col
                        md:flex-row items-center justify-between gap-4 text-sm">

          <p className="text-slate-400">
            © {new Date().getFullYear()} UKEduHub. All rights reserved.
          </p>

          <p className="text-slate-500">
            Built with ❤️ for future scholars
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* Small reusable icon button */
const SocialIcon = ({ icon, color }) => (
  <a
    href="#"
    className={`w-11 h-11 flex items-center justify-center rounded-full
                bg-white/10 text-white transition
                hover:scale-110 ${color}`}
  >
    {icon}
  </a>
);
