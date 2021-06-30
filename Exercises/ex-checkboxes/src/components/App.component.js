import React from "react";
import Square from "./Square.component";
import Spiner from "./Spiner.componnet";
import Button from "./Button";
import CheckBox from "./CheckBox";
class App extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <CheckBox />
      </div>
    );
  }
}

export default App;
