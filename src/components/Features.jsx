import "./Features.scss";
import Posts from "./Posts";
import Feature from "../data/Items";

const Features = () => {
  return (
    <section>
      <div className="features">
        <h1 className="features__title">We Care For your smile</h1>
        <p className="features__subtitle">
          Shanti Mulispeciality Dental Care provides a Comprehensive Care.
          <p className="features__subtitle">
            We are commited to provide best heath Care
          </p>
        </p>
      </div>
      <div className="feature-contents">
        {Feature.map((item) => (
          <Posts
            key={item.id}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            about={item.about}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
