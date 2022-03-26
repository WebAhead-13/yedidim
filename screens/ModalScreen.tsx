import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Dimensions } from "react-native";
import { Text, View } from "../components/Themed";
import { Pressable } from "react-native";
import { Modal } from "react-native-paper";

import MapView from "react-native-maps";

import EventInfo from "../components/EventInfo";
import Contact from "../components/Contact";

import Waze from "../components/Waze";
export default function ModalScreen() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const data = {
    eventType: "פנצ׳ר",
    carType: "סיטוראן ברלינגו",
    isPrivateCar: true,
    address: "דרך כרמל 63",
    city: "ירושלים",
    lat: "",
    lng: "",
    time: "14:54",
    clientName: "עדי אדרי",
    clientPhone: "052-23241232",
  };

  return (
    <View>
      <MapView style={styles.map} />
      <View style={styles.bottom}>
        <EventInfo data={data} />
        <Text style={styles.arrivalTime}> זמן הגעה משוער לאירוע: 35 דק </Text>
        <View style={styles.buttonContainer}>
          <Pressable onPress={toggleModal} style={styles.takeButton}>
            <Text style={styles.takeButtonText}>לקחת את האירוע</Text>
          </Pressable>

          <Pressable style={styles.backButton}>
            <Text style={styles.backButtonText}>חזור</Text>
          </Pressable>
        </View>
      </View>

      <Modal style={styles.activeEventModal} visible={isModalVisible}>
        <Text style={styles.eventDetails}>פרטי פנייה</Text>
        <EventInfo data={data} />
        <Waze />
        <Contact />

        <View style={styles.buttonContainer}>
          <Pressable onPress={toggleModal} style={styles.takeButton}>
            <Text style={styles.takeButtonText}> לסיים אירוע</Text>
          </Pressable>

          <Pressable
            onPress={toggleModal}
            style={[styles.backButton, styles.cancleButton]}
          >
            <Text style={styles.cancleButtonText}>ביטול אירוע</Text>
          </Pressable>
        </View>
        <Text style={styles.bottomText}>התקשרות למוקד</Text>
      </Modal>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 64,
  },
  bottom: {
    width: Dimensions.get("window").width,
    position: "absolute",
    bottom: 0,
    // boxShadow: "0px -2px 5px #ddd",
    paddingTop: 10,
    paddingBottom: 40,
    backgroundColor: "white",
  },
  arrivalTime: {
    color: "rgba(33, 60, 79, 1)",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 19,
    alignSelf: "center",
    marginTop: 15,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 30,
  },
  takeButton: {
    width: "60%",
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    borderRadius: 35,
  },
  takeButtonText: {
    color: "white",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "600",
  },
  backButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(51, 108, 160, 1)",
    width: "20%",
    height: 44,
    borderRadius: 35,
  },
  backButtonText: {
    color: "rgba(51, 108, 160, 1)",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "600",
  },
  activeEventModal: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height * 0.6,
    backgroundColor: "white",
    position: "absolute",
    top: Dimensions.get("window").height * 0.4,
  },
  eventDetails: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 20,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    paddingTop: 20,
    paddingLeft: 20,
  },
  cancleButton: {
    borderColor: "rgba(239, 87, 89, 1)",
  },
  cancleButtonText: {
    color: "rgba(239, 87, 89, 1)",
  },
  bottomText: {
    margin: "auto",
    borderStyle: "solid",
    width: Dimensions.get("window").width,
    textAlign: "center",
    height: 44,
    marginTop: 40,
    color: "rgba(51, 108, 160, 1)",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 20,
  },
});
