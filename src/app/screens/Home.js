import { FontAwesome5, Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  Pressable,
  Linking,
} from "react-native";
import { SpeedDial, SocialIcon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

import MamaKilo from "../../utils/MamaKilo";

export default function Home({ navigation }) {
  const [fontsLoaded] = Font.useFonts({
    "Roboto-Light": require("../../../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Bold": require("../../../assets/fonts/Roboto-Bold.ttf"),
  });

  return (
    <ImageBackground
      source={require("../../../assets/images/background.webp")}
      style={{ flex: 1, position: "relative" }}
      resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <Image
            style={{ height: 340, width: 340, flex: 1 / 4 }}
            source={require("../../../assets/images/rahafest.png")}
          />
        </View>

        <View
          style={{
            marginLeft: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: "126%",
            marginRight: 20,
            marginBottom: 10,
          }}>
          <Pressable
            onPress={() => {
              navigation.navigate("Playlist");
            }}
            style={{
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Image
              source={require("../../../assets/images/blob-grid-orange-nobg.png")}
              style={{ height: 120, width: 120, opacity: 0.15 }}
            />
            <View style={{ position: "absolute" }}>
              <FontAwesome5 name="headphones" size={50} color="white" />
              {fontsLoaded ? (
                <Text
                  style={{
                    fontFamily: "Roboto-Bold",
                    color: "white",
                    fontWeight: "bold",
                    marginTop: 5,
                  }}>
                  Playlist
                </Text>
              ) : (
                <Text style={{ color: "white", fontWeight: "bold", marginTop: 5 }}>Playlist</Text>
              )}
            </View>
          </Pressable>

          <Pressable
            style={{
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Image
              source={require("../../../assets/images/blob-grid-orange-nobg.png")}
              style={{ height: 120, width: 120, opacity: 0.15 }}
            />
            {/* <SpeedDial isOpen>
              <SpeedDial.Action
                // title="fb"
                onPress={() => {
                  console.log("presssed");
                }}
              />
            </SpeedDial> */}
            <View style={{ position: "absolute" }}>
              <Entypo name="mobile" size={50} color="white" />
              {fontsLoaded ? (
                <Text
                  style={{
                    fontFamily: "Roboto-Bold",
                    color: "white",
                    fontWeight: "bold",
                    marginTop: 5,
                  }}>
                  Socials
                </Text>
              ) : (
                <Text style={{ color: "white", fontWeight: "bold", marginTop: 5 }}>Socials</Text>
              )}
            </View>
          </Pressable>

          <Pressable
            style={{
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => Linking.openURL("http://www.rahafest.com/partners")}>
            <Image
              source={require("../../../assets/images/blob-grid-orange-nobg.png")}
              style={{ height: 120, width: 120, opacity: 0.15 }}
            />
            <View style={{ position: "absolute" }}>
              <Ionicons name="people-sharp" size={50} color="white" />
              {fontsLoaded ? (
                <Text
                  style={{
                    fontFamily: "Roboto-Bold",
                    color: "white",
                    fontWeight: "bold",
                    marginTop: 5,
                  }}>
                  Partners
                </Text>
              ) : (
                <Text style={{ color: "white", fontWeight: "bold", marginTop: 5 }}>Partners</Text>
              )}
            </View>
          </Pressable>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: 40,
          }}>
          {fontsLoaded ? (
            <Text style={styles.locationText}>VENUE:</Text>
          ) : (
            <Text style={styles.locationText}>VENUE</Text>
          )}
          <View>
            <MamaKilo color="#ffffff" size={20} height={30}>
              UHURU GARDENS, NAIROBI, KENYA
            </MamaKilo>
            {/* <MamaKilo color="#ffffff" size={25} height={35}>
              NAIROBI, KENYA
            </MamaKilo> */}
          </View>
        </View>
        <View style={{ justifyContent: "center", marginTop: 30, flexDirection: "row-reverse" }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            {fontsLoaded ? (
              <Text style={styles.locationText}>DATES:</Text>
            ) : (
              <Text style={styles.locationText}>DATES</Text>
            )}
            <View style={{ display: "flex", flexDirection: "column" }}>
              <MamaKilo color="#ffffff" size={20} height={30}>
                SAT 30TH & SUN 31ST MARCH 2024
              </MamaKilo>
              {/* <MamaKilo color="#ffffff" size={25} height={35}>
                MARCH 2024
              </MamaKilo> */}
            </View>
          </View>
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
    marginLeft: Dimensions.get("window").width / 2 - 170,
    marginTop: -5,
    marginBottom: 60,
  },
  locationText: {
    fontFamily: "Roboto-Light",
    color: "white",
    fontSize: 16,
    marginTop: 7,
    marginRight: 8,
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
