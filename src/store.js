import {createLogger} from "redux-logger";
import { createStore, combineReducers, applyMiddleware} from "redux";
import mathReducer from "./reducers/mathReducer";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware"

const mylogger = (store) => (next)=> (action)=> {
    console.log("Logged action", action);
    next(action);
 }
 
 
 export default createStore(
     combineReducers({mathReducer,userReducer}),
      {},
      applyMiddleware(mylogger, createLogger(),thunk, promise() ));
 