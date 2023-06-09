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
        isOpen: !state.isOpen,
      }

    case "CLOSE_MENU": {
      return {
        isOpen: false,
      }
    }

    default:
      return state
  }
}

export default navigationReducer
