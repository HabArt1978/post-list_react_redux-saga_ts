import {
  CallEffect,
  PutEffect,
  call,
  put,
  delay,
  select,
  SelectEffect,
  takeEvery,
} from "redux-saga/effects"

import {
  CommentsAction,
  setComments,
  setErrorComments,
  setLoadingComments,
} from "../../comments/actions"
import axios, { AxiosResponse } from "axios"
import { Comment } from "../../comments/types"
import { GET_COMMENTS_SAGA } from "../typesForSagas"
import { RootState } from "../../store"

const fetchPostComments = (postId: number) => {
  return axios.get<Comment[]>(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
  )
}

export function* fetchCommentsWorker(): Generator<
  | SelectEffect
  | CallEffect<AxiosResponse<Comment[]>>
  | PutEffect<CommentsAction>
> {
  const postId: number = (yield select(
    (state: RootState) => state.commentsState.paramsID,
  )) as any

  try {
    yield put(setLoadingComments(true))

    const response: AxiosResponse<Comment[]> = (yield call(
      fetchPostComments,
      postId,
    )) as any
    yield put(setComments(response.data))

    yield delay(500)
    yield put(setLoadingComments(false))
  } catch (error) {
    yield delay(500)
    yield put(setErrorComments("Comments not found !"))
    yield put(setLoadingComments(false))
  }
}

export function* watchCommentsSaga() {
  yield takeEvery(GET_COMMENTS_SAGA, fetchCommentsWorker)
}
