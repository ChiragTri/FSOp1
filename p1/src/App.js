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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header x={course}/>
      <Content x1={part1} y1={exercises1} x2={part2} y2={exercises2} x3={part3} y3={exercises3}/>
      <Total x={exercises1} y={exercises2} z={exercises3}/>
    </div>
  )
}

export default App