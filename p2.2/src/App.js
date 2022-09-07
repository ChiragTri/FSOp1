import { useState } from "react"
// import "./minimal-table.css"

const Button = ({handleClick, text}) => (<button onClick={handleClick}>{text}</button>)

function getRandomFunc(max) {
  return Math.floor(Math.random()*(max));
}

const App = () => {
  const anecdotes =[
    "Adding manpower to a late software project makes it later!",
    "The best way to get a project done faster is to start sooner",
    "Before software can be reusable it first has to be usable.",
    "Even the best planning is not so omniscient as to get it right the first time.",
    "How does a project get to be a year late?... One day at a time."
  ]
  
  const [selected, setSelected] = useState(0)

  const handleSelected = () => {
    console.log(selected)
    setSelected(getRandomFunc(5))
  }

  return(
    <div>
      <h3>
        {anecdotes[selected]}
      </h3>
      <Button handleClick = {handleSelected} text = "next anecdote"/>
    </div>
  )
}

export default App