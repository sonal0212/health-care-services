import "./Features.scss";

const Posts = ({ icon: Icon, title, subtitle, about }) => {
  return (
    <article className="feature-card">
      <Icon className="feature-card__icon" />
      <h2 className="feature-card__title">{title}</h2>
      <h4 className="feature-card__subtitle">{subtitle}</h4>
      <p className="feature-card__about">{about}</p>
    </article>
  );
};

export default Posts;
