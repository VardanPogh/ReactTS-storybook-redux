import { SetEngineersAction, SetBatteryUseAction, Types } from './formTypes'

export const setEngineer = (payload: string): SetEngineersAction => ({
  type: Types.SET_ENGINEER,
  payload,
})

export const setBatteryUseAction = (payload: string): SetBatteryUseAction => ({
  type: Types.SET_BATTERY_USE,
  payload,
})
