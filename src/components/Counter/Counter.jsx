import { useEffect, useState, useReducer } from 'react'

// const pinkRGB = `rgb(236, 72, 153)`
const initialState = {
  count: 0,
  color: `rgb(236, 72, 153)`,
}

const reducer = (state, action) => {
  const checkColor = (count) => {
    console.log(count)
    let color
    if (count > 0) {
      color = `rgb(52, 211, 153)`
    } else if (count < 0) {
      color = `rgb(239, 68, 68)`
    } else if (count === 0) {
      color = `rgb(236, 72, 153)`
    }
    return color
  }

  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1,
        color: checkColor(state.count + 1),
      }
    case 'decrement':
      return {
        count: state.count - 1,
        color: checkColor(state.count - 1),
      }
    case 'reset':
      return {
        count: 0,
        color: checkColor(0),
      }
    default:
      throw new Error()
  }
}

export default function Counter() {
  // const [count, setCount] = useState(0)
  // const [currentColor, setCurrentColor] = useState(pinkRGB)

  // useEffect(() => {
  //   if (count === 0) {
  //     setCurrentColor(pinkRGB)
  //   }

  //   if (count > 0) {
  //     setCurrentColor(`rgb(52, 211, 153)`)
  //   }

  //   if (count < 0) {
  //     setCurrentColor(`rgb(239, 68, 68)`)
  //   }
  // }, [count])

  // const increment = () => {
  //   setCount((prevState) => prevState + 1)
  // }

  // const decrement = () => {
  //   setCount((prevState) => prevState - 1)
  // }

  // const reset = () => {
  //   setCount(0)
  // }
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleIncrement = () => {
    dispatch({ type: 'increment' })
  }
  const handleDecrement = () => {
    dispatch({ type: 'decrement' })
  }
  const handleReset = () => {
    dispatch({ type: 'reset' })
  }

  return (
    <main className="bg-black bg-opacity-90 min-h-screen flex flex-col items-center justify-center text-4xl text-pink-500">
      <h1 className="mb-5" style={{ color: state.color }}>
        {state.count}
      </h1>
      <div className="flex w-1/2 justify-around">
        <button
          className="text-green-400 border-2 border-green-400 p-3"
          type="button"
          onClick={handleIncrement}
          aria-label="increment"
        >
          Increment
        </button>
        <button
          className="text-red-500 border-2 border-red-500 p-2"
          type="button"
          onClick={handleDecrement}
          aria-label="decrement"
        >
          Decrement
        </button>
        <button
          className="text-pink-500 border-2 border-pink-500 p-2"
          type="button"
          aria-label="reset"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </main>
  )
}
