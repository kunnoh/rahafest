import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Pressable,
  View,
  ImageBackground,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";

import MamaKilo from "../../utils/MamaKilo";
import { GetSchedule } from "../services/schedule.service";

const Schedule = () => {
  const [isLoading, setLoading] = useState(true);
  const [schedule, setSchedule] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    async function loadSchedule() {
      try {
        // const { data } = await GetSchedule();
        // setSchedule(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    loadSchedule();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#bc4a0d" />
      </View>
    );
  }

  const dayOne = [
    "Femi One",
    "Mejja",
    "Samidoh",
    "Musa Keys",
    // "Davido",
    "Makadem",
    "Okello Max",
    "Boutross",
    "Sofia",
    "Frasha",
    "Nyanshinki",
  ];

  const dayTwo = [
    "Nadia Mukami",
    "Sanapei",
    "Bensoul",
    "Nviiri",
    "Hart the band",
    "Otile Brown",
    // "King Promise",
    "JB Mpiana",
    "Ya Levis",
    "Musa Keys",
    "Nasty C",
    "Bien",
  ];

  return (
    <ImageBackground
      source={require("../../../assets/images/RAHAFESTTABLESBACKGROUND.png")}
      style={{ flex: 1, position: "relative", justifyContent: "center" }}
      resizeMode="stretch">
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={{ justifyContent: "center", height: "100%" }}>
          {/* <MamaKilo color="#fff" size={40} height={80}>
          Lineup
        </MamaKilo> */}
          <View style={styles.wrapper}>
            <MamaKilo color="#fff" size={30} height={50}>
              Day 1
            </MamaKilo>
            <Text style={styles.boldtext}>Davido</Text>
            {dayOne.map((a, index) => (
              <View key={index}>
                <Text style={styles.text}>{a}</Text>
              </View>
            ))}
          </View>
          <View style={styles.wrapper}>
            <MamaKilo color="#fff" size={30} height={50}>
              Day 2
            </MamaKilo>
            <Text style={styles.boldtext}>King Promise</Text>
            {dayTwo.map((a, index) => (
              <View key={index}>
                <Text style={styles.text}>{a}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(229, 227, 226)",
  },
  container: {
    padding: 15,
    paddingTop: 40,
    // alignItems: "center",
    // backgroundColor: "rgb(33, 37, 41)",
    flex: 1,
    // justifyContent: "center",
  },
  wrapper: {
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
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
  boldtext: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
});
