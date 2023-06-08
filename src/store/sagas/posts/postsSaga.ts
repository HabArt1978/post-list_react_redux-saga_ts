import {
  CallEffect,
  PutEffect,
  call,
  put,
  delay,
  takeLatest,
} from "redux-saga/effects"

import { PostsAction, setPosts, setLoading } from "../../posts/actions"
import axios, { AxiosResponse } from "axios"
import { Post } from "../../posts/types"
import { GET_POSTS_SAGA } from "../typesFromSaga"

const fetchPostsFromApi = () =>
  axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")

export function* fetchPostsWorker(): Generator<
  CallEffect<AxiosResponse<Post[]>> | PutEffect<PostsAction>
> {
  try {
    yield put(setLoading(true))

    const response: AxiosResponse<Post[]> = (yield call(
      fetchPostsFromApi,
    )) as any
    yield put(setPosts(response.data))

    yield delay(500)
    yield put(setLoading(false))
  } catch (error) {
    console.log(`Post request error!`)
  }
}

export function* watchPostsSaga() {
  yield takeLatest(GET_POSTS_SAGA, fetchPostsWorker)
}
