import React from "react";
class Button extends React.Component {
  state = { color: "" };
  changeState = (e) => {
    this.setState({ color: e.target.name });

    this.props.onClick(e.target.name);
  };
  render() {
    let colors = ["blue", "red", "yellow"];

    return (
      <div>
        {colors.map((buttonLabel) => (
          <button name={buttonLabel} onClick={this.changeState}>
            {buttonLabel}
          </button>
        ))}
      </div>
    );
  }
}

export default Button;
