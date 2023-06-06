import { CallEffect, PutEffect, call, put, delay } from "redux-saga/effects"
import { PostsAction, setPosts, setLoading } from "../posts/actions"
import axios, { AxiosResponse } from "axios"

const fetchPostsFromApi = () =>
  axios.get<any>("https://jsonplaceholder.typicode.com/posts")

export default function* fetchPostsWorker(): Generator<
  CallEffect<AxiosResponse<any>> | PutEffect<PostsAction>
> {
  try {
    yield put(setLoading(true))

    const posts: any = yield call(fetchPostsFromApi)
    yield put(setPosts(posts.data))

    yield delay(500)
    yield put(setLoading(false))
  } catch (error) {
    console.log(`Post request error!`)
  }
}
