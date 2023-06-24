import React, {useEffect, useState} from 'react';
import store from "../redux/store";
import getCinemaListAction from "../redux/actionCreator/getCinemaListAction";
import {hide} from "../redux/actionCreator/TabbarActionCreator";

export default function Cinemas(props) {
    const [cinemaList, setCinemaList] = useState(store.getState()["CinemaListReducer"]["list"])
    // console.log(store.getState())
    const [cityName, setCityName] = useState(store.getState()["CityReducer"].cityName)
    useEffect(() => {
        if (store.getState()["CinemaListReducer"]["list"].length === 0) {
            console.log("get data")
            //取数据
            store.dispatch(getCinemaListAction())
        } else {
            console.log("store cache")
        }
        //订阅影院数据
        let unsubscribe = store.subscribe(() => {
            setCinemaList(store.getState()["CinemaListReducer"]["list"])
        })

        return () => {
            //取消订阅
            unsubscribe()
        }
    }, [])
    return (
        <div>
            <div style={{overflow: "hidden"}}>
                <div style={{float: "left"}}
                     onClick={() => {
                         props.history.push(`/city`)
                     }}>{cityName}</div>
                <div style={{float: "right"}}
                     onClick={() => {
                         props.history.push(`/cinemas/search`)
                     }}>搜索
                </div>
            </div>
            {cinemaList.map(item =>
                <dl key={item["cinemaId"]} style={{padding: "10px"}}>
                    <dt>{item.name}</dt>
                    <dd style={{fontSize: "12px", color: "gray"}}>{item.address}</dd>
                </dl>
            )}
        </div>
    );
}

