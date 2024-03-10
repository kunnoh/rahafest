import { Pressable, Image, Text } from "react-native";

const AcceptedFriend = ({ index, item, Unfriend }) => {
  const goToChat = () => {
    alert("Chat with " + item.name);
    // console.log(item);
  };

  return (
    <Pressable
      key={index}
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
        borderBottomWidth: 0.34,
        borderBottomColor: "gray",
        paddingBottom: 10,
      }}
      onPress={goToChat}>
      <Image
        style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: "wheat" }}
        source={{ uri: item.image }}
      />

      <Text style={{ fontSize: 15, marginLeft: 10, flex: 1 }}>
        {item?.name}. {item?.friends?.length} mutual friends
      </Text>

      <Pressable
        onPress={() => Unfriend(item._id)}
        style={{ backgroundColor: "#FF6347", padding: 10, borderRadius: 6 }}>
        <Text style={{ textAlign: "center", color: "white" }}>Unfriend</Text>
      </Pressable>
    </Pressable>
  );
};

export default AcceptedFriend;
