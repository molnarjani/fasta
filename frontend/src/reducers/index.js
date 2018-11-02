import { combineReducers } from "redux";
import fastReducer from "./fastReducer";

export default combineReducers({ fasts: fastReducer });
