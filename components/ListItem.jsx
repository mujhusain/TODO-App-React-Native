import { View, Text, Pressable, StyleSheet } from "react-native";
function ListItem({ text, handleDelete, id }) {
  return (
    <View style={styles.item}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={handleDelete.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem} //This Is only for Iphone devices
      >
        <Text style={styles.itemText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: "#5e5e5e",
  },
  pressedItem: {
    opacity: 0.5,
  },
  itemText: {
    padding: 7,
    fontSize: 20,
    color: "#FFFFFF",
  },
});

export default ListItem;
