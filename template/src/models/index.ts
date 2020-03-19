import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import loading from './loading'
import login from './login'

const reducers = combineReducers({
  loading,
  login,
})

const initialState = {}

const store = createStore(reducers, initialState, applyMiddleware(thunk))

export default store
