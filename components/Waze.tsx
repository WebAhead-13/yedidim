import * as React from "react";
import { Text, View } from "../components/Themed";
import { StyleSheet, Image } from "react-native";
const Waze = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/waze.png")} />
      <View style={styles.left}>
        <Text style={styles.leftTitle}> ניווט לאירוע</Text>
        <Text style={styles.leftSubTitle}>זמן הגעה משוער לאירוע: 35 דק</Text>
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
    marginBottom: 10,
    width: "92%",
    height: 80,
    backgroundColor: "rgba(245, 248, 255, 1)",
    borderRadius: 12,
  },
  left: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 20,
    backgroundColor: "rgba(245, 248, 255, 1)",
  },
  leftTitle: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 19,

    textAlign: "right",

    color: "black",
  },
  leftSubTitle: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 20,

    textAlign: "right",
    color: "black",
    marginLeft: 5,
  },
});
export default Waze;
