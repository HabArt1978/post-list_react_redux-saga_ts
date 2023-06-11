import { Action } from "@reduxjs/toolkit"
import { UserDetails } from "./types"
import { GET_USER_DETAILS_SAGA } from "../sagas/typesForSagas"

export type UserDetailsAction =
  | SetUserDetailsAction
  | SetLoadingUserDetailsAction
  | GetUserDetailsAction
  | SetUserIdAction

interface SetUserDetailsAction extends Action {
  type: "SET_USER_DETAILS"
  payload: UserDetails
}
export const setUserDetails = (payload: UserDetails): SetUserDetailsAction => {
  return {
    type: "SET_USER_DETAILS",
    payload,
  }
}

interface SetLoadingUserDetailsAction extends Action {
  type: "SET_LOADING_USER_DETAILS"
  payload: boolean
}
export const setLoadingUserDetails = (
  payload: SetLoadingUserDetailsAction["payload"],
): SetLoadingUserDetailsAction => {
  return {
    type: "SET_LOADING_USER_DETAILS",
    payload,
  }
}

interface GetUserDetailsAction extends Action {
  type: "GET_USER_DETAILS_SAGA"
}
export const getUserDetails = (): GetUserDetailsAction => {
  return {
    type: GET_USER_DETAILS_SAGA,
  }
}

interface SetUserIdAction extends Action {
  type: "SET_USER_ID"
  payload: number
}
export const setUserID = (
  payload: SetUserIdAction["payload"],
): SetUserIdAction => {
  return {
    type: "SET_USER_ID",
    payload,
  }
}
