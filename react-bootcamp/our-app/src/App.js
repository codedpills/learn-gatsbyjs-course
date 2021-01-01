import React from "react";
import Display from "./Display";
import DisplayAgain from './DisplayAgain';
import "./App.css";

function App() {
  return (
    <>
      <Display name="Zak" company="Google" profession="Software Developer" />
      <hr />
      <DisplayAgain tech="React" num={2} />
    </>
  );
}

export default App;
