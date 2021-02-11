import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

export default class RollDice extends Component {
  state = {
    dot1: "one",
    dot2: "one",
    rolling: false,
  };

  buttonClickHandler = (e) => {
    //   this could be a static defaultProps either
    let dotsArray = ["one", "two", "three", "four", "five", "six"];
    let randomDotsString1 = [...dotsArray][
      Math.floor(Math.random() * dotsArray.length)
    ];
    let randomDotsString2 = [...dotsArray][
      Math.floor(Math.random() * dotsArray.length)
    ];

    this.setState({
      dot1: randomDotsString1,
      dot2: randomDotsString2,
      rolling: true,
    });
    // wait one second, then set rolling to false:
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className="RollDice">
        <div>
          <Die dots={this.state.dot1} rolling={this.state.rolling}/>
          <Die dots={this.state.dot2} rolling={this.state.rolling}/>
        </div>
        <button onClick={this.buttonClickHandler} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}
