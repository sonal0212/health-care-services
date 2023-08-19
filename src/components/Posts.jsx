import "./Features.scss";

const Posts = ({ icon: Icon, title, subtitle, about }) => {
  return (
    <article className="feature-contents_posts">
      <Icon className="feature-contents__icons rounded-btn" />
      <h2 className="feature-contents__title">{title}</h2>
      <h4 className="feature-contents__subtitle">{subtitle}</h4>
      <p className="feature-contents__about">{about}</p>
    </article>
  );
};

export default Posts;
