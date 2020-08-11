import React from "react"
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
} from "react-navigation"

import Home from "../screens/AppScreens/Home"
import Content from "../screens/AppScreens/Content"
import Login from "../screens/AuthScreens/Login"
import AuthLoading from "../screens/AuthLoading"

const MainStack = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
  }
)

const AuthStack = createStackNavigator(
  {
    Login: { screen: Login },
  },
  {
    initialRouteName: "Login",
    headerMode: "none",
  }
)

const AppStack = createDrawerNavigator({
  MainStack: { screen: MainStack },
  Content: { screen: Content },
})

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      AuthStack: AuthStack,
      AppStack: AppStack,
    },
    {
      initialRouteName: "AuthLoading",
    }
  )
)
