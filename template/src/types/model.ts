export interface RootState {
  login: LoginState
  loading: LoadingState
}

// * loading
export const CHANGE_LOADING = 'CHANGE_LOADING'
export type CHANGE_LOADING = typeof CHANGE_LOADING

export interface LoadingState {
  [prperties: string]: boolean
}

export interface LoadingAction {
  type: CHANGE_LOADING
  payload: {
    [property: string]: boolean
  }
}

// * login
export const CHANGE_LOGIN_STATUS = 'CHANGE_LOGIN_STATUS'
export type CHANGE_LOGIN_STATUS = typeof CHANGE_LOGIN_STATUS

export interface LoginState {
  status: string
}

export interface LoginData {
  username: string
  password: string
}

export interface ChangeLoginStatusAction {
  type: CHANGE_LOGIN_STATUS
  payload: string
}

export type LoginAction = ChangeLoginStatusAction
