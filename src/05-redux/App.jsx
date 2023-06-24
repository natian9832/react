import React, {Component, useEffect, useState} from 'react';
import IndexRouter from "./router/IndexRouter";
import Tabbar from "./components/Tabbar";
import "./views/css/App.css"
import store from "./redux/store";

export default function App() {
    const [show, setShow] = useState(store.getState())
    useEffect(() => {
        store.subscribe(() => {
            // console.log("app中订阅", store.getState())
            setShow(store.getState()["TabbarReducer"].show)
        })
    }, [])

    return (
        <div>
            <IndexRouter>
                {show && <Tabbar/>}
            </IndexRouter>
        </div>
    );

}

