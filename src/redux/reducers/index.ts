import { ITEM_DATA_FETCHED, DATA_LOADING } from "../actions/fetch"
interface Action {
  type: string
  payload: any
}
interface State {
  data: any[]
  loading: boolean
}

const intialState = {
  data: [],
  loading: false,
}

export default (state: State = intialState, action: Action) => {
  switch (action.type) {
    case ITEM_DATA_FETCHED:
      return {
        ...state,
        data: action.payload,
      }
    case DATA_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}
