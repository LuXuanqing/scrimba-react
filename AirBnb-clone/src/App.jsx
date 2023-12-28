import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "./data";

function App() {
  const cardItems = data.map((item) => <Card key={item.id} {...item}></Card>);

  return (
    <div id="app">
      <Navbar></Navbar>
      <Hero></Hero>
      <section className="card-list">{cardItems}</section>
    </div>
  );
}

export default App;
