import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import "./NavLinks.css";

const NavLinks = () => {
  const auth = useContext(AuthContext);
  return (
    // <ul className="nav-links">
    //   <li>
    //     <NavLink to="/">ALL USERS</NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/u1/places">MY PLACES</NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/places/new">ADD PLACE</NavLink>
    //   </li>
    //   <li>
    //     <NavLink to="/auth">AUTHENTICATE</NavLink>
    //   </li>
    // </ul>
    <ul className="nav-links">
      <li>
        <NavLink to="/">ALL USERS</NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/u1/places">MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">AUTHENTICATE</NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
