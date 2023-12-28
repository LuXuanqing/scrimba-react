import "./Navbar.css";
import logo from "../public/images/logo.svg";
function Navbar() {
  return (
    <nav>
      <img src={logo} alt="airbnb logo" className="logo" />
    </nav>
  );
}

export default Navbar;
