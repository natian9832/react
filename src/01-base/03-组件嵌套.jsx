import React, {Component} from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Swiper/>
                <h1>组件嵌套</h1>
                <Tabbar/>
            </div>
        )
    }
}

class Navbar extends Component {
    render() {
        return (
            <div>
                navbar
                <Child/>
            </div>
        )
    }
}

function Swiper() {
    return (
        <div>swiper</div>
    )
}

const Tabbar = () => <div>tabbar</div>

const Child = () => <div>child</div>
