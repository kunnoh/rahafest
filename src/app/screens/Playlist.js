import { View, Text, StyleSheet } from "react-native";

const Playlist = () => {
  return (
    <View style={styles.container}>
      <Text>Playlist</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

export default Playlist;
