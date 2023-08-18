import service_img from "../assets/service_img.svg";
import "./Services.scss";
import { BsPatchCheckFill } from "react-icons/bs";

const Services = () => {
  return (
    <article className="services">
      <div className="services__left">
        <img className="services__left__side-img" src={service_img} />
        <img
          className="services__left__img"
          src="https://media.istockphoto.com/id/611903110/photo/dentistry-education.jpg?s=612x612&w=0&k=20&c=1ZdhjasRdYzH9p6kBYR1EJYKSq4GwPZ54cmobOuNjT8="
        />
      </div>
      <div className="services__right">
        <h1 className="services__right__heading">
          We Ensure Best Dental Service For You
        </h1>
        <p className="services__right__sub-heading">
          With a team of skilled and dedicated dental professionals, we offer a
          comprehensive range of dental services designed to cater to every
          aspect of your oral well-being.
        </p>
        <ul className="services__right__list">
          <li>
            <BsPatchCheckFill className="services__right__list__icon" />
            Appointment is Quick and Easy
          </li>
          <li>
            <BsPatchCheckFill className="services__right__list__icon" />
            Top Specialist Doctors
          </li>
          <li>
            <BsPatchCheckFill className="services__right__list__icon" />
            Best Treatment
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Services;
