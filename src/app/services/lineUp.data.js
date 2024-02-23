import { Image, Dimensions } from "react-native";

const Artists = [
  {
    name: "Femi One",
    yt: "https://www.youtube.com/@FemiOne",
    country: "KE",
    imageList: () => (
      <Image
        source={require("../../../assets/images/femione.webp")}
        resizeMode="cover"
        style={{ height: 180, width: 180, opacity: 0.9, borderRadius: 20 }}
      />
    ),
  },
  {
    name: "Otile Brown",
    country: "KE",
    yt: "https://www.youtube.com/channel/UCvA_SWl8Ti3hvbmJyrLFqZQ",
    imageDetail: () => (
      <Image
        source={require("../../../assets/images/otile.webp")}
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
        source={require("../../../assets/images/otile.webp")}
        resizeMode="cover"
        style={{ height: 180, width: 180, opacity: 0.9, borderRadius: 20 }}
      />
    ),
  },
  {
    name: "JB Mpiana",
    country: "KE",
    yt: "https://www.youtube.com/@jbmpiana01",
    imageDetail: () => (
      <Image
        source={require("../../../assets/images/jbmpiana.webp")}
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
        source={require("../../../assets/images/jbmpiana.webp")}
        resizeMode="cover"
        style={{ height: 180, width: 180, opacity: 0.9, borderRadius: 20 }}
      />
    ),
  },
  {
    name: "Bensoul",
    country: "KE",
    yt: "https://www.youtube.com/channel/UCCe1fW83L5lfTfUPS11Py1Q",
    imageDetail: () => (
      <Image
        source={require("../../../assets/images/bensoul.webp")}
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
        source={require("../../../assets/images/bensoul.webp")}
        resizeMode="cover"
        style={{ height: 180, width: 180, opacity: 0.8, borderRadius: 20 }}
      />
    ),
  },
  {
    name: "Samidoh",
    country: "KE",
    yt: "https://www.youtube.com/channel/UCP_sNQi5Y9ly0hW8arpPg_Q",
    imageDetail: () => (
      <Image
        source={require("../../../assets/images/samidoh.webp")}
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
        source={require("../../../assets/images/samidoh.webp")}
        resizeMode="cover"
        style={{ height: 180, width: 180, opacity: 0.8, borderRadius: 20 }}
      />
    ),
  },
  {
    name: "Musa Keys",
    country: "KE",
    yt: "https://www.youtube.com/channel/UClfP4x-y-VUywshCEMVz02w",
    imageDetail: () => (
      <Image
        source={require("../../../assets/images/musakeys.webp")}
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
        source={require("../../../assets/images/musakeys.webp")}
        resizeMode="cover"
        style={{ height: 180, width: 180, opacity: 0.9, borderRadius: 20 }}
      />
    ),
  },
  {
    name: "Nviiri the Storyteller",
    country: "KE",
    yt: "https://www.youtube.com/c/NviiritheStoryteller",
    imageDetail: () => (
      <Image
        source={require("../../../assets/images/nviiri.webp")}
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
        source={require("../../../assets/images/nviiri.webp")}
        resizeMode="cover"
        style={{ height: 180, width: 180, opacity: 0.9, borderRadius: 20 }}
      />
    ),
  },
  {
    name: "H_art the Band",
    country: "KE",
    yt: "https://www.youtube.com/c/hartthebandofficial",
    imageDetail: () => (
      <Image
        source={require("../../../assets/images/harttheband.webp")}
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
        source={require("../../../assets/images/harttheband.webp")}
        resizeMode="cover"
        style={{ height: 180, width: 180, opacity: 0.9, borderRadius: 20 }}
      />
    ),
  },
  {
    name: "King Promise",
    country: "KE",
    yt: "https://www.youtube.com/channel/UCoYzjVDfp5GPyeP8Vx818RQ",
    imageDetail: () => (
      <Image
        source={require("../../../assets/images/kingpromise.webp")}
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
        source={require("../../../assets/images/kingpromise.webp")}
        resizeMode="cover"
        style={{ height: 180, width: 180, opacity: 0.9, borderRadius: 20 }}
      />
    ),
  },
  {
    name: "Nadia Mukami",
    country: "KE",
    yt: "https://www.youtube.com/@NadiaMukami",
    imageDetail: () => (
      <Image
        source={require("../../../assets/images/nadia.webp")}
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
        source={require("../../../assets/images/nadia.webp")}
        resizeMode="cover"
        style={{ height: 180, width: 180, opacity: 0.9, borderRadius: 20 }}
      />
    ),
  },
  {
    name: "Sanaipei Tande",
    country: "KE",
    yt: "https://www.youtube.com/@SanaipeiTandeKE",
    imageDetail: () => (
      <Image
        source={require("../../../assets/images/sanaipei.webp")}
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
        source={require("../../../assets/images/sanaipei.webp")}
        resizeMode="cover"
        style={{ height: 180, width: 180, opacity: 0.9, borderRadius: 20 }}
      />
    ),
  },
  {
    name: "Mejja",
    country: "KE",
    yt: "https://www.youtube.com/channel/UCuRGQqKKdPOSPB0XG5VNk5g",
    imageDetail: () => (
      <Image
        source={require("../../../assets/images/mejja.webp")}
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
        source={require("../../../assets/images/mejja.webp")}
        resizeMode="cover"
        style={{ height: 180, width: 180, opacity: 0.9, borderRadius: 20 }}
      />
    ),
  },
];

export default Artists;
