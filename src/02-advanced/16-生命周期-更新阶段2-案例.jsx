import React, {Component} from 'react'
import {number} from "prop-types"

export default class App extends Component {
    state = {
        list: ["北京", "南京", "上海", "和县", "杭州", "深圳", "广州", "重庆", "武汉", "成都"],
        current: 0
    }

    render() {
        return (
            <div>
                <input type={"number"} onChange={(event) => {
                    this.setState({
                        current: Number(event.target.value)
                    })
                }} value={this.state.current}/>
                <div style={{overflow: "hidden"}}>
                    {
                        this.state.list.map((item, index) =>
                            <Box key={item} current={this.state.current} index={index}/>)
                    }
                </div>
            </div>
        )
    }


}

class Box extends Component {
    render() {
        console.log("render")
        return (
            <div style={{
                width: "100px",
                height: "100px",
                border: this.props.current !== this.props.index ? "1px solid gray" : "1px solid red",
                margin: "10px",
                float: "left"
            }}>

            </div>
        )
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.current === this.props.index || nextProps.current === nextProps.index
    }
}
