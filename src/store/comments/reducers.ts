import { Reducer } from "@reduxjs/toolkit"
import { commentsInitialState } from "./initialState"
import { CommentsState } from "./types"
import { CommentsAction } from "./actions"

const commentsReduser: Reducer<CommentsState, CommentsAction> = (
  state = commentsInitialState,
  action,
) => {
  switch (action.type) {
    case "SET_COMMENTS": {
      return {
        ...state,
        comments: action.payload,
      }
    }

    case "SET_LOADING_COMMENTS": {
      return {
        ...state,
        loading: action.payload,
      }
    }
    case "SET_PARAMS_ID": {
      return {
        ...state,
        paramsID: action.payload,
      }
    }

    default:
      return state
  }
}

export default commentsReduser
