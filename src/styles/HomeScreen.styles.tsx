import { StyleSheet } from "react-native";
import { backgroundColor, textColor } from "../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    position: "relative",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  iconContainer: {
    marginRight: 8,
  },
  padding: {
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 24,
  },
  addressText: {
    marginHorizontal: 4,
    fontSize: 12,
    fontWeight: "400",
    color: textColor,
  },
  addressLabel: {
    fontSize: 13,
    fontWeight: "400",
    color: textColor,
  },
});
