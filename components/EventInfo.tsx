import * as React from "react";
import { Text, View } from "../components/Themed";
import { Platform, StyleSheet, Dimensions } from "react-native";
import { Modal } from "react-native-paper";

const EventInfo = ({ data }) => {
  return (
    <View style={styles.eventinfo}>
      <View style={styles.first}>
        <Text style={styles.eventType}> {data.eventType}</Text>
        <Text style={styles.time}> {data.time}</Text>
      </View>
      <Text style={styles.carType}> {data.carType}</Text>
      <Text style={styles.location}>
        {data.address}, {data.city}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  eventinfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 16,
    margin: 10,

    width: "95%",
    height: 109,
    shadowColor: "rgba(0, 0, 0, 0.075)",
    shadowOffset: { width: 1, height: 0 },
    shadowOpacity: 8,
    shadowRadius: 3,
    // shadowColor: "0 1 8 rgba(0, 0, 0, 0.075)",
    borderRadius: 12,
  },
  eventType: {
    color: "rgba(33, 60, 79, 1)",
    // fontFamily: "Assistant",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 20,
    /* identical to box height, or 111% */

    textAlign: "right",
    letterSpacing: 0.5,

    /* Inside auto layout */

    // marginLeft: 16,
    // marginRight: 16,
  },

  carType: {
    color: "rgba(33, 60, 79, 1)",
    // fontFamily: "Assistant",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 15,
    lineHeight: 20,
    /* identical to box height, or 133% */

    display: "flex",
    alignItems: "center",
    textAlign: "right",
    letterSpacing: 0.5,
    margin: 0,
  },
  location: {
    color: "rgba(51, 108, 160, 1)",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 20,
    /* identical to box height, or 133% */

    display: "flex",
    alignItems: "center",
    textAlign: "right",
    letterSpacing: 0.1,
    margin: 8,
    marginTop: 5,
  },

  first: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  time: {
    color: "rgba(51, 108, 160, 1)",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  arrivalTime: {
    color: "rgba(33, 60, 79, 1)",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 19,
    letterSpacing: 0.1,
    alignSelf: "flex-end",
    textAlign: "center",

    position: "absolute",
    left: " 0%",
    right: "0%",
    top: "37%",
    // bottom: " 59.47%",
  },
  takeButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // padding: 10px 32px 14px;
    position: "absolute",
    width: 221,
    height: 44,
    left: 10,
    top: 210,

    /* Gradient-8 */
    backgroundColor: "green",
    // background: "linear-gradient(90deg, #3A8844 0%, #75BE75 100%)",
    borderRadius: 35,
  },
  takeButtonText: {
    color: "white",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "600",
  },
});
export default EventInfo;
