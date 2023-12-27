import reactIcon from "../images/reactjs-icon.svg";

function NavBar() {
  return (
    <nav>
      <img src={reactIcon} alt="reactjs icon" className="nav-logo" />
      <h1 className="nav-title">ReactFacts</h1>
      <h2 className="nav-subtitle">React Course - Project 1</h2>
    </nav>
  );
}
export default NavBar;
