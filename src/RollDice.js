import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

export default class RollDice extends Component {
  state = {
    dot: "one"
  };


//   dot: ["one", "two", "three", "four", "five", "six"]

  buttonClickHandler = (e) => {
    console.log(this.state.dot);
    let dotsArray = ["one", "two", "three", "four", "five", "six"];
    let randomDotsString = [...dotsArray][Math.floor(Math.random()*dotsArray.length)];
    this.setState({dot: randomDotsString});
  };

  render() {
    return (
      <div>
        <div className="RollDice">
          <Die dots={this.state.dot}/>
          <Die dots={this.state.dot}/>
         
        </div>
        <button onClick={this.buttonClickHandler}>Roll Dice!</button>
      </div>
    );
  }
}
