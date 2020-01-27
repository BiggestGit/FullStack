import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises:  10
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
  return (
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({name}) => {
    return (
      <div>
        <h1>
          {name}
        </h1>
      </div>
    )
  }

  const Content = ({parts}) => {
    return(
    <div>
      <Part part={parts[0].name} number={parts[0].exercises}/>
      <Part part={parts[1].name} number={parts[1].exercises}/>
      <Part part={parts[2].name} number={parts[2].exercises}/>
    </div>
    )
  } 
  

  const Part = ({part, number}) => {
    console.log(part)
    return (
      <div>
        <p>{part} {number}</p>  
      </div>
    )
  }
  
  const Total = ({parts}) => {
    return (
      <div>
        <p>
        Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}
        </p>
      </div>
    )
  } 

ReactDOM.render(<App />, document.getElementById('root'))
