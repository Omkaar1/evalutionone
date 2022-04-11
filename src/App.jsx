import { useState } from "react";

function App() {
  const [score, setScore] = useState(78);
  const [wicket, setWicket] = useState(2);
  const [ball, setBall] = useState(2);
  const [over, setOver] = useState(8);

  const handleChangeScore = (prev) => {
    setScore(score + prev);
  };

  const handleChangeBall = (prev) => {
    setBall(ball + prev);
    setOver(over);
  };
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score: <h1 className="scoreCount">{score < 100 ? score : 101}</h1>
        </div>
        <div>
          Wicket: <h1 className="wicketCount">{wicket < 12 ? wicket : 12}</h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {over}.
            {
              ball
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button
          className="addScore1"
          onClick={() => {
            handleChangeScore(1);
          }}
        >
          Add 1
        </button>
        <button
          className="addScore4"
          onClick={() => {
            handleChangeScore(4);
          }}
        >
          Add 4
        </button>
        <button
          className="addScore6"
          onClick={() => {
            handleChangeScore(6);
          }}
        >
          Add 6
        </button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={() => setWicket(wicket + 1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={() => handleChangeBall(1)}>Add 1</button>
      </div>
      {score > 100 ? <h1>India Won</h1> : <h1></h1>}
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
