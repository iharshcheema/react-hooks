// useState() = Re-renders the component when the state value changes

// useRef()   = "use Reference" Does not cause re-renders when its value changes.
//                     1. Accessing/Interacting with DOM elements
//                     2. Handling Focus, Animations, and Transitions
//                     3. Managing Timers and Intervals

import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  // whenever the number updates, the component will re render
  // const [number,setNumber] = useState(0)

  // instead  we ll use use ref
  const ref = useRef(0)
  // use ref returns a object with a current property
  // current property is 0 as we passed 0
  console.log(ref);

  // use effect will run everytime the component re renders
  useEffect(() => {
    console.log('component rendered ')
  })

  const handleClick = () => {
    // setNumber(number => number+1)
    ref.current ++
    console.log(ref.current)
  }

  return (
    <>
      <button onClick={handleClick}>click me </button>
    </>
  )
}
export default App
