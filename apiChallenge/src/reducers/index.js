import { combineReducers } from 'redux'

import chatReducer from "./chatReducer"
import navigationReducer from './navigationReducer'

export default combineReducers({
  chatState: chatReducer,
  nav: navigationReducer
})
