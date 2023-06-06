import { PostsState } from "./types"

export const postsInitialState: PostsState = {
  posts: [],
  isLoading: false,
  currentPage: 1,
  postsPerPage: 9,
}
