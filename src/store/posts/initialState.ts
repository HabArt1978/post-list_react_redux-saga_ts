import { PostsState } from "./types"

export const postsInitialState: PostsState = {
  posts: [],
  loading: false,
  currentPage: 1,
  postsPerPage: 12,
  errorText: null,
}
