import React from "./core/React.js"

function Counter({num}) {
  return (
    <div>count: {num}</div>
  )
}

function CounterContainer() {
  return (
    <div>
      counter container
      <Counter num={10}/>
      <Counter num={20}/>
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