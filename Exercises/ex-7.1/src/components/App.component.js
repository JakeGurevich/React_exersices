import React from "react";

class App extends React.Component {
  state = { counter: 0 };
  handleClick = () => {
    console.log("clicked");
    this.setState((prevState, prevProps) => {
      console.log(prevState);
      return { counter: prevState.counter + 1 };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>increment</button>
        {this.state.counter}
      </div>
    );
  }
}
export default App;
