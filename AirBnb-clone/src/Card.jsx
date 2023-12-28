import "./Card.css";
import image from "./assets/card1.png";
import star from "./assets/star.svg";
import dot from "./assets/dot.svg";

export default function Card() {
  return (
    <div className="card">
      <img src={image} alt="life lesson with xxx" className="card-image" />
      <p className="rating">
        <img src={star} alt="rating stars" />
        <span>5.0</span>
        <span className="light-text-color">(6)</span>
        <img src={dot} alt="dot seperator" />
        <span className="light-text-color">USA</span>
      </p>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <span className="heavy-font">From $136</span> / person
      </p>
    </div>
  );
}
