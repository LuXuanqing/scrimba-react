import "./Meme.css";
import memeData from "./memeData";
import { useState } from "react";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(memeData);

  function handleSubmit(event) {
    event.preventDefault();
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const { url } = memesArray[randomNumber];
    console.log(url);
    setMeme((prevMeme) => ({
      ...prevMeme,
      imageUrl: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <main>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="top">Top text</label>
        <label htmlFor="bottom">Bottom text</label>
        <input
          type="text"
          name="topText"
          id="top"
          placeholder="Shut up"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          name="bottomText"
          id="bottom"
          placeholder="And take my money"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button type="submit" className="full-row">
          Get a new meme image 🖼
        </button>
      </form>
      <section className="meme">
        <img src={meme.imageUrl} alt="" className="meme-image" />
        <h2 className="meme-text meme-top">{meme.topText}</h2>
        <h2 className="meme-text meme-bottom">{meme.bottomText}</h2>
      </section>
    </main>
  );
}
