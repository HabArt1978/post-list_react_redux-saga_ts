import { Reducer } from "@reduxjs/toolkit"
import { NavAction } from "./actions"
import { initialState } from "./initialState"
import { NavState } from "./types"

const navigationReducer: Reducer<NavState, NavAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case "MENU_TOGGLE":
      return {
        ...state,
        isOpen: !state.isOpen,
      }

    case "CLOSE_MENU": {
      return {
        ...state,
        isOpen: false,
      }
    }
    case "SET_TITLE_VALUE": {
      return {
        ...state,
        searchValue: action.payload,
      }
    }

    default:
      return state
  }
}

export default navigationReducer
