import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { List, Button } from "react-native-paper";

// import EditScreenInfo from "../components/EditScreenInfo";
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
            style={styles.buttonStyle}
            onPress={() => console.log("Pressed")}
          >
            התנתק
          </Button>
        </View>
        <View>
          <View style={styles.version}>
            <Text style={styles.version1}>גרסה 15.0.136</Text>
            <Text
              style={styles.version2}
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
  titleStyle: {
    fontFamily: "Assistant",
    fontSize: 18,
    color: "#455A64",
    display: "flex",
    letterSpacing: 0.5,
  },
  listAccordion: {
    backgroundColor: "white",
  },
  container: {
    // flex: 1,
  },
  header: {
    flexDirection: "row",
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
    fontSize: 18,
  },
  list: {
    backgroundColor: "white",
  },
  settings: {
    marginLeft: 18,
    fontFamily: "Assistant",
    fontWeight: "600",
    fontSize: 18,
    display: "flex",
    color: "#455A64",
  },
  button: {
    fontFamily: "Assistant",
    fontSize: 18,
    color: "#455A64",
  },
  buttonStyle: {
    minWidth: 100,
  },
  version: {
    display: "flex",
    flexDirection: "row",
    fontWeight: "600",
    fontSize: 13,
    marginTop: 50,
  },
  version1: {
    marginRight: 10,
    marginLeft: 18,
  },
  version2: {
    color: "#336CA0",
    fontSize: 13,
  },

  separator: {
    marginVertical: 30,
    height: 1,
  },
});
