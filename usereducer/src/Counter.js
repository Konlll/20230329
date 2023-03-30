import { React, useReducer } from 'react'

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    const increment = () => {
        dispatch({ type: ACTIONS.INCREMENT })
    }

    const decrement = () => {
        dispatch({ type: ACTIONS.DECREMENT })
    }

    return (
        <>
            <button onClick={decrement}>-</button>
            <span>{state.count}</span>
            <button onClick={increment}>+</button>
        </>
    );
}

export default Counter;