import React, {Component} from 'react'
import axios from "axios"
import "./css/03-communication.css"

let bus = {
    list: [],
    subscribe(callback) {
        this.list.push(callback)
    },
    publish(value) {
        this.list.forEach(callback => callback && callback(value))
    }
}
export default class App extends Component {
    constructor() {
        super()

        this.state = {
            filmList: [],
        }

        axios({
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
                              {...item}/>)}

                <FilmDetail/>
            </div>
        )
    }
}

class FilmItem extends Component {
    render() {
        const {name, poster, grade, synopsis} = this.props
        return (
            <div className={"filmItem"}>
                <img src={poster} alt={""} onClick={() => {
                    bus.publish(synopsis)
                }}/>
                <h4>{name}</h4>
                <div>观众评分: {grade}</div>
            </div>
        )
    }
}

class FilmDetail extends Component {
    constructor() {
        super()
        this.state = {
            info: ""
        }
        bus.subscribe((value) => {
            this.setState({
                info: value
            })
        })
    }
    render() {
        return (
            <div className={"filmDetail"}>
                <div>{this.state.info}</div>
            </div>
        )
    }
}
