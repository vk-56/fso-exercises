import { useState } from 'react'

const Button = ({ text, feedback, setFeedback}) => <button onClick={() => setFeedback(feedback + 1)}>{text}</button>

const StatisticLine = ({ text, value }) =>  {
  return (
    <tr>
      {text == "positive" ? (
        <>
          <td>{text}</td> 
          <td>{value}%</td>
        </>
      ) : (
        <>
          <td>{text}</td> 
          <td>{value}</td>
        </>
      )} 
    </tr>
  )
}

const Statistics = ({ good, bad, neutral }) => {
  return (
    <>
      {good === 0 && bad === 0 && neutral === 0 ? (
        <>
          <h1>Statistics</h1>
          <p>No feedback given</p>
        </>
      ): (
        <>
          <h1>Statistics</h1>
          <table>
            <tbody>
              <StatisticLine text="good" value={good} />
              <StatisticLine text="neutral" value={neutral} />
              <StatisticLine text="bad" value={bad} />
              <StatisticLine text="all" value={good + neutral + bad} />
              <StatisticLine text="average" value={( (good * 1) + (neutral * 0) + (bad * -1)) / (good + neutral + bad) } />
              <StatisticLine text="positive" value={( (good / (good + neutral + bad)) * 100 )} />
            </tbody>
          </table>
        </>
      )} 
    </>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="good" feedback={good} setFeedback={setGood} />
      <Button text="neutral" feedback={neutral} setFeedback={setNeutral} />
      <Button text="bad" feedback={bad} setFeedback={setBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App