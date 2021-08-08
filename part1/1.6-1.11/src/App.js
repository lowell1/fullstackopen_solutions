import React, { useState } from "react";

const StatisticLine = ({ text, value, extraText }) => (
  <tr>
    <td>{text}</td>
    <td>{`${value}${extraText ? extraText : ""}`}</td>
  </tr>
);

const Statistics = ({ good, bad, neutral }) => {
  const sum = good + bad + neutral;
  const positive = (100 / sum) * good;
  const averageScore = (good - bad) / sum;

  if (good || bad || neutral) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="all" value={sum} />
          <StatisticLine text="average" value={averageScore} />
          <StatisticLine text="positive" extraText=" %" value={positive} />
        </tbody>
      </table>
    );
  }

  return <h2>no feedback given</h2>;
};

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  // const sum = good + bad + neutral;
  // const positive = (100 / sum) * good;
  // const averageScore = (good - bad) / sum;

  return (
    <>
      <h2>Give Feedback</h2>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>statistics</h2>
      {/* <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p> */}
      <Statistics good={good} bad={bad} neutral={neutral} />
      {/* <p>all {sum}</p>
      <p>average {averageScore}</p>
      <p>positive {positive} %</p> */}
    </>
  );
}

export default App;
