import React, {Component} from 'react'
import axios from "axios"
import "./css/02-maizuo.css"
import BetterScroll from "better-scroll"


export default class Cinema extends Component {
    constructor() {
        super()
        this.state = {
            cinemaList: [],
            oldList: []
        }
        //请求影院数据
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7526168",
            headers: {
                "X-Client-Info": '{"a": "3000", "ch": "1002", "v": "5.2.1", "e": "16797174042002120479866881"}',
                "X-Host": "mall.film-ticket.cinema.list"
            }
        }).then(res => {
            // console.log(res.data)
            this.setState({
                cinemaList: res.data.data.cinemas,
                oldList: res.data.data.cinemas
            })
            new BetterScroll(".natianWrapper")
        }).catch(err => {
            console.log(err)
        })
    }

    handleInput = (event) => {
        let newCinemaList = this.state.oldList.filter(item =>
            item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
            item.address.toUpperCase().includes(event.target.value.toUpperCase()))
        this.setState({
            cinemaList: newCinemaList
        })

    }

    render() {
        return (
            <div>
                <input onInput={this.handleInput}/>
                <div className={"natianWrapper"} style={{height: "400px", background: "yellow", overflow: "hidden"}}>
                    <div className={"natianContent"}>
                        {this.state.cinemaList.map(item =>
                            <dl key={item.cinemaId}>
                                <dt>{item.name}</dt>
                                <dd>{item.address}</dd>
                            </dl>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
