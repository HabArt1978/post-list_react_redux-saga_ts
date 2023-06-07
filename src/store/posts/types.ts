export type PostsState = {
  posts: Post[]
  loading: boolean
  currentPage: number
  postsPerPage: number
}

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}
