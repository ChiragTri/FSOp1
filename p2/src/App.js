import { useState } from "react"

const Button = ({handleClick, text}) => (<button onClick={handleClick}>{text}</button>)

const App = () => {
  const [clicks, setClicks] = useState(
    {good:0, neutral:0, bad:0}
  )

  const handleGood = () => {setClicks({...clicks, good: clicks.good + 1})}
  const handleNeutral = () => {setClicks({...clicks, neutral: clicks.neutral + 1})}
  const handleBad = () => {setClicks({...clicks, bad: clicks.bad + 1})}

  return(
    <div>
      <h1>
        give feedback
      </h1>
      <Button handleClick = {handleGood} text = "good"/>
      <Button handleClick = {handleNeutral} text = "neutral"/>
      <Button handleClick = {handleBad} text = "bad"/>
      <br></br>
      <h1>
        statistics
      </h1>
      good {clicks.good} <br></br>
      neutral {clicks.neutral} <br></br>
      bad {clicks.bad} <br></br>
    </div>
  )




}

export default App