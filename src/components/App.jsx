import React from "react";
import EmojiDictionary from "./EmojiDictionary";
import emojipedia from "../emojipedia";

function createEmojipedia(emojiinfo) {
  return (
    <EmojiDictionary
      id={emojiinfo.id}
      emoji={emojiinfo.emoji}
      name={emojiinfo.name}
      meaning={emojiinfo.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createEmojipedia)}
    </div>
  );
}

export default App;
