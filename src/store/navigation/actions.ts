import { Action } from "@reduxjs/toolkit"

export type NavAction = MenuToggleAction | ColoseMenuAction

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
