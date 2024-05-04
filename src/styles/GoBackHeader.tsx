import { StyleSheet } from "react-native";
import { gray50 } from "../constants/colors";

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomColor: gray50,
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    width: "100%",
    marginTop: 40,
    marginBottom: 15,
  },
  title: {
    fontSize: 17,
    fontWeight: "500",
  },
});
