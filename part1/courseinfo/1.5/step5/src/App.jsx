import React from 'react'

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) => {
    return (
      <div>
        <h1>{props.course.name}</h1>
      </div>
    )
  }

  const Content = (props) => {
    return (
      <div>
        <p>{props.name} {props.exercises}</p>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <p>Number of exercises {props.exercises}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content name={course.parts[0].name} exercises={course.parts[0].exercises}/>
      <Content name={course.parts[1].name} exercises={course.parts[1].exercises}/>
      <Content name={course.parts[2].name} exercises={course.parts[2].exercises}/>
      <Total exercises={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
    </div>
  )
}

export default App
