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

    console.log(props)
    return (
      <div>
        <section>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {total}</p>
          <p>average {average}</p>
          <p>positive {percentage}</p>
        </section>
      </div>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <section className='btn-section'>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
      </section>
      <h1>statistics</h1>
      <Statistics />
    </div>
  )
}

export default App