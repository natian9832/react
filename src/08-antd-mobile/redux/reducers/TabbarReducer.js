const TabbarReducer = (prevProps={
    show: true
}, action) => {
    let newProps = {...prevProps}
    switch (action.type) {
        case "hide-tabbar":
            newProps.show = false
            return newProps
        case "show-tabbar":
            newProps.show = true
            return newProps
        default:
            return prevProps
    }
}

export default TabbarReducer