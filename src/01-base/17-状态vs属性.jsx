import React, {Component} from 'react'

export default class App extends Component {
    state = {
        text: 1
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        text: this.state.text + 1
                    })
                }}>change-父</button>
                <Child text={this.state.text}/>
            </div>
        )
    }
}

class Child extends Component {
    render() {
        return (
            <div>
                {this.props.text}
            </div>
        )
    }
}
