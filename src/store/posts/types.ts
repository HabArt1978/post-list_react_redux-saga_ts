export type PostsState = {
  posts: Post[]
}

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}
