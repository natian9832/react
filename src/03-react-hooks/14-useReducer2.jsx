import React, {useContext, useReducer} from 'react'

const initialState = {
    a: 1,
    b: 2
}

const reducer = (prevState, action) => {
    let newState = {...prevState}
    switch (action.type) {
        case "change-a":
            newState.a = action["value"]
            return newState
        case "change-b":
            newState.b = action["value"]
            return newState
        default:
            return newState
    }
}

const GlobalContext = React.createContext()

export default function App() {
    const [state, dispatch] =useReducer(reducer, initialState)
    return (
        <GlobalContext.Provider value={{
            state,
            dispatch
        }}>
            <div>
                <Child1/>
                <Child2/>
                <Child3/>
            </div>
        </GlobalContext.Provider>
    )
}

function Child1() {
    const {state, dispatch} = useContext(GlobalContext)
    return (
        <div style={{background: "red"}}>
            <button onClick={() => {
                dispatch({
                    type: "change-a",
                    value: state.a + 1
                })
            }}>改变a</button>
            <button onClick={() => {
                dispatch({
                    type: "change-b",
                    value: state.b + 1
                })
            }}>改变b</button>
        </div>
    )
}

function Child2() {
    const {state} = useContext(GlobalContext)
    return (
        <div style={{background: "yellow"}}>
            child2-{state.a}
        </div>
    )
}

function Child3() {
    const {state} = useContext(GlobalContext)
    return (
        <div style={{background: "gray"}}>
            child3-{state.b}
        </div>
    )
}
