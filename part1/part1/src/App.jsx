const Hello = (props) => {
  console.log(props)
  return ( 
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

// React component named app
const App = () => {
  const friends = ['Peter', 'Maya']
  return (
    <div>
      <p>{friends}</p>
    </div>
  )
}

export default App