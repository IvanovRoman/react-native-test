import React, { Component } from "react"
import {
  View,
  Text,
  AsyncStorage,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import { colors } from "../constants"
import Icon from "react-native-vector-icons/AntDesign"

interface Props {
  title: string
  user?: string
  rightBlock?: boolean
  goBack?: () => void
  leftButtonPress?: () => void
  rightButtonPress?: () => void
}

export class Header extends Component<Props, {}> {
  state = {
    user: "",
  }

  async componentDidMount() {
    try {
      const login = await AsyncStorage.getItem("user")
      this.setState({ user: login })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const {
      title,
      rightBlock = true,
      goBack,
      leftButtonPress,
      rightButtonPress,
    } = this.props

    return (
      <View style={styles.container}>
        {/* <View style={styles.leftContainer}>
          <TouchableOpacity style={styles.iconButton} onPress={leftButtonPress}>
            <Icon name="ios-menu" size={24} />
          </TouchableOpacity>
        </View> */}
        <View style={styles.leftContainer}>
          {goBack ? (
            <TouchableOpacity style={styles.iconButton} onPress={goBack}>
              <Icon style={styles.iconArrow} name="arrowleft" size={24} />
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={styles.midContainer}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
        {rightBlock ? (
          <View style={styles.rightContainer}>
            <Text style={styles.headerTitle}>{this.state.user}</Text>
            <Icon style={styles.iconUser} name="user" size={24} />
          </View>
        ) : null}
        {/* <View style={styles.rightContainer}>
          {rightButtonPress ? (
            <TouchableOpacity
              style={styles.iconButton}
              onPress={rightButtonPress}
            >
              <Icon name="ios-power" size={24} />
            </TouchableOpacity>
          ) : null}
        </View> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  iconArrow: {
    alignSelf: "flex-start",
    color: "#fff",
  },
  iconUser: {
    alignSelf: "flex-end",
    color: "#fff",
  },
  container: {
    flexDirection: "row",
    paddingRight: 10,
    paddingLeft: 10,
    height: 56,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.textColorRed,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  leftContainer: {
    flex: 1 / 6,
    alignItems: "flex-start",
  },
  midContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
  rightContainer: {
    flex: 1 / 2,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  iconButton: {
    paddingHorizontal: 0,
  },
})
