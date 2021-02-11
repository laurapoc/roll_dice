import React, { Component } from "react";
import "./Die.css";

export default class Die extends Component {
  render() {
    let dots = this.props.dots;
    let iconClass = `Die fas fa-dice-${dots} Die ${this.props.rolling ? "shaking" : ""}`;
    return <i className={iconClass}></i>;
  }
}
