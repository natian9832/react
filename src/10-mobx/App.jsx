import React from 'react';
import {observable, autorun} from "mobx";

let observableNumber = observable.box(10)
let observableName = observable.box("那天")
autorun(() => {
    console.log("number改变了", observableNumber.get())
})

autorun(() => {
    console.log("name改变了", observableName.get())
})

setTimeout(() => {
    observableNumber.set(20)
}, 1000)

setTimeout(() => {
    observableName.set("酒敬天")
}, 2000)

// let myObj = observable.map({
//     name: "natian",
//     age: 27
// })
//
// autorun(() => {
//     console.log("对象的name属性改变了", myObj.get("name"))
// })
//
// setTimeout(() => {
//     myObj.set("age", 28)
// }, 1000)

let myObj = observable({
    name: "natian",
    age: 27
})

autorun(() => {
    console.log("对象的name属性改变了", myObj["name"])
})

setTimeout(() => {
    myObj["name"] = "jiujingtian"
}, 1000)

export default function App(props) {
    return (
        <div>
            app
        </div>
    );
}

