import { combineReducers } from "@reduxjs/toolkit"
import navigationReducer from "./navigation/reducers"
import postsReduser from "./posts/reduser"

const rootReducer = combineReducers({
  navigationState: navigationReducer,
  postsState: postsReduser,
})

export default rootReducer
