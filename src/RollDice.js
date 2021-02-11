import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

export default class RollDice extends Component {
  state = {
    dot1: "one",
    dot2: "one",
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

    this.setState({ dot1: randomDotsString1, dot2: randomDotsString2 });
  };

  render() {
    return (
      <div className="RollDice">
        <div >
          <Die dots={this.state.dot1} />
          <Die dots={this.state.dot2} />
        </div>
        <button onClick={this.buttonClickHandler}>Roll Dice!</button>
      </div>
    );
  }
}

