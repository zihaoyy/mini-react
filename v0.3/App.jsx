import React from "./core/React.js"

let count = 10
let showBar = false

function Counter() {
  const update = React.update()
  const handleAdd = () => {
    console.log('counter added')
    count++
    update()
  }
  return (
    <div>
      count:{count}
      <button onClick={handleAdd}>add</button>
    </div>
  )
}

function ShowBar() {
  function Foo() {
    return (
      <div>
        foo
        <div>child1</div>
        <div>child2</div>
      </div>
    )
  }

  const bar = (
    <p>bar</p>
  )
  const update = React.update()
  const handleShowBar = () => {
    console.log('showBar clicked')
    showBar = !showBar
    update()
  }

  return (
    <div>
      {showBar ? bar : <Foo/>}
      {showBar && bar}
      <button onClick={handleShowBar}>show bar</button>
    </div>
  )
}

function App() {
  console.log('App rendered')
  return (
    <div>
      hi-mini-react
      <Counter/>
      <ShowBar/>
    </div>
  )
}

export default App