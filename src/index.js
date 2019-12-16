import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    const buttonText = {name:'asdf'};
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.name}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
