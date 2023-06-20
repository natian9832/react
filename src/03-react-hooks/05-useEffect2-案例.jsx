import React, {useEffect, useState} from 'react';
import axios from "axios";

export default function App() {
    const [type, setType] = useState(1)
    return (
        <div>
            <div>
                <ul>
                    <li onClick={() => {
                        setType(1)
                    }}>正在热映
                    </li>
                    <li onClick={() => {
                        setType(2)
                    }}>即将上映
                    </li>
                </ul>

                <FilmList type={type}/>
            </div>
        </div>
    );
}

function FilmList(props) {
    const [list, setList] = useState([])
    useEffect(() => {
        if (props.type === 1) {
            console.log("请求正在热映数据")
            axios({
                url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1338908",
                headers: {
                    "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"16797174042002120479866881","bc":"110100"}',
                    "X-Host": "mall.film-ticket.film.list"
                }
            }).then(res => {
                console.log(res.data.data["films"])
                setList(res.data.data["films"])
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
                setList(res.data.data["films"])
            })
        }
    }, [props.type])

    return (
        <div>
            <ul>
                {
                    list.map(item => <li key={item["filmId"]}>{item.name}</li>)
                }
            </ul>
        </div>
    )

}


