import React, {Component} from 'react'

export default class App extends Component {
    state = {
        isShow: true
    }
    render() {
        return (
            <div>
                <Navbar event={() => {
                    this.setState({
                        isShow: !this.state.isShow
                    })
                }}/>
                {this.state.isShow && <Sidebar/>}
            </div>
        )
    }
}

class Navbar extends Component {
    render() {
        return (
            <div style={{background: "red"}}>
                <button onClick={() => {
                    this.props.event()
                }}>click</button>
                <span>Navbar</span>
            </div>
        )
    }
}

class Sidebar extends Component {
    render() {
        return (
            <div style={{background: "yellow", width: "200px"}}>
                <ul>
                    <li>北京</li>
                    <li>南京</li>
                    <li>上海</li>
                    <li>和县</li>
                </ul>
            </div>
        )
    }
}
