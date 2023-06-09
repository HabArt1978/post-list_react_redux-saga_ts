import { spawn, all, call } from "redux-saga/effects"
import { watchPostsSaga } from "../sagas/posts/postsSaga"
import { watchCommentsSaga } from "./comments/commentsSaga"

export default function* rootSaga(): any {
  const sagas = [watchPostsSaga, watchCommentsSaga]

  const retrySagas: any = yield sagas.map(saga => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (error) {
          console.log(error)
        }
      }
    })
  })

  yield all(retrySagas)
}
