import "./Navbar.css";
import logo from "./assets/logo.svg";
function Navbar() {
  return (
    <nav>
      <img src={logo} alt="airbnb logo" className="logo" />
    </nav>
  );
}

export default Navbar;
