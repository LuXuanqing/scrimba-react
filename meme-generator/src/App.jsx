import "./App.css";
import Navbar from "./Navbar";
import Meme from "./Meme";

function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <main>
        <Meme />
      </main>
    </div>
  );
}

export default App;
