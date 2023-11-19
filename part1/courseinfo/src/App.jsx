// "The only way to go fast, is to go well" - Robert Martin

import { useState } from 'react'
import viteLogo from '/vite.svg'

// Header component
const Header = (props) => {
  return (
  <div>
    <h1>{props.course}</h1>
    </div>
  )
}

// Contents component 
const Content = ({parts}) => {
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises}/>
      <Part name={parts[1].name} exercises={parts[1].exercises}/>
      <Part name={parts[2].name} exercises={parts[2].exercises}/>
    </div>
  )
}

// Total component 
const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

// Part component 
// Should render out each name and num of exercises of one part 
const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
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
