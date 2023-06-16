import React, {Component} from 'react'

export default class App extends Component {
    state = {
        username: localStorage.getItem("username"),
        password: localStorage.getItem("password")
    }

    render() {
        return (
            <div>
                <h1>登录页面</h1>
                <Field label={"username"}
                       type={"text"}
                       value={this.state.username}
                       onChange={(value) => {
                           this.setState({
                               username: value
                           })
                       }}/><br/>
                <Field label={"password"}
                       type={"password"}
                       value={this.state.password}
                       onChange={(value) => {
                           this.setState({
                               password: value
                           })
                       }}/><br/>
                <button onClick={() => {
                    console.log("登录")
                    console.log("username:", this.state.username)
                    console.log("password:", this.state.password)
                }}>登录
                </button>
                <button onClick={() => {
                    this.setState({
                        username: "",
                        password: ""
                    })
                }}>重置
                </button>
            </div>
        )
    }
}

class Field extends Component {
    render() {
        return (
            <div style={{background: "yellow"}}>
                <label htmlFor={this.props.label}>{this.props.label}</label>
                <input type={this.props.type}
                       id={this.props.label}
                       value={this.props.value}
                       onChange={(event) => {
                           this.props.onChange(event.target.value)
                       }}/>
            </div>
        )
    }
}
