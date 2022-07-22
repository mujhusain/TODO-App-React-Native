import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import InputItem from "./components/InputItem";
import ListItem from "./components/ListItem";

export default function App() {
  const [list, setList] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  function handleAddPress(enteredText) {
    setList((currentList) => [
      ...currentList,
      { text: enteredText, id: Math.random() },
    ]);
    setIsVisible(false);
  }

  function handleDelete(id) {
    setList((itemList) => {
      return itemList.filter((item) => item.id !== id);
    });
  }

  function showModal() {
    setIsVisible(true);
  }

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Task" color="teal" onPress={showModal} />
      {isVisible && (
        <InputItem
          handlePress={handleAddPress}
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      )}
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          renderItem={(itemData) => {
            return (
              <ListItem
                id={itemData.item.id}
                text={itemData.item.text}
                handleDelete={handleDelete}
              />
            );
          }}
          keyExtractor={(item, index) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    marginTop: 50,
    paddingHorizontal: 20,
  },

  listContainer: {
    flex: 6,
    marginTop: 10,
  },
});
