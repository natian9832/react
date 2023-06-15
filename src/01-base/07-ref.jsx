import React, {Component} from 'react'

export default class App extends Component {
    myRef1 = React.createRef()
    myRef2 = React.createRef()

    render() {
        return (
            <div>
                {/*<input ref={"myText"}/>*/}
                {/*<button onClick={() => {*/}
                {/*    console.log("add", this.refs.myText.value)*/}
                {/*}}>add</button>*/}

                <input ref={this.myRef1}/>
                <input ref={this.myRef2}/>
                <button onClick={() => {
                    console.log("add", this.myRef2.current.value)
                }}>add
                </button>
            </div>
        )
    }

}
