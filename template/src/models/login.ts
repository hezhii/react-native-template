import { Dispatch } from 'redux'
import {
  LoginState,
  LoginData,
  CHANGE_LOGIN_STATUS,
  LoginAction,
} from '../types/model'
import { login as signIn } from '../services/api'
import { changeLoading } from './loading'

const initialState: LoginState = {
  status: 'fail',
}

export const login = (data: LoginData) => async (dispatch: Dispatch) => {
  dispatch(changeLoading('login', true))
  try {
    const res = await signIn(data)
    dispatch({
      type: CHANGE_LOGIN_STATUS,
      payload: res.code,
    })
  } finally {
    dispatch(changeLoading('login', false))
  }
}

export const logout = (dispatch: Dispatch) => {
  dispatch({
    type: CHANGE_LOGIN_STATUS,
    payload: 'fail',
  })
}

// * reducer
export default (state = initialState, { type, payload }: LoginAction) => {
  switch (type) {
    case CHANGE_LOGIN_STATUS:
      return { ...state, status: payload }
    default:
      return state
  }
}
