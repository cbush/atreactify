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
        <SourceUrlInput setSourceUrl={setSourceUrl} />
        <EmojiAtReactionMaker sourceUrl={sourceUrl} />
      </Provider>
    </div>
  );
}

export default App;
