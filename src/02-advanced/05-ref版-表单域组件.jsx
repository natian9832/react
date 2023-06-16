import React, {Component} from 'react'

export default class App extends Component {
    username = React.createRef()
    password = React.createRef()

    render() {
        return (
            <div>
                <h1>登录页面</h1>
                <Field label={"username"}
                       type={"text"}
                       ref={this.username}/>
                <br/>
                <Field label={"password"}
                       type={"password"}
                       ref={this.password}/>
                <br/>
                <button onClick={() => {
                    console.log(this.username.current.state.value, this.password.current.state.value)
                }}>
                    登录
                </button>
                <button onClick={() => {
                    // this.username.current.setState({value: ""})
                    // this.password.current.setState({value: ""})

                    this.username.current.clear("")
                    this.password.current.clear("")
                }}>
                    重置
                </button>
            </div>
        )
    }
}

class Field extends Component {
    state = {
        value: ""
    }

    clear(value) {
        this.setState({
            value: value
        })
    }

    render() {
        return (
            <div style={{background: "yellow"}}>
                <label htmlFor={this.props.label}>{this.props.label}</label>
                <input type={this.props.type}
                       id={this.props.label}
                       value={this.state.value}
                       onChange={(event) => {
                           this.setState({
                               value: event.target.value
                           })
                       }}/>
            </div>
        )
    }
}
