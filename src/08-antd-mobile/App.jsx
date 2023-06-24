import React, {Component, useEffect, useState} from 'react';
import IndexRouter from "./router/IndexRouter";
import Tabbar from "./components/Tabbar";
import "./views/css/App.css"
import {connect} from "react-redux";
import "./util/request"


function App(props) {
    console.log(props)

    return (
        <div>
            <IndexRouter>
                {props["isShow"] && <Tabbar/>}
            </IndexRouter>
        </div>
    );

}

export default connect((state) => {
    console.log(state)
    return {
        isShow: state["TabbarReducer"]["show"]
    }
})(App)

