import React, {Component} from 'react'
import "./css/02-maizuo.css"
import Film from "./maizuo_component2/Film"
import Cinema from "./maizuo_component2/Cinema"
import Center from "./maizuo_component2/Center"
import Tabbar from "./maizuo_component2/Tabbar"
import Navbar from "./maizuo_component2/Navbar"

export default class App extends Component {
    state = {
        current: 0
    }

    which() {
        switch (this.state.current) {
            case 0:
                return <Film/>
            case 1:
                return <Cinema/>
            case 2:
                return <Center/>
            default:
                return <h1>没有~</h1>
        }
    }

    render() {
        return (
            <div>
                <Navbar event={(index) => {
                    this.setState({
                        current: index
                    })
                }}/>
                {this.which()}
                <Tabbar event={(index) => {
                    this.setState({
                        current: index
                    })
                }} current={this.state.current}/>
            </div>
        )
    }
}
