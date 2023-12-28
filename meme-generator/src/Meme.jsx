import "./Meme.css";

export default function Meme() {
  return (
    <form action="">
      <label htmlFor="top">Top text</label>
      <label htmlFor="bottom">Bottom text</label>
      <input type="text" name="top" id="" placeholder="Shut up" />
      <input type="text" name="bottom" id="" placeholder="And take my money" />
      <button type="submit">Get a new meme image 🖼</button>
    </form>
  );
}
