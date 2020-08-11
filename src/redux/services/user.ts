import { AsyncStorage } from "react-native"
import { default as _items } from "./items"

export function fetchDataService() {
  return new Promise((resolve, reject) => {
    resolve(_items.items)
  })
}

export function loginUserService(username: string, password: string) {
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem("user", username)
      .then(() => {
        resolve(username)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export function logoutUserService() {
  return new Promise((resolve, reject) => {
    AsyncStorage.removeItem("user")
      .then(() => {
        resolve()
      })
      .catch((error) => {
        reject(error)
      })
  })
}
