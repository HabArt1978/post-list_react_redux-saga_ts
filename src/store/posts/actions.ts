import { Action } from "@reduxjs/toolkit"
import { Post } from "./types"
import { GET_POSTS_SAGA } from "../sagas/typesForSagas"

export type PostsAction =
  | SetPostsAction
  | SetLoadingAction
  | SetCurrentPageAction
  | SetNextPageAction
  | SetPrevPageAction
  | GetPostsAction
  | SortTitlesPostsAscendingAction
  | SortTitlesPostsDescendingAction
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
export const setLoading = (
  payload: SetLoadingAction["payload"],
): SetLoadingAction => {
  return {
    type: "SET_LOADING",
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
