import React, {Component} from 'react'

export default class App extends Component {
    state = {
        isCreated: true
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        isCreated: !this.state.isCreated
                    })
                }}>
                    click
                </button>
                {this.state.isCreated && <Child/>}
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

    componentDidMount() {
        window.onresize = () => {
            console.log("resize")
        }
    }


    componentWillUnmount() {
        console.log("will unmount")
        window.onresize = null
    }

}
