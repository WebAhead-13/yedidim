import * as React from "react"
import { Modal, Portal, Button, Provider } from "react-native-paper"
import { StyleSheet, Image } from "react-native"
import { View, Text } from "./Themed"

export const MyModal = () => {
  const [visible, setVisible] = React.useState(true)

  const showModal = () => setVisible(true)
  const hideModal = () => setVisible(false)

  return (
    <View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.contentContainerStyle}
        >
          <Text style={styles.mainTitle}>סיום אירוע</Text>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require("../assets/images/Vector.png")}
          />

          <Text style={styles.subTitleOne}>איזה כיף!</Text>
          <Text style={styles.subTitleTwo}>
            גרמת לאדם אחד לחייך והעולם מתמלא בשמחה.
          </Text>
          <Text style={styles.subTitleOne}>תודה!</Text>
        </Modal>
      </Portal>
      <Button style={{ marginTop: 30 }} onPress={showModal}>
        סיים אירוע
      </Button>
    </View>
  )
}

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
  mainTitle: {
    fontSize: 24,
    lineHeight: 20,
    alignItems: "center",
    textAlign: "center",
    letterspacing: 0.5,
    color: "#000000",
    marginBottom: 30,
  },
  image: {
    width: "20%",
    height: "20%",
    alignSelf: "center",
  },
  subTitleOne: {
    fontSize: 20,
    lineHeight: 20,
    alignItems: "center",
    textAlign: "center",
    letterspacing: 0.5,
    marginBottom: 20,
    marginTop: 20,
    fontWeight: "bold",
  },
  subTitleTwo: {
    fontSize: 15,
    lineHeight: 20,
    alignItems: "center",
    textAlign: "center",
    letterspacing: 0.5,
  },
})
