import { Action } from "@reduxjs/toolkit"
import { Post } from "./types"

export type PostsAction = SetPostsAction | SetLoadingAction

interface SetPostsAction extends Action {
  type: "SET_POSTS"
  payload: Post[]
}
export const setPosts = (payload: Post[]): SetPostsAction => {
  return {
    type: "SET_POSTS",
    payload,
  }
}

interface SetLoadingAction extends Action {
  type: "SET_LOADING"
  payload: boolean
}
export const setLoading = (payload: boolean): SetLoadingAction => {
  return {
    type: "SET_LOADING",
    payload,
  }
}
