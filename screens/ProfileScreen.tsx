import * as React from "react";
import { StyleSheet, Image, ScrollView } from "react-native";
import { List, Button } from "react-native-paper";
import Fonts from "../constants/Fonts";
import { Text, View } from "../components/Themed";

export default function ProfileScreen() {
  const Accordion = [
    { title: "התראות + כתובות", childs: [{ name: "child1" }] },
    { title: "מדריך למתנדבים", childs: [{ name: "child1" }] },
    { title: "שיתוף אפלקציה", childs: [{ name: "child1" }] },
    { title: "אודות סטארטאח", childs: [{ name: "child1" }] },
    {
      title: "שיתוף אפליקציה",
      childs: [{ name: "child1" }],
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <View style={styles.userPhoto}>
              <Image
                style={{ width: "100%", height: "100%" }}
                resizeMode="contain"
                source={require("../assets/images/userPhoto.svg")}
              />
            </View>
            <View>
              <Text style={styles.title}>ישראל הררי</Text>
              <Text style={styles.title}>050-80472847</Text>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={{ width: "100%", height: "100%" }}
              resizeMode="contain"
              source={require("../assets/images/YedidimLogo.jpg")}
            />
          </View>
        </View>
        <View style={styles.settingsContainer}>
          <View>
            <Text style={styles.settings}>הגדרות חשבון</Text>
          </View>
          <View>
            <List.Section>
              {Accordion.map((element) => {
                return (
                  <List.Accordion
                    titleStyle={styles.titleStyle}
                    style={styles.listAccordion}
                    title={element.title}
                  >
                    {element.childs.map((child) => {
                      return <List.Item key={child.name} title={child.name} />;
                    })}
                  </List.Accordion>
                );
              })}
            </List.Section>
          </View>
          <View style={{ width: 90 }}>
            <Button
              labelStyle={styles.button}
              onPress={() => console.log("Pressed")}
            >
              התנתק
            </Button>
          </View>
          <View>
            <View style={styles.versionContainer}>
              <Text style={styles.versionNumber}>גרסה 15.0.136</Text>
              <Text
                style={styles.versionListButton}
                onPress={() => console.log("Pressed")}
              >
                רשימת עדכונים
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  settingsContainer: {
    paddingTop: 50,
  },
  titleStyle: {
    fontSize: 18,
    color: "#455A64",
    letterSpacing: 0.5,
  },
  listAccordion: {
    backgroundColor: "white",
  },
  container: {
    height: "100%",
  },
  header: {
    flexDirection: "row",
    paddingTop: 30,
    justifyContent: "space-evenly",
  },
  userInfo: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    width: 226,
    height: 56,
  },
  userPhoto: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  imageContainer: {
    width: 70,
    height: 70,
  },
  title: {
    fontFamily: Fonts.medium,
    fontSize: 18,
    textAlign: "left",
  },
  settings: {
    marginLeft: 18,
    fontWeight: "600",
    fontSize: 18,
    display: "flex",
    color: "#455A64",
  },
  button: {
    fontSize: 18,
    color: "#455A64",
    fontFamily: Fonts.regular,
  },
  versionContainer: {
    display: "flex",
    flexDirection: "row",
    fontWeight: "600",
    fontSize: 13,
    marginTop: 50,
  },
  versionNumber: {
    marginRight: 10,
    marginLeft: 18,
  },
  versionListButton: {
    color: "#336CA0",
    fontSize: 13,
  },
});
