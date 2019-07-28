import React from "react";

export class EmojiAtReactionMaker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidUpdate(previousProps) {
    const { sourceUrl } = this.props;
    if (sourceUrl !== previousProps.sourceUrl) {
      this.setState({ result: null, error: null });
      try {
        await this.fetchResult(sourceUrl);
      } catch (error) {
        this.setState({ error });
      }
    }
  }

  fetchResult = async sourceUrl => {
    console.log("Fetching", sourceUrl);

    const response = await fetch(
      `https://nevernude.azurewebsites.net/api/createEmojiAtReaction?code=ceCsY9jjGOWCTBVHWvsS2PxuathwmsKkznQX5QAjVBvvaY4eEQ6QRA==&sourceUrl=${sourceUrl}`
    );

    console.log("Response received");
    const body = await response.json();

    if (this.props.sourceUrl !== sourceUrl) {
      console.log(`New request detected, aborting for ${sourceUrl}`);
      return;
    }

    if (response.status !== 200) {
      throw new Error(`HTTP ${response.status}: ${body.error}`);
    }

    const { base64 } = body;
    console.log("Setting body payload");
    this.setState({ error: null, result: base64 });
  };

  render() {
    const { sourceUrl } = this.props;
    const { error, result } = this.state;
    return (
      <div className="emojiAtReactionMaker">
        {sourceUrl == null ? null : error != null ? (
          <p>Error: {error.message}</p>
        ) : result == null ? (
          <p>Loading...</p>
        ) : (
          <a href={result}>
            <img alt="Result at reaction" src={result} />
          </a>
        )}
      </div>
    );
  }
}
