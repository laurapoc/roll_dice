import React, { Component } from "react";
import "./Die.css";

export default class Die extends Component {
  render() {
    let dots = this.props.dots;
    let iconClass = `Die fas fa-dice-${dots}`;
    return (
      <div>
        <i className={iconClass}></i>
      </div>
    );
  }
}
