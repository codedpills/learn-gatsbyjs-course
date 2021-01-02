import React from 'react';
import ClassCounter from './ClassCounter';
import FunctionCounter from './FunctionCounter';
import './App.css';

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <br />
      <FunctionCounter />
    </div>
  );
}

export default App;
