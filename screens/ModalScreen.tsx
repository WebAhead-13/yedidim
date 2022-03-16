import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "../components/Themed";
import { Pressable } from "react-native";
import { Modal } from "react-native-paper";

import MapView from "react-native-maps";
import { white } from "react-native-paper/lib/typescript/styles/colors";

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
        <Pressable onPress={toggleModal} style={styles.takeButton}>
          <Text style={styles.takeButtonText}>לקחת את האירוע</Text>
        </Pressable>

        <Pressable style={styles.backButton}>
          <Text style={styles.backButtonText}>חזור</Text>
        </Pressable>
      </View>

      <Modal style={styles.activeEventModal} visible={isModalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.eventDetails}>פרטי פנייה</Text>
          <EventInfo data={data} />
          <Waze />
          <Contact />
          <Pressable
            onPress={toggleModal}
            style={[styles.takeButton, styles.confirmButton]}
          >
            <Text style={styles.takeButtonText}> לסיים אירוע</Text>
          </Pressable>

          <Pressable
            onPress={toggleModal}
            style={[styles.backButton, styles.cancleButton]}
          >
            <Text style={styles.cancleButtonText}>ביטול אירוע</Text>
          </Pressable>
          <Text style={styles.bottomText}>התקשרות למוקד</Text>
        </View>
      </Modal>
      {/* <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ModalScreen.tsx" /> */}

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
    height: 520,
    position: "absolute",
    top: -78,
  },
  bottom: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: 380,
    top: 440,
    paddingTop: 10,
    backgroundColor: "white",
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
    marginTop: 15,

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
    top: 230,

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
  backButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(51, 108, 160, 1)",
    position: "absolute",
    width: 106,
    height: 44,
    right: 16,
    top: 230,
    borderRadius: 35,
  },
  backButtonText: {
    color: "rgba(51, 108, 160, 1)",
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "600",
  },
  activeEventModal: {
    position: "absolute",
    width: Dimensions.get("window").width,
    height: 613,
    top: 130,
    left: 0,
    backgroundColor: "white",
  },

  modalContainer: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: 613,
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
    top: 480,
  },
  confirmButton: {
    top: 480,
  },
  cancleButtonText: {
    color: "rgba(239, 87, 89, 1)",
  },
  bottomText: {
    margin: "auto",
    borderStyle: "solid",
    position: "absolute",
    width: Dimensions.get("window").width,
    textAlign: "center",

    height: 44,
    right: 0,
    top: 545,
    color: "rgba(51, 108, 160, 1)",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 20,
  },
});
