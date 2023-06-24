import React, {useEffect} from 'react';
import {connect} from "react-redux";
import getCinemaListAction from "../redux/actionCreator/getCinemaListAction";

export default connect((state) => {
    return {
        list: state["CinemaListReducer"]["list"],
        cityName: state["CityReducer"]["cityName"]
    }
}, {
    getCinemaListAction
})(function Cinemas(props) {
    let {list, cityName, getCinemaListAction} = props
    useEffect(() => {
        if (list.length === 0) {
            console.log("get data")
            //取数据
            getCinemaListAction()
        } else {
            console.log("store cache")
        }
    }, [list])
    return (
        <div>
            <div style={{overflow: "hidden"}}>
                <div style={{float: "left"}}
                     onClick={() => {
                         props["history"].push(`/city`)
                     }}>{cityName}</div>
                <div style={{float: "right"}}
                     onClick={() => {
                         props["history"].push(`/cinemas/search`)
                     }}>搜索
                </div>
            </div>
            {list.map(item =>
                <dl key={item["cinemaId"]} style={{padding: "10px"}}>
                    <dt>{item.name}</dt>
                    <dd style={{fontSize: "12px", color: "gray"}}>{item.address}</dd>
                </dl>
            )}
        </div>
    );
})

