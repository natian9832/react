import React, {useReducer} from 'react'


const reducer = (preState, action) => {
    console.log("reducer", preState, action)
    let newState = {...preState}
    switch (action.type) {
        case "natian-sub":
            newState.count--
            return newState
        case "natian-add":
            newState.count++
            return newState
        default:
            return newState
    }
}

const initialState = {
    count: 0
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: "natian-sub"
                })
            }}>-
            </button>
            {state.count}
            <button onClick={() => {
                dispatch({
                    type: "natian-add"
                })
            }}>+
            </button>
        </div>
    )
}
