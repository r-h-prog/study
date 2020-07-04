import React from "react";
// import logo from "./logo.svg";
import "./App.css";

interface NAME {
  first: string;
  // nullも許容している
  last: string | null;
}

let nameObj: NAME = { first: "Yamada", last: "Taro" };

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
