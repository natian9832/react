import React from 'react';
import {NavLink, withRouter} from "react-router-dom";
import style from "./Tabbar.module.css"
import {Badge, TabBar} from "antd-mobile";
import {
    AppOutline,
    MessageOutline,
    MessageFill,
    UnorderedListOutline,
} from 'antd-mobile-icons'

export default withRouter(function Tabbar(props) {
    const tabs = [
        {
            key: '/films',
            title: '电影',
            icon: <AppOutline/>,
        },
        {
            key: '/cinemas',
            title: '影院',
            icon: <UnorderedListOutline/>,
        },
        {
            key: '/center',
            title: '我的',
            icon: (active: boolean) =>
                active ? <MessageFill/> : <MessageOutline/>,
        }
    ]
    return (
        <div className={style["tabbar"]}>
            {/*<ul>*/}
            {/*    <li><NavLink to={"/films"} activeClassName={style["natianActive"]}>电影</NavLink></li>*/}
            {/*    <li><NavLink to={"/cinemas"} activeClassName={style["natianActive"]}>影院</NavLink></li>*/}
            {/*    <li><NavLink to={"/center"} activeClassName={style["natianActive"]}>我的</NavLink></li>*/}
            {/*</ul>*/}

            <TabBar activeKey={"/" + props.location.pathname.split("/")[1]}
                    onChange={(path) => {
                        props.history.push(path)
                    }}>
                {tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title}/>
                ))}
            </TabBar>
        </div>
    );
})

