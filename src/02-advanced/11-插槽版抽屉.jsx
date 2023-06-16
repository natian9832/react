import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div style={{background: "red"}}>
                {this.props.children}
                <span>navbar</span>
            </div>
        )
    }
}

function Sidebar() {
    return (
        <div style={{background: "yellow", width: "200px"}}>
            <button>click</button>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
    )
}

export default class App extends Component {

    state = {
        isShow: true
    }

    render() {
        return (
            <div>
                <Navbar>
                    <button onClick={() => {
                        this.setState({
                            isShow: !this.state.isShow
                        })
                    }}>click
                    </button>
                </Navbar>
                {this.state.isShow && <Sidebar/>}
            </div>
        )
    }
}
