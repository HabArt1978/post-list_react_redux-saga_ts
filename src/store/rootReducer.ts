import { combineReducers } from "@reduxjs/toolkit"
import navigationReducer from "./navigation/reducers"
import postsReduser from "./posts/reducer"
import commentsReduser from "./comments/reducers"
import userDetailsReducer from "./userDetails/reducers"

const rootReducer = combineReducers({
  navigationState: navigationReducer,
  postsState: postsReduser,
  commentsState: commentsReduser,
  userDetailsState: userDetailsReducer,
})

export default rootReducer
