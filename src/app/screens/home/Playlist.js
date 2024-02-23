import { View, Text, StyleSheet, Image, Dimensions, SafeAreaView, FlatList } from "react-native";

const lineup = [
  {
    name: "Femi One",
    country: "KE",
    imageList: () => (
      <Image
        source={require("../../../../assets/images/femione.webp")}
        resizeMode="cover"
        style={{ height: 180, width: 180, opacity: 0.9, borderRadius: 20 }}
      />
    ),
  },
  {
    name: "Otile Brown",
    country: "KE",
    imageDetail: () => (
      <Image
        source={require("../../../../assets/images/otile.webp")}
        resizeMode="cover"
        style={{
          height: 300,
          width: Dimensions.get("window").width - 40,
          opacity: 0.9,
        }}
      />
    ),
    imageList: () => (
      <Image
        source={require("../../../../assets/images/otile.webp")}
        resizeMode="cover"
        style={{ height: 180, width: 180, opacity: 0.9, borderRadius: 20 }}
      />
    ),
  },
];

const Item = ({ title }) => (
  <View>
    <Text style={styles.item}>{title}</Text>
  </View>
);

const Playlist = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ textAlign: "center", fontSize: 42 }}>Playlists</Text>
      <FlatList data={lineup} renderItem={({ item }) => <Item title={item.name} />} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 15,
    // alignItems: "center",
    flex: 1 / 2,
    justifyContent: "center",
  },
  div: {
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "#f58a42",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
});

export default Playlist;
