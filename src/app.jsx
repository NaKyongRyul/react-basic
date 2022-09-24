import React from "react";
import "./app.css";

function App() {
  const name = "ellie";
  return (
    <React.Fragment>
      <h1>Hello {name}</h1>
      <h1>Hello</h1>
      {["🍎", "🍊"].map((item) => (
        <h1>{item}</h1>
      ))}
    </React.Fragment>
  );
}

export default App;
