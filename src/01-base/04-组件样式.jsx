import React, {Component} from 'react'
import "./css/01-index.css"

export default class App extends Component {

    state = {
        name: "那天"
    }

    func = () => {
        this.setState({
            name: this.state.name === "那天" ? "酒敬天" : "那天"
        })
    }

    render() {
        // const name = "酒敬天"
        return (
            <div>
                {/*{10 + 20} - {name}*/}
                {/*<br/>*/}
                {/*{name === "那天" ? <h1>{name}</h1> : <h2>{name}</h2>}*/}
                {/*<div className={"active"}>{name}</div>*/}

                <button onClick={this.func}>click</button>
                <h1>{this.state.name}</h1>

                <label htmlFor={"username"}>用户名:</label>
                <input type={"text"} id={"username"}/>
            </div>
        )
    }
}
