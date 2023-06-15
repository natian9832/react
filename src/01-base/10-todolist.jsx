import React, {Component} from 'react'

export default class App extends Component {
    myRef = React.createRef()

    state = {
        list: [],
    }

    render() {
        return (
            <div>
                <input ref={this.myRef}/>
                <button onClick={() => this.add()}>add
                </button>

                <ul>
                    {this.state.list.map((item, index) =>
                        <li key={index}>
                            <span dangerouslySetInnerHTML={{__html: item}}></span>
                            <button onClick={() => this.delete(index)}>del</button>
                        </li>)}
                </ul>
                {this.state.list.length === 0 && <h2>空空如也~</h2>}
            </div>
        )
    }

    add = () => {
        let newList = this.state.list
        newList = [...newList, this.myRef.current.value]
        this.setState({
            list: newList,
        })
        //清空输入框
        this.myRef.current.value = ""
    }

    delete = (index) => {
        let newList = this.state.list
        newList = [...newList.slice(0, index), ...newList.slice(index + 1, this.state.list.length)]
        this.setState({
            list: newList,
        })

    }

}
