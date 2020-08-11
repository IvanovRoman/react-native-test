import { Dispatch } from "redux"
import { fetchDataService } from "../services/user"

export const DATA_LOADING = "DATA_LOADING"
export const ITEM_DATA_FETCHED = "ITEM_DATA_FETCHED"

export function fetchItemData() {
  return (dispatch: Dispatch) => {
    dispatch(loading(true))
    fetchDataService()
      .then((res: any) => {
        dispatch(itemDataFetched(res))
        dispatch(loading(false))
      })
      .catch((err) => {
        dispatch(loading(false))
      })
  }
}

const itemDataFetched = (data: any[]) => ({
  type: ITEM_DATA_FETCHED,
  payload: data,
})

export const loading = (loader: boolean) => ({
  type: DATA_LOADING,
  payload: loader,
})
