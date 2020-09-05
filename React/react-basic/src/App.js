import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ApiFetch from "./components/ApiFetch";
// import Basic1 from "./components/Basic1";
// import Basic2 from "./components/Basic2";
// import BasicUseEffect from "./components/BasicUseEffect";
// import TimerContainer from "./components/TimerContainer";
import AppContext from "./contexts/AppContext";

function App() {
  return (
    <AppContext.Provider value={"value from App.js"}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Basic1 name="Hooks" /> */}
          {/* <Basic2 />
        <BasicUseEffect /> */}
          {/* <TimerContainer /> */}
          <ApiFetch />
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
