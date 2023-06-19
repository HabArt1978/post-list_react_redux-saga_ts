export type CommentsState = {
  comments: Comment[]
  loading: boolean
  paramsID: number | null
  errorText: string | null
}

export type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}
