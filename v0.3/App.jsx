import React from "./core/React.js"

let showBar = false

function Counter() {
  const [count, setCount] = React.useState(10)
  const [count2, setCount2] = React.useState(20)

  React.useEffect(() => {
    console.log('Counter init')

    return () => {
      console.log('cleanup 0')
    }
  }, [])

  React.useEffect(() => {
    console.log('count update')

    return () => {
      console.log('cleanup 1')
    }
  }, [count])

  const handleAdd = () => {
    setCount((prevCount) => prevCount + 1)
    // setCount2((prevCount2) => prevCount2 + 1)
    // setCount2(50)
    setCount2(() => 50)
  }
  return (
    <div>
      count:{count}
      <div>count2:{count2}</div>
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