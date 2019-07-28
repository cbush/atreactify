import React, { useState } from "react";
import { Provider } from "reakit";
import * as system from "reakit-system-bootstrap";
import "../App.css";
import { EmojiAtReactionMaker } from "./EmojiAtReactionMaker";
import { SourceUrlInput } from "./SourceUrlInput";

function App() {
  const [sourceUrl, setSourceUrl] = useState(null);
  return (
    <div className="App">
      <Provider unstable_system={system}>
        <h1>Create at-reaction emoji</h1>
        <p>Enter the source image URL below to create an at-reaction emoji:</p>
        <SourceUrlInput setSourceUrl={setSourceUrl} />
        <EmojiAtReactionMaker sourceUrl={sourceUrl} />
      </Provider>
    </div>
  );
}

export default App;
