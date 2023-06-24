import React from 'react';
import {Button} from "antd";

export default function App(props) {
    return (
        <div>
            <Button type="primary" onClick={() => {
                console.log("hello world")
            }}>Primary Button</Button>
        </div>
    );
}

