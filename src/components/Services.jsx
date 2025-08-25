import service_img from "../assets/service_img.svg";
import "./Services.scss";
import { BsPatchCheckFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [imageRef, imageInView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [listRef, listInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const services = [
    "Dental Extractions",
    "Dental Implant Fixing",
    "Sedation Dentistry",
    "Teeth Whitening",
    "Cosmetic Procedures",
    "Dental Implants",
    "Mouth And Sports Guards",
    "Crowns",
    "Root Canals",
    "Oral Surgery Procedures"
  ];

  return (
    <article className="services" id="section-services">
      <div className="services__container">
        <motion.div 
          ref={imageRef}
          className="services__left"
          initial={{ opacity: 0, x: -50 }}
          animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img className="services__left__side-img" src={service_img} alt="dental care decorative element" />
          <motion.img
            className="services__left__img"
            src="https://media.istockphoto.com/id/611903110/photo/dentistry-education.jpg?s=612x612&w=0&k=20&c=1ZdhjasRdYzH9p6kBYR1EJYKSq4GwPZ54cmobOuNjT8="
            alt="dental services"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        
        <motion.div 
          ref={ref}
          className="services__right"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="services__right__heading"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            We Ensure Best Dental Service For You
          </motion.h1>
          
          <motion.p 
            className="services__right__sub-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            With a team of skilled and dedicated dental professionals, we offer a
            comprehensive range of dental services designed to cater to every
            aspect of your oral well-being.
          </motion.p>
          
          <motion.ul 
            ref={listRef}
            className="services__right__list"
            initial={{ opacity: 0, y: 30 }}
            animate={listInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            {services.map((service, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={listInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.8 + (index * 0.1), 
                  ease: "easeOut" 
                }}
                whileHover={{ x: 5 }}
              >
                <BsPatchCheckFill className="services__right__list__icon" />
                {service}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </article>
  );
};

export default Services;
