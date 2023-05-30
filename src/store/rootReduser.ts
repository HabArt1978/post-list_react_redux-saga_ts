import { combineReducers } from "@reduxjs/toolkit"
import navigationReducer from "./navigation/reducers"

const rootReducer = combineReducers({
  navigationState: navigationReducer,
})

export default rootReducer
