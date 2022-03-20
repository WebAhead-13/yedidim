import React from "react";

import { Text, View } from "../components/Themed";

import { StyleSheet, Image } from "react-native";
const Contact = () => {
  return (
    <View style={styles.contact}>
      <View style={styles.container}>
        <Text style={styles.title}> התקשרות למזעיק האירוע</Text>
        <Image
          style={{ marginLeft: 100, marginTop: 5 }}
          source={require("../assets/images/Mask.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    padding: 16,
    margin: 15,
    marginTop: 0,
    width: "92%",
    height: 50,
    backgroundColor: "rgba(245, 248, 255, 1)",
    borderRadius: 12,
  },
  title: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 17,

    textAlign: "right",

    color: "black",
  },

  contact: {
    display: "flex",
    flexDirection: "column",
  },
});
export default Contact;
