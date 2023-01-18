import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="py-4">
      <NavLink to="/" className="font-mono text-2xl font-bold text-white">
        Movie Bro
      </NavLink>
    </nav>
  );
};

export default Navbar;
