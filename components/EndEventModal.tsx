import * as React from "react";
import { Modal, Portal, Button, Provider } from "react-native-paper";
import { StyleSheet, Image } from "react-native";
import { View, Text } from "./Themed";

export const MyModal = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.contentContainerStyle}
        >
          <Text style={styles.text1}>סיום אירוע</Text>
          <Image
            style={{ width: "20%", height: "20%", alignSelf: "center" }}
            resizeMode="contain"
            source={require("../assets/images/Vector.png")}
          />

          <Text style={styles.text24}>איזה כיף!</Text>
          <Text style={styles.text3}>
            גרמת לאדם אחד לחייך והעולם מתמלא בשמחה.
          </Text>
          <Text style={styles.text24}>תודה!</Text>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        סיים אירוע
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    position: "absolute",
    width: 343,
    height: 329,
    alignSelf: "center",
    borderRadius: 8,
    backgroundColor: "white",
    padding: 16,
  },
  text1: {
    fontSize: 24,
    lineHeight: 20,
    alignItems: "center",
    textAlign: "center",
    letterspacing: 0.5,
    color: "#000000",
    marginBottom: 30,
  },
  text24: {
    fontSize: 20,
    lineHeight: 20,
    alignItems: "center",
    textAlign: "center",
    letterspacing: 0.5,
    marginBottom: 20,
    marginTop: 20,
    fontWeight: "bold",
  },
  text3: {
    fontSize: 15,
    lineHeight: 20,
    alignItems: "center",
    textAlign: "center",
    letterspacing: 0.5,
  },
});
