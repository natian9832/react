import React, {useEffect} from 'react';

function natianConnect(callback, obj) {
    let value = callback()
    return (MyComponent) => {
        return (props) => {
            return (
                <div style={{color: "red"}}>
                    <MyComponent {...value} {...props} {...obj}/>
                </div>
            )
        }
    }
}
export default natianConnect(() => {
    return {
        a: 1,
        b: 2
    }
}, {
    aa() {},
    bb() {}
})(function NotFound(props) {
    useEffect(() => {
        console.log(props)
    }, [props])
    return (
        <div>
            页面不存在
        </div>
    );
})



