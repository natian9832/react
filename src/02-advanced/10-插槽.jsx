import React, {Component} from 'react'

export default class App
    extends Component {
    render() {
        return (
            <div>
                <Child>
                    <div>插槽1</div>
                    <div>插槽2</div>
                    <div>插槽3</div>
                </Child>
            </div>
        )
    }
}

class Child extends Component {
    render() {
        return (
            <div>
                child
                {this.props.children}
            </div>
        )
    }
}
