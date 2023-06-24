import React, {useEffect, useState} from 'react';
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import NowPlaying from "./films/NowPlaying";
import ComingSoon from "./films/ComingSoon";
import style from "./css/Film.module.css"
import {Swiper, Tabs} from "antd-mobile";
import axios from "axios";


export default function Films(props) {
    const [loopList, setLoopList] = useState([])
    useEffect(() => {
        axios({
            url: "https://m.maizuo.com/gateway?type=2&cityId=110100&k=5032824",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16871693097582756171153409","bc":"310100"}',
                'X-Host': 'mall.cfg.common-banner'
            }
        }).then(res => {
            console.log(res.data)
            setLoopList(["/1.png", "/2.png", "/3.png"])
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            <Swiper autoplay={true} loop={true}>
                {loopList.map(item =>
                    <Swiper.Item><img src={item} alt={""} style={{width: "100%", height: "200px"}}/></Swiper.Item>)}

            </Swiper>
            {/*<ul>*/}
            {/*    <li><NavLink to={"/films/nowplaying"} activeClassName={style["natianActive"]}>正在热映</NavLink></li>*/}
            {/*    <li><NavLink to={"/films/comingsoon"} activeClassName={style["natianActive"]}>即将上映</NavLink></li>*/}
            {/*</ul>*/}
            <div style={{position: "sticky", top: "0", background: "white", zIndex: "100"}}>
                <Tabs activeKey={props.location.pathname}
                      onChange={(path) => {
                          props.history.push(path)
                      }}>
                    <Tabs.Tab title='正在热映' key='/films/nowplaying'/>
                    <Tabs.Tab title='即将上映' key='/films/comingsoon'/>
                </Tabs>
            </div>

            <Switch>
                <Route path={"/films/nowplaying"} component={NowPlaying}/>
                <Route path={"/films/comingsoon"} component={ComingSoon}/>
                <Redirect from={"/films"} to={"/films/nowplaying"} exact/>
            </Switch>
        </div>
    );
}

