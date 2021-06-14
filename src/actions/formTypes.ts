import * as ActionTypes from './actionTypes'

export const Types = ActionTypes

export interface FormState {
  readonly engineer: Record<string, null>
  readonly batteryUse: Record<string, null>
}

export interface SetEngineersAction {
  readonly type: typeof ActionTypes.SET_ENGINEER
  readonly payload: string
}

export interface SetBatteryUseAction {
  readonly type: typeof ActionTypes.SET_BATTERY_USE
  readonly payload: string
}
