const Header = (val) => {
  console.log(val)
  return(
    <>
      <h1>{val.x}</h1>
    </>
  )

}
const Part = (val2) =>{
  console.log(val2)
  return(
    <>
      <p>{val2.x} {val2.y}</p>
    </>
  )
}
const Content = (val) => {
  console.log(val)
  return(
    <>
      <p>
        <Part x={val.x1} y={val.y1}/>
        <Part x={val.x2} y={val.y2}/>
        <Part x={val.x3} y={val.y3}/>
      </p>
    </>
  )
}
const Total = (val) => {
  console.log(val)
  return(
    <>
      <p>Number of exercises {val.x+val.y+val.z}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10  
  }

  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header x={course}/>
      <Content x1={part1.name} y1={part1.exercises} x2={part2.name} y2={part2.exercises} x3={part3.name} y3={part3.exercises}/>
      <Total x={part1.exercises} y={part2.exercises} z={part3.exercises}/>
    </div>
  )
}

export default App