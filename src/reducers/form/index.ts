import { FormState, Types } from '../../actions/formTypes'

const initialState: FormState = {
  engineer: {},
  batteryUse: {},
}

const formReducer = (
  state: FormState = initialState,
  // eslint-disable-next-line
  action: any
): FormState => {
  switch (action.type) {
    case Types.SET_ENGINEER:
      return {
        ...state,
        engineer: action.payload,
      }
    case Types.SET_BATTERY_USE:
      return {
        ...state,
        batteryUse: action.payload,
      }

    default:
      return state
  }
}

export default formReducer
