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
    default:
      return state
  }
}

export default postsReduser
