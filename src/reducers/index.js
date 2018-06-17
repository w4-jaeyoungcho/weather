import { combineReducers } from "redux";
import {
    FETCH_WEATHER,
} from "../actions";

/*
state

*/

function weatherReducer(state = [], action) {
    // console.log("weatherReducer", action);

    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload, ...state];
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    weather: weatherReducer,
});

export default rootReducer;
