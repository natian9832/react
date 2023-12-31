import React from 'react';
import {NavLink} from "react-router-dom";
import style from "./Tabbar.module.css"

export default function Tabbar() {
    return (
        <div className={style["tabbar"]}>
            <ul>
                <li><NavLink to={"/films"} activeClassName={style["natianActive"]}>电影</NavLink></li>
                <li><NavLink to={"/cinemas"} activeClassName={style["natianActive"]}>影院</NavLink></li>
                <li><NavLink to={"/center"} activeClassName={style["natianActive"]}>我的</NavLink></li>
            </ul>
        </div>
    );
}

