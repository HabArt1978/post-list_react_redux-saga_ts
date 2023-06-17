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
    case "SORT_TITLES_POSTS_ASCENDING": {
      const posts = [...state.posts]
      if (posts.length === 0) return state

      posts.sort((a, b) => (a.title < b.title ? -1 : 1))

      return {
        ...state,
        posts,
      }
    }
    case "SORT_TITLES_POSTS_DESCENDING": {
      const posts = [...state.posts]
      if (posts.length === 0) return state

      posts.sort((a, b) => (a.title < b.title ? 1 : -1))

      return {
        ...state,
        posts,
      }
    }

    default:
      return state
  }
}

export default postsReduser
