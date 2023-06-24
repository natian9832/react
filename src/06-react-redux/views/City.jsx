import React, {useState} from 'react';
import store from "../redux/store";
import {connect} from "react-redux";

export default connect(null, {
    change(value) {
        return {
            type: "change-city",
            value: value
        }
    }
})(function City(props) {
    const [list] = useState(["北京", "南京", "上海", "深圳"])
    return (
        <div>
            city
            <ul>
                {list.map(item =>
                    <li key={item} onClick={() => {
                        props["change"](item)
                        // props.history.push(`/cinemas`)
                        props["history"].goBack()
                    }}>{item}</li>)}
            </ul>
        </div>
    );
})

