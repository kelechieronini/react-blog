import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Ero Blog</h1>
      <div className="links">
        <NavLink to="/">Home</NavLink>
        <NavLink
          to="/create"
          style={{
            color: "white",
            background: "#bc4123",
            borderRadius: "15px",
          }}
        >
          New Blog
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
