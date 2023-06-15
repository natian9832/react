import React, {Component} from 'react'

export default class App extends Component {
    // state = {
    //     name: "收藏",
    //     isShow: true
    // }

    constructor() {
        super()
        this.state = {
            name: "收藏",
            isShow: true
        }
    }

    render() {
        return (
            <div>
                {this.state.isShow && <h1>hello world</h1>}

                <button onClick={() => {
                    // this.state.name = "取消收藏"
                    this.setState({
                        name: this.state.isShow ? "收藏" : "取消收藏",
                        isShow: !this.state.isShow
                    })
                }}>{this.state.name}</button>
            </div>
        )
    }
}
