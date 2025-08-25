import "./Header.scss";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Header = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [imageRef, imageInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const handleKnowMoreClick = () => {
    const aboutSection = document.querySelector('#section-features');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="section-header" id="section-header">
      <div className="section-header__container">
        <motion.div 
          ref={ref}
          className="section-header__heading"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="section-header__heading__title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Creating Beautiful smiles for life
          </motion.h1>
          <motion.p 
            className="section-header__heading__tagline"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Discover a different kind of dental experience. We offer all the
            treatments you'd expect from a general dentist with a focus on
            comfort and excellence.
          </motion.p>
          <motion.button 
            className="section-header__heading__btn section-header__heading__btn-white section-header__heading__btn-animation"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(20, 184, 166, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleKnowMoreClick}
          >
            Know More !
          </motion.button>
        </motion.div>
        
        <motion.div 
          ref={imageRef}
          className="section-header__image"
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={imageInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.img
            className="section-header__img"
            src="https://plus.unsplash.com/premium_photo-1661775868038-77ae66913504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVudGFsJTIwcGF0aWVudHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=650&q=433"
            alt="dentist"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          <div className="section-header__image__overlay"></div>
        </motion.div>
      </div>
      
      <motion.div 
        className="section-header__scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Header;
