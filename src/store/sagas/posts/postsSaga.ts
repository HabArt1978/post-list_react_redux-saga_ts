import {
  CallEffect,
  PutEffect,
  select,
  call,
  put,
  delay,
  takeEvery,
  SelectEffect,
} from "redux-saga/effects"

import {
  PostsAction,
  setPosts,
  setLoading,
  setCurrentPage,
} from "../../posts/actions"
import axios, { AxiosResponse } from "axios"

import { Post } from "../../posts/types"
import { GET_POSTS_SAGA } from "../typesForSagas"
import { RootState } from "../../store"

const fetchPostsFromApi = () =>
  axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts")

export function* fetchPostsWorker(): Generator<
  SelectEffect | CallEffect<AxiosResponse<Post[]>> | PutEffect<PostsAction>
> {
  try {
    const searchValue: string = (yield select(
      (state: RootState) => state.navigationState.searchValue,
    )) as any

    yield put(setLoading(true))
    yield put(setCurrentPage(1))

    const response: AxiosResponse<Post[]> = (yield call(
      fetchPostsFromApi,
    )) as any

    yield put(
      setPosts(
        response.data.filter(post =>
          post.title.toLowerCase().includes(searchValue.toLowerCase()),
        ),
      ),
    )

    yield delay(500)
    yield put(setLoading(false))
  } catch (error) {
    console.log(`Post request error!`)
  }
}

export function* watchPostsSaga() {
  yield takeEvery(GET_POSTS_SAGA, fetchPostsWorker)
}
