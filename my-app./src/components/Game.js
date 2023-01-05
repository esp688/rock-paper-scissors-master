import { useState, useEffect } from "react";

const Game = () => {
  const [computerSelection, setComputerSelection] = useState(null);
  const [userSelection, setUserSelection] = useState(null);
  const [finalOutput, setFinalOutput] = useState(null);

  const clickHandler = (value) => {
    setUserSelection(value);
  };

    return(
      <>
        <h1>Rock, paper, scissor, lizard and Spock</h1>
        <div>
          <div className="container">
              <div className="section">
                  <div className="info">
                    <h3>You</h3>
                  </div>
                    <div className="show">{userSelection}</div>
              </div>
          </div>
          <div className="section">
                <div className="info">
                  <h3>Computer</h3>
                </div>
                <div className="show computer">{computerSelection}</div>
              </div>
            </div>
            <h2>Final Output</h2>
            <button onClick={() => clickHandler("🧱")}>🧱</button>
            <button onClick={() => clickHandler("📰")}>📰</button>
            <button onClick={() => clickHandler("✂️")}>✂️</button>
            <button onClick={() => clickHandler("🦎")}>🦎</button>
            <button onClick={() => clickHandler("🖖")}>🖖</button>
          </div>

      </>

  );
};

export default Game;
