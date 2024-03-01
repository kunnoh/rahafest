import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { List, ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import MamaKilo from "../../utils/MamaKilo";
import { GetFaq } from "../services/faq.api.service";

const Info = () => {
  const [expanded, setExpanded] = useState(null);
  const handlePress = () => setExpanded(!expanded);
  const [faqs, setFaqs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadFaqs() {
      try {
        const { data } = await GetFaq();
        setFaqs(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadFaqs();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#f58a42" />
      </View>
    );
  }

  const handleAccordionPress = (index) => {
    setExpanded((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <SafeAreaView>
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
            <FAQAccordion
              key={index}
              faq={faq}
              isExpanded={index === expanded}
              onPress={() => handleAccordionPress(index)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Info;

const FAQAccordion = ({ faq, isExpanded, onPress }) => {
  return (
    <List.Accordion title={faq.question} expanded={isExpanded} onPress={onPress}>
      <Text style={styles.ans}>{faq.answer}</Text>
    </List.Accordion>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(229, 227, 226)",
  },
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
  ans: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
});
