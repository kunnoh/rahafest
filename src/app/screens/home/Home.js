import { FontAwesome5, Entypo, Ionicons } from "@expo/vector-icons";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
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
import { Modal, Portal } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import MamaKilo from "../../../utils/MamaKilo";

export default function Home({ navigation }) {
  const [fontsLoaded] = Font.useFonts({
    "Roboto-Light": require("../../../../assets/fonts/Roboto-Light.ttf"),
    "Roboto-Bold": require("../../../../assets/fonts/Roboto-Bold.ttf"),
  });
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <ImageBackground
      source={require("../../../../assets/images/background.webp")}
      style={{ flex: 1, position: "relative" }}
      resizeMode="cover">
      <SafeAreaView style={styles.container}>
        <View style={styles.logo}>
          <Image
            style={{ height: 340, width: 340, flex: 1 / 4 }}
            source={require("../../../../assets/images/rahafest.png")}
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
            style={{
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Playlist")}>
            <Image
              source={require("../../../../assets/images/blob-grid-orange-nobg.png")}
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
            }}
            onPress={() => showModal()}>
            <Image
              source={require("../../../../assets/images/blob-grid-orange-nobg.png")}
              style={{ height: 120, width: 120, opacity: 0.15 }}
            />
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

          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={styles.modalStyle}>
              <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                <FontAwesome5
                  name="tiktok"
                  size={38}
                  color="#fff"
                  style={{ marginHorizontal: 10 }}
                  onPress={() => Linking.openURL("https://www.tiktok.com/@rahafest/")}
                />
                <Entypo
                  name="twitter"
                  size={40}
                  color="#4267B2"
                  style={{ marginHorizontal: 10 }}
                  onPress={() => Linking.openURL("https://twitter.com/raha_fest")}
                />
                <Entypo
                  name="instagram"
                  size={40}
                  color="#C13584"
                  style={{ marginHorizontal: 10 }}
                  onPress={() => Linking.openURL("https://www.instagram.com/rahafest/")}
                />
                <Entypo
                  name="youtube"
                  size={40}
                  color="#FF0000"
                  style={{ marginHorizontal: 10 }}
                  onPress={() => Linking.openURL("https://www.youtube.com/@rahafest")}
                />
              </View>
            </Modal>
          </Portal>

          <Pressable
            style={{
              position: "relative",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Partners")}>
            <Image
              source={require("../../../../assets/images/blob-grid-orange-nobg.png")}
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
            <Text style={{ color: "white", fontSize: 20 }}>VENUE</Text>
          )}
          <View>
            <MamaKilo color="#ffffff" size={20} height={30}>
              UHURU GARDENS, NAIROBI, KENYA
            </MamaKilo>
          </View>
        </View>
        <View style={{ justifyContent: "center", marginTop: 30, flexDirection: "row-reverse" }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            {fontsLoaded ? (
              <Text style={styles.locationText}>DATES:</Text>
            ) : (
              <Text style={{ color: "white", fontSize: 20 }}>DATES</Text>
            )}
            <View style={{ display: "flex", flexDirection: "column" }}>
              <MamaKilo color="#ffffff" size={20} height={30}>
                SAT 30TH & SUN 31ST MARCH 2024
              </MamaKilo>
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
    fontSize: 18,
    marginTop: 6,
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
  modalStyle: {
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});
