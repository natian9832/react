import React, {Component} from 'react'

export default class Tabbar extends Component {
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

    render() {
        const {event} = this.props
        return (
            <div>
                <ul>
                    {this.state.list.map((item, index) =>
                        <li key={item.id}
                            className={this.state.current === index ? "active" : ""}
                            onClick={() => this.handleClick(index, event)}>
                            {item.text}</li>
                    )}
                </ul>
            </div>
        )
    }

    handleClick = (index, event) => {
        this.setState({
            current: index
        })
        event(index)
    }
}
