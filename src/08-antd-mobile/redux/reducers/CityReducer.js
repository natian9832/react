const CityReducer = (prevProps={
    cityName: "北京"
}, action) => {
    let newProps = {...prevProps}
    switch (action.type) {
        case "change-city":
            newProps.cityName = action.value
            return newProps
        default:
            return prevProps
    }
}

export default CityReducer