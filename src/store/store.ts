import { configureStore } from "@reduxjs/toolkit"

import rootReducer from "./rootReduser"
import createSagaMiddleware from "redux-saga"

import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
