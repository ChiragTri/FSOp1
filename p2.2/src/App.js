import { useState } from "react"
// import "./minimal-table.css"

const Button = ({handleClick, text}) => (<button onClick={handleClick}>{text}</button>)

function getRandomFunc(max) {
  return Math.floor(Math.random()*(max));
}

var arr = new Array(5).fill(0)

const App = () => {
  const anecdotes =[
    "Adding manpower to a late software project makes it later!",
    "The best way to get a project done faster is to start sooner",
    "Before software can be reusable it first has to be usable.",
    "Even the best planning is not so omniscient as to get it right the first time.",
    "How does a project get to be a year late?... One day at a time."
  ]
  
  // const [selected, setSelected] = useState(0)
  // const [voteArr, setVoteArr] = useState([...arr])

  const [clicks, setClicks] = useState({
    index: 0,
    voteArr: [...arr]
  })

  const handleSelected = () => {
    // console.log("anecdote num " + (clicks.index) + " has " + (clicks.voteArr[clicks.index]) + " votes")
    
    const newClicks = {
      index: getRandomFunc(5),
      voteArr: [...clicks.voteArr]
    }
    setClicks(newClicks)
  }

  const handleVote = () => {
    // console.log("anecdote num " + (clicks.index) + " has " + (clicks.voteArr[clicks.index]) + " votes")
    const newArr = [...clicks.voteArr]
    newArr[clicks.index] += 1    
    
    const newClicks = {
      index: clicks.index,
      voteArr: newArr
    }
    setClicks(newClicks)
  }

  return(
    <div>
      <font size="4">
        {anecdotes[clicks.index]} <br></br>
        has {clicks.voteArr[clicks.index]} votes <br></br>
      </font>
      <Button handleClick = {handleVote} text = "vote"/>
      <Button handleClick = {handleSelected} text = "next anecdote"/>
    </div>
  )
}

export default App




// import { useState } from "react"
// // import "./minimal-table.css"

// const Button = ({handleClick, text}) => (<button onClick={handleClick}>{text}</button>)

// function getRandomFunc(max) {
//   return Math.floor(Math.random()*(max));
// }

// var arr = new Array(5).fill(0)

// const App = () => {
//   const anecdotes =[
//     "Adding manpower to a late software project makes it later!",
//     "The best way to get a project done faster is to start sooner",
//     "Before software can be reusable it first has to be usable.",
//     "Even the best planning is not so omniscient as to get it right the first time.",
//     "How does a project get to be a year late?... One day at a time."
//   ]
  
//   const [selected, setSelected] = useState(0)
//   const [voteArr, setVoteArr] = useState([...arr])

//   const handleSelected = () => {
//     console.log("anecdote num " + (selected) + " has " + (voteArr[selected]) + " votes")
//     setSelected(getRandomFunc(5))
//   }

//   const handleVote = () => {
//     console.log("anecdote num " + (selected) + " has " + (voteArr[selected]) + " votes")
//     const newArr = [...voteArr]
//     newArr[selected] += 1
//     setVoteArr(newArr)
//   }

//   return(
//     <div>
//       <font size="4">
//         {anecdotes[selected]} <br></br>
//         has {voteArr[selected]} votes <br></br>
//       </font>
//       <Button handleClick = {handleVote} text = "vote"/>
//       <Button handleClick = {handleSelected} text = "next anecdote"/>
//     </div>
//   )
// }

// export default App