import React, {Component} from 'react'
import axios from "axios"

export default class App extends Component {

    state = {
        type: 1
    }

    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => {
                        this.setState({
                            type: 1
                        })
                    }}>正在热映
                    </li>
                    <li onClick={() => {
                        this.setState({
                            type: 2
                        })
                    }}>即将上映
                    </li>
                </ul>

                <FilmList type={this.state.type}/>
            </div>
        )
    }
}

class FilmList extends Component {
    state = {
        list: []
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map(item => <li key={item["filmId"]}>{item.name}</li>)
                    }
                </ul>
            </div>
        )
    }

    static getDerivedStateFromProps(nextProps, nextState) {
        if (nextProps.type === 1) {
            console.log("请求正在热映数据")
            axios({
                url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1338908",
                headers: {
                    "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16797174042002120479866881","bc":"110100"}',
                    "X-Host": "mall.film-ticket.film.list"
                }
            }).then(res => {
                return {
                    list: res.data.data["films"]
                }
            })
        } else {
            console.log("请求即将上映数据")
            axios({
                url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=9649408",
                headers: {
                    "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16797174042002120479866881","bc":"110100"}',
                    "X-Host": "mall.film-ticket.film.list"
                }
            }).then(res => {
                return {
                    list: res.data.data["films"]
                }
            })
        }
    }


}
