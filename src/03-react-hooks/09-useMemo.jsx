import React, {useEffect, useMemo, useState} from 'react';
import axios from "axios";

export default function App() {
    let [text, setText] = useState("")
    let [cinemaList, setCinemaList] = useState([])

    useEffect(() => {
        //发送请求
        axios({
            method: "get",
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=1078825",
            headers: {
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16797174042002120479866881"}',
                "X-Host": "mall.film-ticket.cinema.list"
            }
        }).then(res => {
            setCinemaList(res.data.data.cinemas)
        })
    }, [])

    const getCinemaList = useMemo(() =>
        cinemaList.filter(item =>
            item.name.toUpperCase().includes(text.toUpperCase()) ||
            item.address.toUpperCase().includes(text.toUpperCase())), [text, cinemaList])
    return (
        <div>
            <input value={text} onChange={(event) => {
                setText(event.target.value)
            }}/>
            {
                getCinemaList.map(item => <dl key={item.cinemaId}>
                    <dt>{item.name}</dt>
                    <dd>{item.address}</dd>
                </dl>)
            }
        </div>
    )

}

