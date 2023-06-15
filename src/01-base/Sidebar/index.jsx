import React from 'react'

export default function Sidebar(props) {
    console.log(props)
    const {bg, position} = props
    return (
        <div>
            <ul
                style={{
                    background: bg,
                    width: "200px",
                    position: "fixed"
                }}>
                <li>北京</li>
                <li>南京</li>
                <li>上海</li>
                <li>和县</li>
            </ul>
        </div>
    )
}
