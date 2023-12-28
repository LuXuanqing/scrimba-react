import "./Card.css";
import image from "./assets/card1.png";
import star from "./assets/star.svg";
import dot from "./assets/dot.svg";

export default function Card() {
  return (
    <div className="card">
      <img src={image} alt="main card image" className="card-image" />
      <p className="rating">
        <img src={star} alt="star icon" />
        <span>5.0</span>
        <span className="light-text-color">(6)</span>
        <img src={dot} alt="dot icon" />
        <span className="light-text-color">USA</span>
      </p>
      <h2 className="card-title">Life lessons with Katie Zaferes</h2>
      <p>
        <span className="heavy-font">From $136</span> / person
      </p>
    </div>
  );
}
