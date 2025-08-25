import "./Features.scss";
import Posts from "./Posts";
import Feature from "../data/Items";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [cardsRef, cardsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="section-features" className="features-section">
      <motion.div 
        ref={ref}
        className="features"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="features__title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          We Care For Your Smile
        </motion.h1>
        <motion.div 
          className="features__subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <p>
            Shanti Multispeciality Dental Center provides Comprehensive Care.
          </p>
          <p>
            We are committed to providing the best health care experience.
          </p>
        </motion.div>
      </motion.div>
      
      <motion.div 
        ref={cardsRef}
        className="feature-contents"
        initial={{ opacity: 0, y: 50 }}
        animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {Feature.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={cardsInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3 + (index * 0.1), 
              ease: "easeOut" 
            }}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <Posts
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              about={item.about}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Features;
