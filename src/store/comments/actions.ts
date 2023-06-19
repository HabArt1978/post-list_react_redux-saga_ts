import { Action } from "@reduxjs/toolkit"
import { Comment } from "./types"
import { GET_COMMENTS_SAGA } from "../sagas/typesForSagas"

export type CommentsAction =
  | SetCommentsAction
  | SetLoadingCommentsAction
  | GetCommentsAction
  | SetParamsIdAction
  | SetErrorComments

interface SetCommentsAction extends Action {
  type: "SET_COMMENTS"
  payload: Comment[]
}
export const setComments = (payload: Comment[]): SetCommentsAction => {
  return {
    type: "SET_COMMENTS",
    payload,
  }
}

interface SetLoadingCommentsAction extends Action {
  type: "SET_LOADING_COMMENTS"
  payload: boolean
}
export const setLoadingComments = (
  payload: SetLoadingCommentsAction["payload"],
): SetLoadingCommentsAction => {
  return {
    type: "SET_LOADING_COMMENTS",
    payload,
  }
}

interface GetCommentsAction extends Action {
  type: "GET_COMMENTS_SAGA"
}
export const getComments = (): GetCommentsAction => {
  return {
    type: GET_COMMENTS_SAGA,
  }
}

interface SetParamsIdAction extends Action {
  type: "SET_PARAMS_ID"
  payload: number
}
export const setParamsID = (
  payload: SetParamsIdAction["payload"],
): SetParamsIdAction => {
  return {
    type: "SET_PARAMS_ID",
    payload,
  }
}

interface SetErrorComments extends Action {
  type: "SET_ERROR_COMMENTS"
  payload: string | null
}
export const setErrorComments = (
  payload: SetErrorComments["payload"],
): SetErrorComments => {
  return {
    type: "SET_ERROR_COMMENTS",
    payload,
  }
}
