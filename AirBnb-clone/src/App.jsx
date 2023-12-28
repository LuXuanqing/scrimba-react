import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "./data";

function App() {
  const cardItems = data.map((item) => (
    <Card
      key={item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
    ></Card>
  ));

  return (
    <div id="app">
      <Navbar></Navbar>
      <Hero></Hero>
      <section className="card-list">{cardItems}</section>
    </div>
  );
}

export default App;
