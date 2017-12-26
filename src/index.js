import { createStore } from "redux";

const initialState = {
    result: 1,
    data: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                data:[...state.data, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                data:[...state.data, action.payload]
            };
            break;
    }
    return state;
}


const store = createStore(reducer, initialState


);

store.subscribe(() => {
    console.log("Updated Store", store.getState());
}

)

store.dispatch({
    type: "ADD",
    payload: 20
})

store.dispatch({
    type: "ADD",
    payload: 100
})

store.dispatch({
    type: "SUBTRACT",
    payload: 20
})