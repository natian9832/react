import React, {Component} from 'react'
import axios from "axios"
import "./css/03-communication.css"

export default class App extends Component {
    constructor() {
        super()

        this.state = {
            filmList: [],
            text: "这里显示电影介绍"
        }

        axios({
            // url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=6245283",
            // headers: {
            //     "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16797174042002120479866881","bc":"110100"}',
            //     "X-Host": "mall.film-ticket.film.list"
            // }
            url: "/data.json"
        }).then(res => {
            console.log(res.data)
            this.setState({
                filmList: res.data.data.films
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                {this.state.filmList.map(item =>
                    <FilmItem key={item["filmId"]}
                              event={(value) => {
                                  this.setState({text: value})
                              }}
                              {...item}/>)}

                <FilmDetail text={this.state.text}/>
            </div>
        )
    }
}

class FilmItem extends Component {
    render() {
        const {name, poster, grade, synopsis} = this.props
        return (
            <div className={"filmItem"} onClick={() => {
                this.props.event(synopsis)
            }}>
                <img src={poster} alt={""}/>
                <h4>{name}</h4>
                <div>观众评分: {grade}</div>
            </div>
        )
    }
}

class FilmDetail extends Component {
    render() {
        return (
            <div className={"filmDetail"}>
                <div>{this.props.text}</div>
            </div>
        )
    }
}
