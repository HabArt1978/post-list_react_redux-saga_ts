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
  UserDetailsAction,
  setUserDetails,
  resetUserDetails,
  setLoadingUserDetails,
  setError,
} from "../../userDetails/actions"
import axios, { AxiosResponse } from "axios"
import { UserDetails } from "../../userDetails/types"
import { GET_USER_DETAILS_SAGA } from "../typesForSagas"

import { RootState } from "../../store"

const fetchUserDetailsComments = (userId: number) => {
  return axios.get<UserDetails>(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  )
}

export function* fetchCommentsWorker(): Generator<
  | SelectEffect
  | CallEffect<AxiosResponse<UserDetails>>
  | PutEffect<UserDetailsAction>
> {
  const userID: number = (yield select(
    (state: RootState) => state.userDetailsState.userID,
  )) as any

  try {
    yield put(resetUserDetails())
    yield put(setLoadingUserDetails(true))

    const response: AxiosResponse<UserDetails> = (yield call(
      fetchUserDetailsComments,
      userID,
    )) as any
    yield put(setUserDetails(response.data))

    yield delay(500)
    yield put(setLoadingUserDetails(false))
  } catch (error) {
    yield delay(500)
    yield put(setError("User not found !"))
    yield put(setLoadingUserDetails(false))
  }
}

export function* watchUserDetailsSaga() {
  yield takeEvery(GET_USER_DETAILS_SAGA, fetchCommentsWorker)
}
