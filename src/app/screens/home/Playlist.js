import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  FlatList,
  ImageBackground,
} from "react-native";

import MamaKilo from "../../../utils/MamaKilo";
import Artists from "../../services/lineUp.data";

const Item = ({ title }) => (
  <View>
    <Text style={styles.item}>{title}</Text>
  </View>
);

const Playlist = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://www.wknd.fi/content/uploads/2023/08/WKND23_Day2_223431_HeikkiSalonen_.jpg",
      }}
      style={{ flex: 1, position: "relative" }}
      resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <MamaKilo color="#fff" size={40} height={80}>
          Playlists
        </MamaKilo>
        <FlatList
          data={Artists}
          renderItem={({ item }) => <Item title={item.name} />}
          keyExtractor={(item) => item.name}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 40,
    // alignItems: "center",
    // backgroundColor: "rgb(33, 37, 41)",
    flex: 1,
    justifyContent: "center",
  },
  div: {
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    backgroundColor: "rgba(5,5,5, 0.5)",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    color: "#fff",
  },
});

export default Playlist;
