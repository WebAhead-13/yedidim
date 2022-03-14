import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { List, Button } from "react-native-paper";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function ProfileScreen() {
  const Accordion = [
    { title: "התראות + כתובות", childs: [{ name: "Mario's Batata" }] },
    { title: "מדריך למתנדבים", childs: [{ name: "Mario's kaman Batata" }] },
    { title: "שיתוף אפלקציה", childs: [{ name: "Mario's kaman mara Batata" }] },
    { title: "אודות סטארטאח", childs: [{ name: "Mario's Batata's Batata" }] },
    {
      title: "שיתוף אפליקציה",
      childs: [{ name: "Mario's Batata's Batata's Batata" }],
    },
  ];
  return (
    <View style={styles.container}>
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
            <Text style={styles.title}>שם משתמש</Text>
            <Text style={styles.title}>מספר נייד</Text>
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
                  titleStyle={{
                    fontFamily: "Assistant",
                    fontStyle: "normal",
                    fontWeight: "300",
                    fontSize: 18,
                    lineHeight: 20,
                    color: "#455A64",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "right",
                    letterSpacing: 0.5,
                  }}
                  style={{ backgroundColor: "white" }}
                  title={element.title}
                >
                  {element.childs.map((child) => {
                    return <List.Item title={child.name} />;
                  })}
                </List.Accordion>
              );
            })}
          </List.Section>
        </View>
        <View style={{ width: 90 }}>
          <Button
            labelStyle={styles.button}
            style={{ minWidth: 90, justifyContent: "flex-start" }}
            onPress={() => console.log("Pressed")}
          >
            התנתק
          </Button>
        </View>
        <View>
          <View style={styles.version}>
            <Text style={{ marginRight: 10, marginLeft: 18 }}>
              גרסה 15.0.136
            </Text>
            <Text
              style={{ color: "#336CA0", fontSize: 13 }}
              onPress={() => console.log("Pressed")}
            >
              רשימת עדכונים
            </Text>
          </View>
        </View>
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  settingsContainer: {
    marginTop: 50,
  },
  container: {
    // flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginTop: 30,
    justifyContent: "space-evenly",
  },
  userInfo: {
    display: "flex",
    flexDirection: "row",
    width: 226,
    height: 56,
    alignContent: "center",
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
    fontWeight: "bold",
    position: "relative",
    width: 154,
    height: 14,
    left: 0,
    top: 10,
    fontFamily: "Assistant",
    fontStyle: "normal",
    fontWeights: 600,
    fontSize: 18,
    lineHeight: 19,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    color: "#455A64",
    marginBottom: 10,
  },
  list: {
    backgroundColor: "white",
  },
  settings: {
    width: 154,
    height: 14,
    marginLeft: 18,
    fontFamily: "Assistant",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 19,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
    color: "#455A64",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-start",
    fontFamily: "Assistant",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 18,
    lineHeight: 20,
    color: "#455A64",
    // alignItems: "center",

    letterSpacing: 0.5,
  },
  version: {
    display: "flex",
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "flex-start",
    culumnGap: 0,
    fontFamily: "Assistant",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 13,
    lineHeight: 20,
    alignItems: "flex-start",
    textAlign: "right",
    letterSpacing: 0.1,
    color: "#336CA0",
    marginTop: 50,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
