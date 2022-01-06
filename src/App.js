import React from "react";
import Player from "./Components/player";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerAScore: 0,
      winningScore: 0,
      winner: "Player A"
    };
  }

  handlePlayerAClick = () => {
    this.setState((state) => {
      state.playerAScore += 1;
      return state;
    });
  };

  handlePlayerBClick = () => {
    this.setState((state) => {
      state.playerBScore += 1;
      return state;
    });
  };

  reset = () => {
    this.setState({
      playerAScore: 0,
      winningScore: 0,
      winner: "Player A"
    });
  };

  render() {
    return (
      <div className="App">
        <div className="banner">Rock Paper Scissor</div>
        <h1 className="Winner">Player ## is in the lead!</h1>

        <div className="Players">
          <Player
            id={0}
            name={"A"}
            score={this.state.playerAScore}
            clickHandler={this.handlePlayerAClick}
          />
          <Player
            id={1}
            name={"B"}
            score={this.state.playerBScore}
            clickHandler={this.handlePlayerBClick}
          />
        </div>
        <button className="ResetButton" onClick={this.reset}>
          Reset
        </button>
      </div>
    );
  }
}

export default App;
