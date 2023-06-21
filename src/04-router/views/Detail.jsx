import React from 'react';

export default function Detail(props) {
    // console.log(props)
    return (
        <div>
            detail-{props.match.params["filmId"]}
            {/*detail-{props.location.query["filmId"]}*/}
            {/*detail-{props.location.state["filmId"]}*/}
        </div>
    );
}

