import React, {useEffect} from 'react';

export default function Detail(props) {
    useEffect(() => {
        console.log("create")
        return () => {
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

