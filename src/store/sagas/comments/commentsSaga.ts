import {
  CallEffect,
  PutEffect,
  call,
  put,
  delay,
  takeLeading,
  select,
} from "redux-saga/effects"

import {
  CommentsAction,
  setComments,
  setLoadingComments,
} from "../../comments/actions"
import axios, { AxiosResponse } from "axios"
import { Comment } from "../../comments/types"
import { GET_COMMENTS_SAGA } from "../typesForSagas"

const fetchCommentsFromApi = (params: number) => {
  return axios.get<Comment[]>(
    `https://jsonplaceholder.typicode.com/comments?postId=${params}`,
  )
}

export function* fetchCommentsWorker(): Generator<
  CallEffect<AxiosResponse<Comment[]>> | PutEffect<CommentsAction>
> {
  const paramsID: any = yield select(
    ({ commentsState }) => commentsState.paramsID,
  ) as any

  try {
    yield put(setLoadingComments(true))

    const response: AxiosResponse<Comment[]> = (yield call(
      fetchCommentsFromApi(paramsID),
    )) as any
    yield put(setComments(response.data))

    yield delay(500)
    yield put(setLoadingComments(false))
  } catch (error) {
    console.log(`Post request error!`)
  }
}

export function* watchCommentsSaga() {
  yield takeLeading(GET_COMMENTS_SAGA, fetchCommentsWorker)
}
