import "./Header.scss";

const Header = () => {
  return (
    <section className="section-header" id="section-header">
      <div className="section-header__heading">
        <h1 className="section-header__heading__title">
          Creating Beautiful smiles for life
        </h1>
        <p className="section-header__heading__tagline">
          Discover a diffrent kind of dental experience, We offer all the
          treatements you'd expect from a general dentist.
        </p>
        <button className="section-header__heading__btn section-header__heading__btn-white section-header__heading__btn-animation">
          Know More !
        </button>
      </div>
      <div className="section-header__image">
        <img
          className="section-header__img"
          src="https://plus.unsplash.com/premium_photo-1661775868038-77ae66913504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVudGFsJTIwcGF0aWVudHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=650&q=433"
          alt="dentist"
        />
      </div>
    </section>
  );
};

export default Header;
