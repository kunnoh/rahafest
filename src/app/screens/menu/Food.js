// import { Buffer } from "buffer";
// import * as FileSystem from "expo-file-system";
// import * as Sharing from "expo-sharing";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
// import Pdf from "react-native-pdf";

const pdfUrl = "http://192.168.88.118:8080/RahaBarMenu1.pdf";
const fileName = "RahaBarMenu1.pdf";

const Food = () => {
  // useEffect(() => {
  //   const downloadPdf = async () => {
  //     try {
  //       const fileUri = FileSystem.documentDirectory + fileName;
  //       const downloadObject = FileSystem.createDownloadResumable(pdfUrl, fileUri);
  //       const { uri } = await downloadObject.downloadAsync();
  //       console.log(uri);
  //       if (uri) {
  //         await Sharing.shareAsync(uri);
  //       } else {
  //         console.log("Failed to download the file");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   downloadPdf();
  // });

  return (
    <View style={styles.container}>
      <Text>Food</Text>
      {/* <Pdf
        source={source}
        onError={(err) => {
          console.log(err);
        }}
      /> */}
      
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  pdf: {
    flex: 1,
    width: "100%",
  },
});
