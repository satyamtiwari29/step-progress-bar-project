import { useState } from "react";
import "./styles.css";

export default function App() {
  const [currentstep, setCurrentstep] = useState(1);
  const [linestep, setLinestep] = useState(0);

  const circle = 4;
  function roundNumber() {
    let arr = [];
    for (let i = 1; i <= circle; i++) {
      arr.push(
        <span className={i <= currentstep ? "active circle" : "circle"} key={i}>
          {i}{" "}
        </span>
      );
    }
    return arr;
  }
  function preButton() {
    if (currentstep > 1) {
      setCurrentstep(currentstep - 1);
      setLinestep(linestep - 1);
    }
  }

  function nextbutton() {
    if (currentstep < circle) {
      setCurrentstep(currentstep + 1);
      setLinestep(linestep + 1);
    }
  }

  return (
    <>
      <div className="container">
        <div className="progress-container">
          <div className="line" style={{ width: `${linestep * 33}%` }}></div>
        </div>
        <div className="circles">{roundNumber()}</div>
      </div>
      <div className="buttons">
        <button className="button Pre" onClick={preButton}>
          Pre
        </button>
        <button className="button Next" onClick={nextbutton}>
          Next
        </button>
      </div>
    </>
  );
}
