import { useState } from 'react'
import './App.css'

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  const total = good + neutral + bad
  const average = (total/3)
  const percentage = `${(good * 100)/total}%`

  const Statistics = (props) => {

    if(total === 0) {
      return (
        <div>
          <p>No feedback given</p>
        </div>
      )
    } else

    return (
      <div>
        <section>
         <StatisticLine text='good' value={good} />
         <StatisticLine text='neutral' value={neutral} />
         <StatisticLine text='bad' value={bad} />
         <StatisticLine text='all' value={total} />
         <StatisticLine text='average' value={average} />
         <StatisticLine text='positive' value={percentage} />
        </section> 
      </div>
    )
  }

  const Button = (props) => {

    return (
      <div>
        <button onClick={props.handleClick}>{props.text}</button>
      </div>
    )
  }

  const StatisticLine = (props) => {
    return (
      <div>
        <p>{props.text} {props.value}</p>
      </div>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <section className='btn-section'>
        <Button handleClick={handleGoodClick} text='good' />
        <Button handleClick={handleNeutralClick} text='neutral' />
        <Button handleClick={handleBadClick} text='bad' />
      </section>
      <h1>statistics</h1>
      <Statistics />
    </div>
  )
}

export default App
