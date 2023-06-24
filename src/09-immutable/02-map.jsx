import React, {useState} from 'react';
import {Map} from "immutable"

let obj = {
    name: "natian",
    age: 27
}

let oldImmutableObj = Map(obj)
let newImmutableObj = oldImmutableObj.set("name", "那天")
// console.log(newImmutableObj);

//1.get 获取
// console.log(oldImmutableObj.get("name"), newImmutableObj.get("name"))
//2.immutable => 普通对象
console.log(oldImmutableObj.toJS(), newImmutableObj.toJS())


export default function App(props) {
    const [info, setInfo] = useState(Map({
        name: "natian",
        age: 27
    }))
    return (
        <div>
            <button onClick={() => {
                setInfo(info.set("name", "那天").set("age", 28))
            }}>click
            </button>
            {info.get("name")}--
            {info.get("age")}
        </div>
    );
}

