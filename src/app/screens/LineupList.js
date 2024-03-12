import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ImageBackground,
  Pressable,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MamaKilo from "../../utils/MamaKilo";
import Artists from "../services/lineUp.data";

export default function LineupList() {
  const navigation = useNavigation();

  const renderItem = (itemData) => {
    return (
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 10,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "white",
          borderRadius: 20,
          borderWidth: 2,
        }}>
        {itemData.item.imageList()}
        <View
          style={{
            flexDirection: "row",
            marginLeft: 10,
            alignSelf: "flex-start",
            justifyContent: "space-between",
            width: 170,
          }}>
          <View style={{ flex: 2.9 / 3 }}>
            <MamaKilo color="white" size={18} height={30}>
              {itemData.item.name}
            </MamaKilo>
            <MamaKilo color="white" size={15} height={30}>
              {itemData.item.country}
            </MamaKilo>
          </View>
          {/* <Pressable
            style={{ justifyContent: "center" }}
            onPress={() => navigation.navigate("LineupDetail", { ...itemData })}>
            <Ionicons name="ellipsis-horizontal-circle-sharp" size={35} color="white" />
          </Pressable> */}
        </View>
      </View>
    );
  };

  return (
    <ImageBackground
      source={{
        uri: "https://www.wknd.fi/content/uploads/2023/08/WKND23_Day2_223431_HeikkiSalonen_.jpg",
      }}
      style={{ flex: 1, position: "relative" }}
      resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <Image
            style={{ height: 130, width: 130, marginRight: 10, flex: 1 / 4 }}
            source={require("../../../assets/images/rahalogo.png")}
          />

          {/** <span style={{ color: "#11e0ff" }}>R</span>
      <span style={{ color: "#ffffff" }}>A</span>
      <span style={{ color: "#e42eff" }}>H</span>
      <span style={{ color: "#ffdf2d" }}>A</span>
      <span style={{ color: "#05e705" }}>F</span>
      <span style={{ color: "#ff1748" }}>E</span>
      <span style={{ color: "#ffffff" }}>S</span>
  <span style={{ color: "#11e0ff" }}>T</span> **/}

          {/** <View style={{flex: 3/4}}>
       <MamaKilo color="#ffffff" size={25} height={35}>Food, Art, Culture, Music</MamaKilo>
</View> **/}
        </View>

        <View style={{ marginTop: 160 }}>
          <FlatList
            numColumns={2}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
            data={Artists}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        </View>
      </SafeAreaView>

      <StatusBar style="light" />
    </ImageBackground>
  );
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
    position: "absolute",
    zIndex: 1,
    // elevation: 1,
    // flexDirection: 'row',
    alignItems: "center",
    marginRight: 10,
    marginLeft: Dimensions.get("window").width / 2 - 65,
    marginTop: 50,
    marginBottom: 10,
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
