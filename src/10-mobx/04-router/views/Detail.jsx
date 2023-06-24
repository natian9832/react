import React, {useEffect} from 'react';
import store from "../mobx/store";

export default function Detail(props) {
    useEffect(() => {
        console.log("create")
        // store.isTabbarShow = false
        store.changeHide()
        return () => {
            // store.isTabbarShow = true
            store.changeShow()
            console.log("destroy")
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

