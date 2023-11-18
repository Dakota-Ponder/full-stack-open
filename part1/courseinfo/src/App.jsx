import { useState } from 'react'
import viteLogo from '/vite.svg'

// Header component
const Header = (props) => {
  return (
  <>
    <h1>{props.course}</h1>
    </>
  )
}

// Contents component 
const Content = ({parts}) => {
  return (
    <>
      {parts.map(part => (
        <p key={part.name}>
          {part.name} {part.exercises}
        </p>
      ))}
    </>
  )
  
}

// Total component 
const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  )
}

const App = () => {
  
  const course = 'Half Stack application development'

  // an array of objects 
  const parts = [
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
  
  
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}



export default App