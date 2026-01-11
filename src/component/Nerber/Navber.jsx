import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-4 py-2 rounded-md text-sm font-medium transition
     ${isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-200"}`;

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-700">
          UK<span className="text-gray-800">EduHub</span>
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-4">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/universities" className={linkClass}>Universities</NavLink>
          <NavLink to="/english-club" className={linkClass}>English Language Club</NavLink>
          <NavLink to="/success-stories" className={linkClass}>Success Stories</NavLink>
          <NavLink to="/blog" className={linkClass}>Blog</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-800 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 pb-4 flex flex-col gap-2">
          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>About</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/universities" className={linkClass}>Universities</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/english-club" className={linkClass}>English Language Club</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/success-stories" className={linkClass}>Success Stories</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/blog" className={linkClass}>Blog</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
