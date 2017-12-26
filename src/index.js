import { createStore , combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";

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

const userReducer = (state=
    {
        age:27,
        name:"Max"
}, action) => {
    switch (action.type) {
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
        case "SET_NAME":
            state = {
                ...state,
                name:action.payload
            }
            break;
    }    
    return state;
}

const mylogger = (store) => (next)=> (action)=> {
   console.log("Logged action", action);
   next(action);
}


const store = createStore(combineReducers({mathReducer,userReducer}), {},applyMiddleware(mylogger, createLogger() ));

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

store.dispatch({
    type:"SET_AGE",
    payload:25
})

store.dispatch({
    type:"SET_NAME",
    payload:"Kavitha"
})