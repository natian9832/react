import React, {Component} from 'react'
import BetterScroll from "better-scroll"

export default class App extends Component {

    state = {
        list: ["北京", "南京", "上海", "和县", "深圳", "杭州", "广州"]
    }

    componentDidMount() {
        new BetterScroll("#wrapper")
    }

    render() {
        return (
            <div>
                <div id={"wrapper"} style={{height: "100px", background: "yellow", overflow: "hidden"}}>
                    <ul>
                        {this.state.list.map(item => <li key={item}>{item}</li> )}
                    </ul>
                </div>
            </div>
        )
    }
}
