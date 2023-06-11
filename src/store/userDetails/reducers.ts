import { Reducer } from "@reduxjs/toolkit"
import { userDetailsInitialState } from "./initialState"
import { UserDetailsState } from "./types"
import { UserDetailsAction } from "./actions"

const userDetailsReducer: Reducer<UserDetailsState, UserDetailsAction> = (
  state = userDetailsInitialState,
  action,
) => {
  switch (action.type) {
    case "SET_USER_DETAILS": {
      return {
        ...state,
        comments: action.payload,
      }
    }

    case "SET_LOADING_USER_DETAILS": {
      return {
        ...state,
        loading: action.payload,
      }
    }
    case "SET_USER_ID": {
      return {
        ...state,
        userID: action.payload,
      }
    }

    default:
      return state
  }
}

export default userDetailsReducer
