import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";

function App() {
  return (
    <div id="app">
      <Navbar></Navbar>
      <Hero></Hero>
      <Card
        img="card1.png"
        rating="5.0"
        reviewCount="6"
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="136"
      ></Card>
    </div>
  );
}

export default App;
