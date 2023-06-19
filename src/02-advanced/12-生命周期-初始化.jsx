import React, {Component} from 'react'

export default class App extends Component {

    state = {
        name: "那天"
    }

    UNSAFE_componentWillMount() {
        console.log("first will mount", this.state.name)
    }

    componentDidMount() {
        console.log("first did mount")
    }

    render() {
        console.log("render")
        return (
            <div>
                app
            </div>
        )
    }
}
