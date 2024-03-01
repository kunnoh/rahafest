import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Dimensions } from "react-native";

const Stack = createNativeStackNavigator();

export default function Lineup() {
  return <></>;
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 0,
  },

  container: {
    flex: 1,
    position: "relative",
  },

  logo: {
    // position: "absolute",
    // zIndex: 1,
    // elevation: 1,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10,
    // marginLeft: (Dimensions.get('window').width / 2 ) - 75,
    marginTop: 40,
    marginBottom: 20,
  },

  mamakilo: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
  },

  mamakiloContainer: {
    // backgroundColor: "#483248",
    zIndex: 1,
    // position: 'absolute',
    marginTop: 150,
    marginLeft: Dimensions.get("window").width / 2 - 200,
    height: 200,
    paddingHorizontal: 10,
    opacity: 0.8,
    justifyContent: "center",
    alignItems: "center",
    width: 400,
  },
});
