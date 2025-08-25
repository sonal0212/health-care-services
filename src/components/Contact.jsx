import "./Contact.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [formRef, formInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      subtitle: "Call us anytime"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: "info@dentalcare.com",
      subtitle: "Send us a message"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      details: "123 Dental Street, City",
      subtitle: "Visit our clinic"
    },
    {
      icon: FaClock,
      title: "Hours",
      details: "Mon-Fri: 9AM-6PM",
      subtitle: "Weekends: 10AM-4PM"
    }
  ];

  return (
    <section className="contact" id="section-contact">
      <div className="contact__container">
        <motion.div 
          ref={ref}
          className="contact__header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="contact__title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="contact__subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Ready to transform your smile? Contact us today to schedule your appointment
            and take the first step towards better oral health.
          </motion.p>
        </motion.div>

        <div className="contact__content">
          <motion.div 
            className="contact__info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <h3 className="contact__info-title">Contact Information</h3>
            <div className="contact__info-grid">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="contact__info-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.8 + (index * 0.1), 
                    ease: "easeOut" 
                  }}
                  whileHover={{ y: -5 }}
                >
                  <div className="contact__info-icon">
                    <item.icon />
                  </div>
                  <div className="contact__info-content">
                    <h4>{item.title}</h4>
                    <p className="contact__info-details">{item.details}</p>
                    <p className="contact__info-subtitle">{item.subtitle}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form 
            ref={formRef}
            className="contact__form"
            initial={{ opacity: 0, x: 50 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h3 
              className="contact__form-title"
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Send us a Message
            </motion.h3>
            
            <div className="contact__form-group">
              <motion.input
                type="text"
                placeholder="Your Name"
                className="contact__form-input"
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                className="contact__form-input"
                initial={{ opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              />
            </div>
            
            <motion.input
              type="tel"
              placeholder="Your Phone"
              className="contact__form-input"
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            />
            
            <motion.textarea
              placeholder="Your Message"
              className="contact__form-textarea"
              rows="5"
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            ></motion.textarea>
            
            <motion.button
              type="submit"
              className="contact__form-button"
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(20, 184, 166, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
