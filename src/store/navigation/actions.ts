import { Action } from "@reduxjs/toolkit"

export type NavAction =
  | MenuToggleAction
  | ColoseMenuAction
  | SetTitleValueAction

interface MenuToggleAction extends Action {
  type: "MENU_TOGGLE"
}
export const menuToggle = (): MenuToggleAction => {
  return {
    type: "MENU_TOGGLE",
  }
}

interface ColoseMenuAction extends Action {
  type: "CLOSE_MENU"
}
export const closeMenu = (): ColoseMenuAction => {
  return {
    type: "CLOSE_MENU",
  }
}

interface SetTitleValueAction extends Action {
  type: "SET_TITLE_VALUE"
  payload: string
}
export const setTitleValue = (
  payload: SetTitleValueAction["payload"],
): SetTitleValueAction => {
  return {
    type: "SET_TITLE_VALUE",
    payload,
  }
}
