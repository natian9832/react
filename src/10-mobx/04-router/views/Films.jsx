import React from 'react';
import {NavLink, Redirect, Route, Switch} from "react-router-dom";
import NowPlaying from "./films/NowPlaying";
import ComingSoon from "./films/ComingSoon";
import style from "./css/Film.module.css"


export default function Films() {
    return (
        <div>
            <div style={{height: "200px", background: "yellow"}}>
                大轮播
            </div>
            <ul>
                <li><NavLink to={"/films/nowplaying"} activeClassName={style["natianActive"]}>正在热映</NavLink></li>
                <li><NavLink to={"/films/comingsoon"} activeClassName={style["natianActive"]}>即将上映</NavLink></li>
            </ul>

            <Switch>
                <Route path={"/films/nowplaying"} component={NowPlaying}/>
                <Route path={"/films/comingsoon"} component={ComingSoon}/>
                <Redirect from={"/films"} to={"/films/nowplaying"} exact/>
            </Switch>
        </div>
    );
}

