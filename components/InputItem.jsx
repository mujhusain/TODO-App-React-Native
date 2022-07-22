import {
  TextInput,
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function InputItem({ handlePress, isVisible, setIsVisible }) {
  const [enteredText, setEnteredText] = useState("");
  function handleTextChange(enteredText) {
    setEnteredText(enteredText);
  }
  function onAddPress() {
    handlePress(enteredText);
    setEnteredText("");
  }
  function cancelModal() {
    setIsVisible(false);
  }
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.logoimage}
          source={require("../assets/images/todologo.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Goal"
          onChangeText={handleTextChange}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD Goal" onPress={onAddPress} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="tomato" onPress={cancelModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    paddingBottom: 20,
    backgroundColor: "#cccc",
  },
  textInput: {
    width: "90%",
    marginRight: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#cccc",
    borderRadius: 10,
    backgroundColor: "white",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 20,
  },
  logoimage: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -100,
    marginBottom: 50,
  },
  button: {
    width: "40%",
  },
});

export default InputItem;
