import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {show, hide} from "../redux/actionCreator/TabbarActionCreator"

export default connect(null, {
    show,
    hide
})(function Detail(props) {
    console.log(props)
    let {show, hide, match} = props
    useEffect(() => {
        show()
        return () => {
            hide()
        }
    }, [match.params["filmId"], show, hide])
    return (
        <div>
            detail-{match.params["filmId"]}
            {/*detail-{props.location.query["filmId"]}*/}
            {/*detail-{props.location.state["filmId"]}*/}
        </div>
    );
})

