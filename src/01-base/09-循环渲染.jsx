import React, {Component} from 'react'

export default class App extends Component {
    state = {
        list: [
            {
                "id": 1,
                "city": "北京"
            },
            {
                "id": 2,
                "city": "南京"
            },
            {
                "id": 3,
                "city": "上海"
            },
            {
                "id": 4,
                "city": "和县"
            }
        ]
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map(item => <li key={item.id}>{item.city}</li>)}
                </ul>
            </div>
        )
    }
}
