import { Dispatch } from 'redux'
import {
  LoginState,
  LoginData,
  CHANGE_LOGIN_STATUS,
  LoginAction,
} from '../types/model'
import { login as signIn, SUCC_CODE } from '../services/api'
import { changeLoading } from './loading'
import { clearToken, saveToken } from '../services/storage'

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
    if (res.code === SUCC_CODE) {
      global.token = res.data
      saveToken(res.data)
    }
  } finally {
    dispatch(changeLoading('login', false))
  }
}

export const logout = (dispatch: Dispatch) => {
  clearToken()
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
