import React from "./core/React.js"

let count = 10
let props = {
  id: '111111'
}

function Counter() {
  const handleAdd = () => {
    console.log('add')
    props = {}
    count++
    React.update()
  }

  return (
    <div {...props}>
      count: {count}
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

function CounterContainer() {
  return (
    <div>
      counter container
      <Counter num={10}/>
    </div>
  )
}

function App() {
  return (
    <div>
      hi-mini-react
      <CounterContainer/>
    </div>
  )
}

export default App