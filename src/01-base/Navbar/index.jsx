import React, {Component} from 'react'
import natianPropTypes from "prop-types"

export default class Navbar extends Component {
    // 默认属性
    static defaultProps = {
        leftShow: true
    }

    static propTypes = {
        title: natianPropTypes.string,
        leftShow: natianPropTypes.bool
    }

    render() {
        let {title, leftShow} = this.props
        return (
            <div>
                {leftShow && <button>返回</button>}
                {title}
                <button>home</button>
            </div>
        )
    }
}

