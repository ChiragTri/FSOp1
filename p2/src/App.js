import { useState } from "react"

const Button = ({handleClick, text}) => (<button onClick={handleClick}>{text}</button>)

const Statistics = (props) => {
  const sum = () => (props.clickGood + props.clickNeutral + props.clickBad)
  const average = () => (props.clickGood - props.clickBad) / sum()
  const percentPos = () => (props.clickGood) / sum()

  if (sum() == 0){
    return(
      <div>
        <h1>
          statistics
        </h1>
        No feedback given
      </div>
    )
  }
  else{
    return(
      <div>
        <h1>
          statistics
        </h1>
        good {props.clickGood} <br></br>
        neutral {props.clickNeutral} <br></br>
        bad {props.clickBad} <br></br>
        all {sum()} <br></br>
        average {average()} <br></br>
        positve {percentPos()} <br></br>
      </div>
    )
  }
}

const App = () => {
  const [clicks, setClicks] = useState({good:0, neutral:0, bad:0})

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
      <Statistics clickGood = {clicks.good} clickBad = {clicks.bad} clickNeutral = {clicks.neutral} />
    </div>
  )
}

export default App