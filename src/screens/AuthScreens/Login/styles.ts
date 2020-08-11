import { StyleSheet } from "react-native"
import { colors } from "../../../constants"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.containerBg,
  },
  headTextStyle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textHeader,
  },
  loginStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  loginLabel: {
    flex: 1,
    justifyContent: "center",
    fontSize: 50,
    color: colors.borderColor,
    fontWeight: "700",
  },
})

export default styles
