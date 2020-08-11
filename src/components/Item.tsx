import React, { Component } from "react"
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewProps,
} from "react-native"
import { colors } from "../constants"

interface Props extends ViewProps, TouchableOpacityProps {
  title: string
}

export class Item extends Component<Props, {}> {
  render() {
    const { title } = this.props
    return (
      <TouchableOpacity {...this.props} style={styles.itemContainer}>
        <View style={styles.itemView}>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.containerBg,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  itemView: {
    padding: 15,
    width: "100%",
    borderWidth: 1,
    borderColor: colors.borderColor,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#000",
  },
})
