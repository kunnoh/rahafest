import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

import prod from "../../../../env/env";
import MamaKilo from "../../../utils/MamaKilo";
import { GetPartners } from "../../services/partners.service";

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPartners() {
      try {
        const { data } = await GetPartners();
        setPartners(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadPartners();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="rgb(255, 215, 0)" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <MamaKilo color="rgb(255, 215, 0)" size={42} height={62}>
          Gold Sponsors
        </MamaKilo>
        <View style={styles.imgWrapper}>
          {partners?.gold.map((partner, index) => (
            <View key={index} style={styles.logoWrapper}>
              <Image style={styles.img} source={{ uri: `${prod.endpoint + partner.logo}` }} />
            </View>
          ))}
        </View>
      </View>

      <View style={styles.container}>
        <MamaKilo color="rgb(229, 227, 226)" size={42} height={62}>
          Silver Sponsors
        </MamaKilo>
        <View style={styles.imgWrapperSilver}>
          {partners?.silver.map((partner, index) => (
            <View key={index} style={styles.logoWrapper}>
              <Image style={styles.img} source={{ uri: `${prod.endpoint + partner.logo}` }} />
            </View>
          ))}
        </View>
      </View>

      <View style={styles.container}>
        <MamaKilo color="rgb(255, 23, 72)" size={42} height={62}>
          Partners
        </MamaKilo>
        <View style={styles.imgWrapper}>
          {partners?.partner.map((partner, index) => (
            <View key={index} style={styles.logoWrapper}>
              <Image style={styles.img} source={{ uri: `${prod.endpoint + partner.logo}` }} />
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(33, 37, 41)",
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "rgb(33, 37, 41)",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  logoWrapper: {
    justifyContent: "center",
  },
  imgWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginVertical: 20,
  },
  imgWrapperSilver: {
    // display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginVertical: 20,
    alignContent: "center",
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 10,
  },
});

export default Partners;
