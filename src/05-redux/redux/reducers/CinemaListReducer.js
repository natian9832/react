const CinemaListReducer = (prevProps={
    list: []
}, action) => {
    let newProps = {...prevProps}
    switch (action.type) {
        case "change-list":
            newProps.list = action.value
            return newProps
        default:
            return newProps
    }
}

export default CinemaListReducer