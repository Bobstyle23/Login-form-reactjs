import React, { Component } from "react";

class Input extends Component {
  state = {};
  render(props) {
    return (
      <div>
        <input type={this.props.type} placeholder={this.props.placeholder} />
      </div>
    );
  }
}

export default Input;
