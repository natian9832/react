import React, {Component} from 'react'

export default class App extends Component {
    state = {
        count: 1
    }

    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={() => this.handleAdd1()}>add1</button>
                <button onClick={() => this.handleAdd2()}>add2</button>
                <button onClick={() => this.handleAdd3()}>add3</button>
            </div>
        )
    }

    handleAdd1 = () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }

    handleAdd2 = () => {
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)
        }, 0)
    }

    handleAdd3 = () => {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state.count)
        })
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state.count)
        })
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state.count)
        })
    }
}
