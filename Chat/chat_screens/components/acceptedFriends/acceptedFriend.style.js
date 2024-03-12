import { StyleSheet } from "react-native";

const acceptedFriendStyle = StyleSheet.create({
  mainPressable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    borderBottomWidth: 0.34,
    borderBottomColor: "gray",
    paddingBottom: 10,
  },
  unfriendPressable: { backgroundColor: "#FF6347", padding: 10, borderRadius: 6 },
});

export { acceptedFriendStyle };
