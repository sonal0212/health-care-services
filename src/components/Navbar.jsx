import { useState, useRef, useEffect } from "react";
import "./Navbar.scss";
import logo from "../assets/logo.svg";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

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

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img className="navbar__logo" src={logo} alt="dental logo" />
      </div>
      <div className="navbar__toggle" onClick={toggleMenu}>
        <div className={`navbar__toggle__icon ${isMenuOpen ? `open` : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul ref={menuRef} className={`navbar__menu ${isMenuOpen ? "show" : ""}`}>
        <NavbarItems link="#section-header" label="Home" onClick={handleMenuItemClick}/>
        <NavbarItems link="#section-features" label="About" onClick={handleMenuItemClick}/>
        <NavbarItems link="#section-services" label="Services" onClick={handleMenuItemClick}/>
        <NavbarItems link="#section-doctors" label="Our Doctors" onClick={handleMenuItemClick}/>
        <NavbarItems link="#section-contact" label="Contact" onClick={handleMenuItemClick}/>
      </ul>
    </header>
  );
};
export default Navbar;
