import trollFace from "../public/Troll Face.svg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <img src={trollFace} alt="troll face image" className="logo-image" />
        <h1 className="logo-text">Meme Generator</h1>
      </div>
      <h2>React Course - Project 3</h2>
    </nav>
  );
}
