import React, {useEffect, useMemo, useState} from 'react';
import store from "../redux/store";
import getCinemaListAction from "../redux/actionCreator/getCinemaListAction";

export default function Search(props) {
    const [cinemaList, setCinemaList] = useState(store.getState()["CinemaListReducer"]["list"])
    const [text, setText] = useState("")
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
    const getCinemaList = useMemo(() =>
        cinemaList.filter(item =>
            item.name.toUpperCase().includes(text.toUpperCase()) ||
            item.address.toUpperCase().includes(text.toUpperCase())), [text, cinemaList])

    return (
        <div>
            <input value={text} onChange={(event) => {
                setText(event.target.value)
            }}/>
            {getCinemaList.map(item =>
                <dl key={item["cinemaId"]} style={{padding: "10px"}}>
                    <dt>{item.name}</dt>
                    <dd style={{fontSize: "12px", color: "gray"}}>{item.address}</dd>
                </dl>
            )}
        </div>
    );
}

