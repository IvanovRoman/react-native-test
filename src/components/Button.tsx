import React, { Component } from "react"
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native"
import { colors } from "../constants"

interface Props extends TouchableOpacityProps {
  text: string
  cnt?: boolean
  fillColor?: any
  textColor?: any
}

export class Button extends Component<Props, {}> {
  render() {
    const { text, cnt, fillColor, textColor } = this.props
    return (
      <TouchableOpacity
        {...this.props}
        style={
          cnt ? [styles.buttonContentStyle, fillColor] : styles.buttonStyle
        }
      >
        <Text
          style={
            cnt ? [styles.buttonTextStyle, textColor] : styles.buttonTextStyle
          }
        >
          {text}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: colors.borderColor,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
    width: "80%",
    borderRadius: 10,
  },
  buttonContentStyle: {
    fontSize: 15,
    backgroundColor: colors.borderColor,
    height: 45,
    borderColor: colors.textColorRed,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
  },
  buttonTextStyle: {
    color: colors.containerBg,
    fontWeight: "700",
    fontSize: 16,
  },
})
