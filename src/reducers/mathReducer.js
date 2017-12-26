const mathReducer = (state = {
    result: 1,
    data: []
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                data: [...state.data, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                data: [...state.data, action.payload]
            };
            break;
    }
    return state;
}

export default mathReducer;