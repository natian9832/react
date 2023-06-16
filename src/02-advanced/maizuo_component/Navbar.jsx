import React, {Component} from 'react'

export default class Navbar extends Component {
    render() {
        const {event} = this.props
        return (
            <div style={{background: "yellow", textAlign: "center", overflow: "hidden"}}>
                <button style={{float: "left"}} onClick={() => {
                    event(0)
                }}>back
                </button>
                <span>卖座电影</span>
                <button style={{float: "right"}} onClick={() => {
                    event(2)
                }}>center
                </button>
            </div>
        )
    }
}
