import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { List } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import MamaKilo from "../../utils/MamaKilo";
import { GetFaq } from "../services/faq.api.service";

const Info = () => {
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    async function loadFaqs() {
      try {
        const { data } = await GetFaq();
        setFaqs(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadFaqs();
  }, []);

  return (
    // <SafeAreaView>

    // </SafeAreaView>
    <ScrollView>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <MamaKilo color="rgb(229, 227, 226)" size={30} height={46}>
            Frequently
          </MamaKilo>
          <MamaKilo color="rgb(229, 227, 226)" size={30} height={46}>
            Asked
          </MamaKilo>
          <MamaKilo color="rgb(229, 227, 226)" size={30} height={46}>
            Questions
          </MamaKilo>
        </View>

        {faqs.map((faq, index) => (
          <List.Accordion key={index} title={faq.question}>
            <List.Item title={faq.answer} />
          </List.Accordion>
        ))}
      </View>
    </ScrollView>
  );
};

export default Info;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "grey",
  },
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginTop: 80,
    marginBottom: 80,
  },
  accordion: {
    marginTop: 80,
  },
});
