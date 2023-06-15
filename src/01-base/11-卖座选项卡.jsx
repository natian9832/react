import React, {Component} from 'react'
import "./css/02-maizuo.css"
import Film from "./maizuo_component/Film"
import Cinema from "./maizuo_component/Cinema"
import Center from "./maizuo_component/Center"

export default class App extends Component {
    state = {
        list: [
            {
                "id": 1,
                "text": "电影"
            },
            {
                "id": 2,
                "text": "影院"
            },
            {
                "id": 3,
                "text": "我的"
            }
        ],
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
                {/*{this.state.current === 0 && <Film/>}*/}
                {/*{this.state.current === 1 && <Cinema/>}*/}
                {/*{this.state.current === 2 && <Center/>}*/}

                {this.which()}

                <ul>
                    {this.state.list.map((item, index) =>
                        <li key={item.id}
                            className={this.state.current === index ? "active" : ""}
                            onClick={() => this.handleClick(index)}>
                            {item.text}</li>
                    )}
                </ul>
            </div>
        )
    }

    handleClick = (index) => {
        this.setState({
            current: index
        })
    }
}
