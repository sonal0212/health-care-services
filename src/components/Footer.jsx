import "./Footer.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <motion.div 
          ref={ref}
          className="footer__content"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="footer__section">
            <motion.h3 
              className="footer__title"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Shanti Multispeciality Dental Center
            </motion.h3>
            <motion.p 
              className="footer__description"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Creating beautiful smiles for life. We are committed to providing the best dental care experience with compassion and excellence.
            </motion.p>
            <motion.div 
              className="footer__social"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="footer__social-link"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div className="footer__section">
            <motion.h4 
              className="footer__subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Quick Links
            </motion.h4>
            <motion.ul 
              className="footer__links"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <li><a href="#section-header">Home</a></li>
              <li><a href="#section-features">About</a></li>
              <li><a href="#section-services">Services</a></li>
              <li><a href="#section-contact">Contact</a></li>
            </motion.ul>
          </div>

          <div className="footer__section">
            <motion.h4 
              className="footer__subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Services
            </motion.h4>
            <motion.ul 
              className="footer__links"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <li>Dental Extractions</li>
              <li>Dental Implants</li>
              <li>Teeth Whitening</li>
              <li>Cosmetic Procedures</li>
            </motion.ul>
          </div>

          <div className="footer__section">
            <motion.h4 
              className="footer__subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              Contact Info
            </motion.h4>
            <motion.div 
              className="footer__contact"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            >
              <p>123 Dental Street, City</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@dentalcare.com</p>
              <p>Hours: Mon-Fri 9AM-6PM</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="footer__bottom"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <p>&copy; 2024 Shanti Multispeciality Dental Center. All rights reserved.</p>
          <p>Designed with ❤️ for better smiles</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
