import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {NavLink, withRouter} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {List, Image, InfiniteScroll} from "antd-mobile";

export default function NowPlaying(props) {
    const [list, setList] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const count = useRef(0)
    const handleChangePage = (id) => {
        // window.location.href = "#/detail/" + id

        // props.history.push(`/detail/${id}`)

        //1.动态路由传参
        history.push(`/detail/${id}`)
        //2.query传参
        // props.history.push({pathname: "/detail", query: {filmId: id}})
        //3.state传参
        // history.push({pathname: "/detail", state: {filmId: id}})
    }
    const history = useHistory()
    const loadMore = () => {
        setHasMore(false)
        count.current++
        axios({
            url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=${count.current}&pageSize=10&type=1&k=1781935`,
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16871693097582756171153409","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            setList([...list, ...res.data.data["films"]])
            setHasMore(res.data.data["films"].length > 0)
        })
    }
    // useEffect(() => {
    //     axios({
    //         url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1781935",
    //         headers: {
    //             'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16871693097582756171153409","bc":"110100"}',
    //             'X-Host': 'mall.film-ticket.film.list'
    //         }
    //     }).then(res => {
    //         setList(res.data.data["films"])
    //     })
    // }, [])
    return (
        <div>
            <List>
                {
                    list.map(item => (
                        <List.Item
                            key={item["filmId"]}
                            prefix={
                                <Image
                                    src={item["poster"]}
                                    width={80}
                                />
                            }
                            description={(
                                <div>
                                    {
                                        item["grade"] ?
                                            <div>观众评分: {item["grade"]}</div> :
                                            <div style={{
                                                visibility: "hidden"
                                            }}>观众评分</div>
                                    }
                                    <div>主演: ***</div>
                                    <div>{item["nation"]} | {item["runtime"]}</div>
                                </div>
                            )}
                            onClick={() => handleChangePage(item["filmId"])}
                        >
                            {item.name}
                        </List.Item>
                    ))
                }
            </List>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore}/>
        </div>
    );
}

function FilmItem(props) {
    // console.log(props)
    let {name, filmId} = props
    return (
        <li onClick={() => props.history.push(`/detail/${filmId}`)}>
            {/*声明式导航*/}
            {/*<NavLink to={"/detail/" + item["filmId"]}>{item["name"]}</NavLink>*/}
            {name}
        </li>
    )
}

const WithFilmItem = withRouter(FilmItem)

