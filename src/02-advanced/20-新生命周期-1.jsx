import React, {Component} from 'react'

export default class App extends Component {
    state = {
        name: "jiujingtian",
        age: 27
    }
    static getDerivedStateFromProps(nextProps, nextState) {
        console.log("getDerivedStateFromProps")
        return {
            name: nextState.name.substring(0, 1).toUpperCase() + nextState.name.substring(1)
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        name: "natian"
                    })
                }}>
                    click
                </button>
                app-{this.state.name}-{this.state.age}
            </div>
        )
    }
}
