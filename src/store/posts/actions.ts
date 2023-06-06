import { Action } from "@reduxjs/toolkit"
import { Post } from "./types"

export type PostsAction = SetPostsAction

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
