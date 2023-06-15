import React, {Component} from 'react'

export default class App extends Component {
    a = 1
    render() {
        return (
            <div>
                <input/>
                <button onClick={() => {
                    console.log("add1")
                }}>add1</button>
                <button onClick={this.handleClick2}>add2</button>
                <button onClick={this.handleClick3}>add3</button>
                <button onClick={() => {
                    this.handleClick4()
                }}>add4</button>
            </div>
        )
    }

    handleClick2() {
        console.log("add2")
    }

    handleClick3 = () => {
        console.log("add3")
    }

    handleClick4 = () => {
        console.log("add4")
    }
}
