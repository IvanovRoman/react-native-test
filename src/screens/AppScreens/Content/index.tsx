import React, { Component } from "react"
import { View, Text } from "react-native"
import { NavigationScreenProp, NavigationState } from "react-navigation"
import { Header, Button } from "../../../components"
import styles from "./styles"
import { logoutUserService } from "../../../redux/services/user"

interface Props {
  navigation: NavigationScreenProp<NavigationState>
}

class Content extends Component<Props> {
  handleLogout = () => {
    const { navigation } = this.props
    logoutUserService().then(() => {
      navigation.navigate("AuthStack")
    })
  }

  render() {
    const { navigation } = this.props
    const { title, description } = navigation.state.params

    return (
      <View style={styles.container}>
        <Header title="График" goBack={() => navigation.goBack()} />
        <View>
          <View style={{ padding: 15 }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.desc}>{description}</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <Button
            cnt={true}
            fillColor={{ backgroundColor: "#fff" }}
            textColor={{ color: "#BB0D02" }}
            onPress={() => navigation.goBack()}
            text="Назад"
          />
          <Button
            cnt={true}
            textColor={{ color: "#fff" }}
            onPress={() => this.handleLogout()}
            text="Выйти из аккаунта"
          />
        </View>
      </View>
    )
  }
}

export default Content
