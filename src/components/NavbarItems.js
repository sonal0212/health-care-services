const NavbarItem = ({ link, label }) => {
  return (
    <li className="navbar__item">
      <a href={link}>{label}</a>
    </li>
  );
};

export default NavbarItem;
