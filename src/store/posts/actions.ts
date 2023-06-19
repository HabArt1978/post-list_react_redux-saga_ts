import { Action } from "@reduxjs/toolkit"
import { Post } from "./types"
import { GET_POSTS_SAGA } from "../sagas/typesForSagas"

export type PostsAction =
  | SetPostsAction
  | SetLoadingPostsAction
  | SetCurrentPageAction
  | SetNextPageAction
  | SetPrevPageAction
  | GetPostsAction
  | SortTitlesPostsAscendingAction
  | SortTitlesPostsDescendingAction
  | SetErrorPostsAction
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

interface SetLoadingPostsAction extends Action {
  type: "SET_LOADING_POSTS"
  payload: boolean
}
export const setLoadingPosts = (
  payload: SetLoadingPostsAction["payload"],
): SetLoadingPostsAction => {
  return {
    type: "SET_LOADING_POSTS",
    payload,
  }
}

interface SetCurrentPageAction extends Action {
  type: "SET_CURRENT_PAGE"
  payload: number
}
export const setCurrentPage = (
  payload: SetCurrentPageAction["payload"],
): SetCurrentPageAction => {
  return {
    type: "SET_CURRENT_PAGE",
    payload,
  }
}

interface SetNextPageAction extends Action {
  type: "SET_NEXT_PAGE"
}
export const setNextPage = (): SetNextPageAction => {
  return {
    type: "SET_NEXT_PAGE",
  }
}
interface SetPrevPageAction extends Action {
  type: "SET_PREV_PAGE"
}
export const setPrevPage = (): SetPrevPageAction => {
  return {
    type: "SET_PREV_PAGE",
  }
}

interface GetPostsAction extends Action {
  type: "GET_POSTS_SAGA"
}
export const getPosts = (): GetPostsAction => {
  return {
    type: GET_POSTS_SAGA,
  }
}

interface SortTitlesPostsAscendingAction extends Action {
  type: "SORT_TITLES_POSTS_ASCENDING"
}
export const sortTitlesPostsAscending = (): SortTitlesPostsAscendingAction => {
  return {
    type: "SORT_TITLES_POSTS_ASCENDING",
  }
}

interface SortTitlesPostsDescendingAction extends Action {
  type: "SORT_TITLES_POSTS_DESCENDING"
}
export const sortTitlesPostsDescending =
  (): SortTitlesPostsDescendingAction => {
    return {
      type: "SORT_TITLES_POSTS_DESCENDING",
    }
  }

interface SetErrorPostsAction extends Action {
  type: "SET_ERROR_POSTS"
  payload: string | null
}
export const setErrorPosts = (
  payload: SetErrorPostsAction["payload"],
): SetErrorPostsAction => {
  return {
    type: "SET_ERROR_POSTS",
    payload,
  }
}
