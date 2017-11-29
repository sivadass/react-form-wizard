import { combineReducers } from 'redux'
import user from './userReducer'
import form from './userReducer'

const rootReducer = combineReducers({
  user,
  form
})

export default rootReducer