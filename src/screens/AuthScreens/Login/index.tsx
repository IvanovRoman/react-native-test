import React, { Component } from "react"
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native"
import { NavigationScreenProp, NavigationState } from "react-navigation"
import { loginUserService } from "../../../redux/services/user"
import { Button, Header, AnimatedInput } from "../../../components"
import styles from "./styles"

interface Props {
  navigation: NavigationScreenProp<NavigationState>
}

class Login extends Component<Props, {}> {
  state = {
    login: "",
    password: "",
  }

  handleLogin = () => {
    const { navigation } = this.props
    loginUserService(this.state.login, this.state.password)
      .then((res) => {
        navigation.navigate("AppStack")
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {})
    this.setState({ offset: 10 })
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={100}
      >
        <View style={styles.container}>
          <Header title="Вход в личный кабинет" rightBlock={false} />
          <ScrollView>
            <View style={styles.loginStyle}>
              <Text style={styles.loginLabel}>Вход</Text>
              <Text style={{ textAlign: "center", width: "80%" }}>
                Политика затрагивает интересы всех людей. Вопрос заключается в
                том, насколько сознательно или бессознательно человек
                оказывается субъектом политических отношений, насколько
                обдуманно он делает свой политический выбор при голосовании в
                органы власти.
              </Text>
              <AnimatedInput
                placeholder="Логин"
                value={this.state.login}
                onChangeText={(login: string) =>
                  this.setState({ login: login })
                }
                styleLabel={{ fontWeight: "600" }}
                styleBodyContent={{
                  borderBottomWidth: 1.5,
                }}
              />
              <AnimatedInput
                placeholder="Пароль"
                value={this.state.password}
                secure={true}
                onChangeText={(password: string) =>
                  this.setState({ password: password })
                }
                styleLabel={{ fontWeight: "600" }}
                styleBodyContent={{
                  borderBottomWidth: 1.5,
                }}
              />
              <Button text="Войти" onPress={this.handleLogin} />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default Login
