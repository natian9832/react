import React, {useState} from 'react';
import store from "../redux/store";

export default function City(props) {
    const [list] = useState(["北京", "南京", "上海", "深圳"])
    return (
        <div>
            city
            <ul>
                {list.map(item =>
                    <li key={item} onClick={() => {
                        store.dispatch({
                            type: "change-city",
                            value: item
                        })
                        // props.history.push(`/cinemas`)
                        props.history.goBack()
                    }}>{item}</li>)}
            </ul>
        </div>
    );
}

