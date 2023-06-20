import React, {useEffect, useState} from 'react'
import axios from "axios"
import "./css/03-communication.css"

const GlobalContext = React.createContext()

export default function App() {
    const [filmList, setFilmList] = useState([])
    const [info, setInfo] = useState("")
    useEffect(() => {
        axios({
            url: "/data.json"
        }).then(res => {
            console.log(res.data.data["films"])
            setFilmList(res.data.data["films"])
        }).catch(err => {
            console.log(err)
        })
    }, [filmList])
    return (
        <GlobalContext.Provider value={{
            info: info,
            changeInfo: (value) => {
                setInfo(value)
            }
        }}>
            <div>
                {filmList.map(item =>
                    <FilmItem key={item["filmId"]}
                              {...item}/>)}
                <FilmDetail/>
            </div>
        </GlobalContext.Provider>
    )
}


function FilmItem(props) {
    const {name, poster, grade, synopsis} = props
    return (
        <GlobalContext.Consumer>
            {(value) => {
                return (
                    <div className={"filmItem"}>
                        <img src={poster} alt={""} onClick={() => {
                            value.changeInfo(synopsis)
                        }}/>
                        <h4>{name}</h4>
                        <div>观众评分: {grade}</div>
                    </div>
                )
            }}
        </GlobalContext.Consumer>
    )
}

function FilmDetail() {
    return (
        <GlobalContext.Consumer>
            {(value) => {
                return (
                    <div className={"filmDetail"}>
                        <div>{value.info}</div>
                    </div>
                )
            }}
        </GlobalContext.Consumer>
    )
}

