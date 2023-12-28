import "./Card.css";
// import image from "./assets/card1.png";
import star from "../public/images/star.svg";
import dot from "../public/images/dot.svg";

export default function Card({
  img,
  rating,
  reviewCount,
  location,
  title,
  price,
  openSpots,
}) {
  let badge;
  if (openSpots === 0) {
    badge = <div className="card-badge bold">SOLD OUT</div>;
  } else if (location === "Online") {
    badge = <div className="card-badge bold">Online</div>;
  }
  return (
    <div className="card">
      {badge}
      <img
        src={`../public/images/${img}`}
        alt="main card image"
        className="card-image"
      />
      <p className="rating">
        <img src={star} alt="star icon" />
        <span>{rating}</span>
        <span className="light-text-color">({reviewCount})</span>
        <img src={dot} alt="dot icon" />
        <span className="light-text-color">{location}</span>
      </p>
      <h2 className="card-title">{title}</h2>
      <p>
        <span className="heavy-font">From ${price}</span> / person
      </p>
    </div>
  );
}
