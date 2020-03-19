import { LoadingState, CHANGE_LOADING, LoadingAction } from '../types/model'

const initialState: LoadingState = {}

export const changeLoading = (
  effect: string,
  loading: boolean,
): LoadingAction => ({
  type: CHANGE_LOADING,
  payload: { [effect]: loading },
})

// * reducer
export default (state = initialState, { type, payload }: LoadingAction) => {
  switch (type) {
    case CHANGE_LOADING:
      return { ...state, ...payload }
    default:
      return state
  }
}
