import React, {useEffect, useState} from 'react';
import IndexRouter from "./router/IndexRouter";
import Tabbar from "./components/Tabbar";
import "./views/css/App.css"
import {autorun} from "mobx";
import store from "./mobx/store";

export default function App() {
    const [isShow, setIsShow] = useState(false)
    useEffect(() => {
        autorun(() => {
            setIsShow(store.isTabbarShow)
        })
    }, [])
    return (
        <div>
            <IndexRouter>
                {isShow && <Tabbar/>}
            </IndexRouter>
        </div>
    );
}

