import React, {Component} from 'react'
import axios from "axios"

export default class App extends Component {
    state = {
        name: "那天",
    }

    render() {
        console.log("render")
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        name: "酒敬天"
                    })
                }}>click
                </button>
                <span id={"name"}>{this.state.name}</span>
            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState) {
        return JSON.stringify(this.state) !== JSON.stringify(nextState.name)
    }

}
