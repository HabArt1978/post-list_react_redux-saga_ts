import { CallEffect, PutEffect, call, put } from "redux-saga/effects"
import { Post } from "../posts/types"
import { PostsAction, setPosts } from "../posts/actions"
import axios, { AxiosResponse } from "axios"

const fetchPostsFromApi = () =>
  axios.get<any>("https://jsonplaceholder.typicode.com/posts")

export default function* fetchPostsWorker(): Generator<
  CallEffect<AxiosResponse<any>> | PutEffect<PostsAction>
> {
  try {
    const posts: any = yield call(fetchPostsFromApi)
    yield put(setPosts(posts.data))

    console.log(posts.data)
  } catch (error) {
    console.log(`Post request error!`)
  }
}
