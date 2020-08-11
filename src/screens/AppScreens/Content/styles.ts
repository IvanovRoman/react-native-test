import { StyleSheet } from "react-native"
import { colors } from "../../../constants"
const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
  },
  container: {
    flex: 1,
    backgroundColor: colors.containerBg,
  },
  title: {
    fontSize: 20,
    color: "#000",
    fontWeight: "500",
  },
  desc: {
    paddingTop: 15,
    fontSize: 18,
    color: "#000",
  },
  loadingFooter: {
    justifyContent: "center",
    alignItems: "center",
  },
})

export default styles
