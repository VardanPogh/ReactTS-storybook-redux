import { combineReducers, Reducer } from 'redux'

import auth from './auth'
import form from './form'

const configureRootReducer = (): Reducer =>
  combineReducers({
    auth,
    form,
  })
export default configureRootReducer
