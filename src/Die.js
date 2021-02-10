import React, { Component } from "react";
import "./Die.css";

export default class Die extends Component {
  render() {
    let dots = this.props.dots;
    let iconClass = `fas fa-dice-${dots} fa-9x`;
    return (
      <div>
        <div className="Die">
          <i className={iconClass}></i>
        </div>
      </div>
    );
  }
}
