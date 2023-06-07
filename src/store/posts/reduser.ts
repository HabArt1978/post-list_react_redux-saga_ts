import { Reducer } from "@reduxjs/toolkit"
import { postsInitialState } from "./initialState"
import { PostsState } from "./types"
import { PostsAction } from "./actions"

const postsReduser: Reducer<PostsState, PostsAction> = (
  state = postsInitialState,
  action,
) => {
  switch (action.type) {
    case "SET_POSTS": {
      return {
        ...state,
        posts: action.payload,
      }
    }
    case "SET_LOADING": {
      return {
        ...state,
        loading: action.payload,
      }
    }
    case "SET_CURRENT_PAGE": {
      return {
        ...state,
        currentPage: action.payload,
      }
    }
    case "SET_NEXT_PAGE": {
      return {
        ...state,
        currentPage: state.currentPage + 1,
      }
    }
    case "SET_PREV_PAGE": {
      return {
        ...state,
        currentPage: state.currentPage - 1,
      }
    }

    default:
      return state
  }
}

export default postsReduser
