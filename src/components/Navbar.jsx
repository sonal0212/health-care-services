import { useState, useRef, useEffect } from "react";
import "./Navbar.scss";
import logo from "../assets/logo.svg";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) document.addEventListener("mousedown", handleOutsideClick);
    else document.removeEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: "#section-header", label: "Home" },
    { href: "#section-features", label: "About" },
    { href: "#section-services", label: "Services" },
    { href: "#section-contact", label: "Contact" }
  ];

  return (
    <motion.header 
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar__logo">
        <img className="navbar__logo-img" src={logo} alt="dental logo" />
      </div>
      
      <div className="navbar__toggle" onClick={toggleMenu}>
        <div className={`navbar__toggle__icon ${isMenuOpen ? `open` : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="navbar__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
      
      <motion.ul 
        ref={menuRef} 
        className={`navbar__menu ${isMenuOpen ? "show" : ""}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item, index) => (
          <motion.li 
            key={item.href}
            className="navbar__item"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a 
              href={item.href} 
              onClick={() => setIsMenuOpen(false)}
              className="navbar__link"
            >
              {item.label}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.header>
  );
};

export default Navbar;
