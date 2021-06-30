import React, { useEffect } from "react";
import ReactDom from "react-dom";

if (module.hot) {
  module.hot.accept();
}
const App = () => {
  useEffect(() => {
    document.title = "AppleSeeds React App";
  }, []);
  return (
    <div>
      <label class="label" for="name">
        Enter name:
      </label>
      <br></br>
      <input id="name" type="text" />
      <br></br>
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Submit
      </button>

      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Click Me
      </a>
    </div>
  );
};
ReactDom.render(<App />, document.querySelector("#root"));
