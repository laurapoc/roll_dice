// import React from "react";
// import "./Die.css";

// export default function Die(props) {
//   console.log(props.dots);
//   //   let iconClass = "fas fa-dice-"+"" + {props.dots} + "" +"fa-9x";
//   return (
//     <div>
//       <div className="Die">
//         {/* <i class={iconClass}></i> */}
//         <i class="fas fa-dice-one fa-9x"></i>
//       </div>
//     </div>
//   );
// }

import React, { Component } from "react";
import "./Die.css";

export default class Die extends Component {
  render() {
    let dots = this.props.dots;
    // console.log(typeof dots);
    let iconClass = `fas fa-dice-${ dots } fa-9x`;
    // console.log(iconClass);
    return (
      <div>
        <div className="Die">
          {/* <i class="fas fa-dice-one fa-9x"></i> */}
          <i class={iconClass}></i>
        </div>
      </div>
    );
  }
}
