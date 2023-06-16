import React, {Component} from 'react'
import "./css/02-maizuo.css"
import Film from "./maizuo_component/Film"
import Cinema from "./maizuo_component/Cinema"
import Center from "./maizuo_component/Center"
import Tabbar from "./maizuo_component/Tabbar"
import Navbar from "./maizuo_component/Navbar"

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
                }} index={this.state.current}/>
            </div>
        )
    }


}
