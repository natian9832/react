import React, {useEffect} from 'react';
import store from "../redux/store";
import {show, hide} from "../redux/actionCreator/TabbarActionCreator"

export default function Detail(props) {
    useEffect(() => {
        store.dispatch(show())
        return () => {
            store.dispatch(hide())
        }
    }, [])
    return (
        <div>
            detail-{props.match.params["filmId"]}
            {/*detail-{props.location.query["filmId"]}*/}
            {/*detail-{props.location.state["filmId"]}*/}
        </div>
    );
}

