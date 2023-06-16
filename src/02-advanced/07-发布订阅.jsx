import React, {Component} from 'react'

export default class App extends Component {
    render() {
        return (
            <div>
                app
            </div>
        )
    }
}

let bus = {
    list: [],
    subscribe(callback) {
        this.list.push(callback)
    },
    publish() {
        this.list.forEach(callback => callback && callback())
    }
}

bus.subscribe(() => {
    console.log("hello1")
})

bus.subscribe(() => {
    console.log("hello2")
})

setTimeout(() => {
    bus.publish()
}, 2000)
