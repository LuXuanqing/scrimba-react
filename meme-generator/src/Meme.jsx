import "./Meme.css";
import memeData from "./memeData";
import { useState } from "react";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const memes = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memes.length);
    const { url } = memes[randomNumber];
    console.log(url);
    setMemeImage(url);
  }

  return (
    <main>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="top">Top text</label>
        <label htmlFor="bottom">Bottom text</label>
        <input type="text" name="top" id="" placeholder="Shut up" />
        <input
          type="text"
          name="bottom"
          id=""
          placeholder="And take my money"
        />
        <button type="submit" className="full-row">
          Get a new meme image 🖼
        </button>
      </form>
      <img src={memeImage} alt="" className="meme-image" />
    </main>
  );
}
