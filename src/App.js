import { useState } from "react";
import "./App.css";

function App() {
  const [first, setfirst] = useState(0);
  console.log(first);
  return (
    <div className="App">
      <h2 data-testid="counter-value">{first}</h2>
      <button
        disabled={first === 0}
        data-testid="counter-decrement-button"
        onClick={() => {
          setfirst(first - 1);
        }}
      >
        -
      </button>
      <button
        data-testid="counter-increment-button"
        onClick={() => {
          setfirst(first + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
