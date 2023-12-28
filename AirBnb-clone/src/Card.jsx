import "./Card.css";
// import image from "./assets/card1.png";
import star from "../public/images/star.svg";
import dot from "../public/images/dot.svg";

export default function Card(props) {
  console.log(props.item);
  const { coverImg, stats, location, title, price, openSpots } = props.item;
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
        src={`../public/images/${coverImg}`}
        alt="main card image"
        className="card-image"
      />
      <p className="rating">
        <img src={star} alt="star icon" />
        <span>{stats.rating}</span>
        <span className="gray">({stats.reviewCount})</span>
        <img src={dot} alt="dot icon" />
        <span className="gray">{location}</span>
      </p>
      <h2 className="card-title">{title}</h2>
      <p>
        <span className="heavy-font">From ${price}</span> / person
      </p>
    </div>
  );
}
