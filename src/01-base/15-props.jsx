import React, {Component} from 'react'
import Navbar from "./Navbar"

export default class App extends Component {
    render() {
        let obj = {
            title: "test",
            leftShow: false
        }
        return (
            <div>
                <div>
                    <Navbar title={"首页"} leftShow={false}/>
                    <h2>首页</h2>
                </div>

                <div>
                    <Navbar title={"列表"}/>
                    <h2>列表</h2>
                </div>

                <div>
                    <Navbar title={"购物车"}/>
                    <h2>购物车</h2>
                </div>

                <div>
                    {/*<Navbar title={obj.title} leftShow={obj.leftShow}/>*/}
                    <Navbar {...obj}/>
                    <h2>{obj.title}</h2>
                </div>
            </div>
        )
    }
}
