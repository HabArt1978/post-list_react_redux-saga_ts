import { all } from "redux-saga/effects"
import { watchPostsSaga } from "../sagas/posts/postsSaga"
import { watchCommentsSaga } from "./comments/commentsSaga"
import { watchUserDetailsSaga } from "./userDetails/userDetaisSaga"

export default function* rootSaga() {
  yield all([watchPostsSaga(), watchCommentsSaga(), watchUserDetailsSaga()])
}
