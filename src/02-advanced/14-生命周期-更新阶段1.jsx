import React, {Component} from 'react'
import axios from "axios"

export default class App extends Component {
    state = {
        name: "那天",
        list: []
    }

    render() {
        console.log("render")
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        name: this.state.name === "那天" ? "酒敬天" : "那天"
                    })
                }}>click
                </button>
                <span id={"name"}>{this.state.name}</span>
                <div id={"wrapper"}>
                    <ul>
                        {this.state.list.map(item => <li key={item["filmId"]}>{item.name}</li>)}
                    </ul>
                </div>
            </div>
        )
    }

    componentDidMount() {
        axios({
            url: "/data.json",
            method: "get"
        }).then(res => {
            // this.setState({
            //     list: res.data.data["films"]
            // })
        }).catch(err => {
            console.log(err)
        })
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("will update", document.querySelector("#name").innerHTML)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("did update", document.querySelector("#name").innerHTML)
    }
}
