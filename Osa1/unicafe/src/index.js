import React, { useState }  from 'react';
import ReactDOM from 'react-dom';


const History = (props) => {
    if (props.good.length === 0) {
      return (
        <div>
          the app is used by pressing the buttons
        </div>
      )
    }
  
    return (
      <div>
          <p>good  {props.good}</p>
        
      </div>
    )
  }
  
  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [allStates, setAll] = useState([])

    const handleGoodClick = () => {
        setAll(allStates.concat('G'))
        setGood(good + 1)
      }
    
      const handleNeutralClick = () => {
        setAll(allStates.concat('N'))
        setNeutral(neutral + 1)
      }

      const handleBadClick = () => {
        setAll(allStates.concat('N'))
        setBad(bad + 1)
      }
    
      return (
        <div>
          <div>
            {good}
            <Button onClick={handleGoodClick} text='good' />
            {neutral}
            <Button onClick={handleNeutralClick} text='neutral' />
            <Button onClick={handleBadClick} text='bad' />
            {bad}
            <History good={good} />
          </div>
        </div>
      )
}
ReactDOM.render(<App />, document.getElementById('root'));