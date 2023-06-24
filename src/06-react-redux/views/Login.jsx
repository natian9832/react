import React, {useState} from 'react';

export default function Login(props) {
    const [text, setText] = useState("")
    return (
        <div>
            <h1>登录页面</h1>
            <input type={"text"} value={text} onChange={(event) => setText(event.target.value)}/>
            <button onClick={() => {
                localStorage.setItem("token", text)
                props.history.push("/center")
            }}>登录</button>
        </div>
    );
}

