import React, { useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <ExampleInteraction />
      </header>
    </div>
  );

}

function ExampleInteraction() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  const JavascriptExpression='title'

  if (count > 0) {
    return (
    <div>
      <p className={JavascriptExpression}>I know you love Christian and Oliver</p>
      <button className="hotbutton2" onClick={handleClick}>
        Application Lab
      </button>
    </div>);
  } else {
    return (
      <div>
        <p className={JavascriptExpression}>choose which class you like the most</p>
        <button className="hotbutton1" onClick={handleClick}>
          Application Lab
      </button>
        <button className="hotbutton1" onClick={handleClick}>
          Communication Lab
      </button>
        <button className="hotbutton1" onClick={handleClick}>
          Interaction Lab
      </button>
      </div>
    );
  }
}

export default App;
