import React, {Component} from 'react'

export default class App extends Component {
    state = {
        text: "那天"
    }
    render() {
        return (
            <div>
                {this.state.text}
                <button onClick={() => {
                    this.setState({
                        text: "酒敬天"
                    })
                }}>
                    click
                </button>
                <Child text={this.state.text}/>
            </div>
        )
    }
}

class Child extends Component {
    render() {
        return (
            <div>
                child
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        console.log("will receive")
    }

}
