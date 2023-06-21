import React from 'react';

export default function Center(props) {
    console.log(props)
    return (
        <div>
            <div onClick={() => {
                // console.log(props)
                props.history.push(`/filmorder`)
            }}>电影订单</div>
        </div>
    );
}

