import { StyleSheet, Text, View, FlatList } from "react-native";
import { List } from "react-native-paper";
import { RootTabScreenProps } from "../types";

import React from "react";

const data = [
  {
    id: "0",
    eventType: "פנצ׳ר",
    carType: "סיטוראן ברלינגו",
    isPrivateCar: true,
    address: "דרך כרמל 63",
    city: "ירושלים",
    latitude: 31.880352,
    longitude: 35.180279,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    time: 1647550551,
    icon: require("../assets/images/flat tire4flateTire.svg"),
  },
  {
    id: "1",
    eventType: "שמן-מימ-דלק",
    carType: "טויוטה קורולה",
    isPrivateCar: true,
    address: "םילשורי ,7 ןיול והירמש - מ״ק 1.5",
    city: "ירושלים",
    latitude: 31.852968,
    longitude: 35.212723,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    time: 1647550551,
    icon: require("../assets/images/flat tire4flateTire.svg"),
  },
  {
    id: "2",
    eventType: "חילוץ שטח",
    carType: "פורד פוקוס",
    isPrivateCar: false,
    address: "29 םיכורב לאומש םכח - מ״ק 1.7",
    city: "ירושלים",
    latitude: 31.85614,
    longitude: 35.180754,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    time: 1647550551,

    icon: require("../assets/images/flat tire4flateTire.svg"),
  },
  {
    id: "3",
    eventType: "הנעה/כבלים",
    carType: "פורד פוקוס",
    isPrivateCar: true,
    address: "1 הדוהי יבצ ברה - מ״ק 1.9",
    city: "ירושלים",
    latitude: 31.742023,
    longitude: 35.199879,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    time: 1647550551,

    icon: require("../assets/images/flat tire4flateTire.svg"),
  },
  {
    id: "4",
    eventType: "פנצ׳ר",
    carType: "סיטוראן ברלינגו",
    isPrivateCar: true,
    address: "דרך כרמל 63",
    city: "ירושלים",
    latitude: 31.784639,
    longitude: 35.261387,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    time: 1647550551,
    icon: require("../assets/images/flat tire4flateTire.svg"),
  },
  {
    id: "5",
    eventType: "פנצ׳ר",
    carType: "סיטוראן ברלינגו",
    isPrivateCar: true,
    address: "דרך כרמל 63",
    city: "ירושלים",
    latitude: 31.797762,
    longitude: 35.147651,
    time: 1647550551,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    icon: require("../assets/images/flat tire4flateTire.svg"),
  },
  {
    id: "6",
    eventType: "פנצ׳ר",
    carType: "סיטוראן ברלינגו",
    isPrivateCar: true,
    address: "דרך כרמל 63",
    city: "ירושלים",
    latitude: 31.833615,
    longitude: 34.988874,
    time: 1647550551,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    icon: require("../assets/images/flat tire4flateTire.svg"),
  },
  {
    id: "7",
    eventType: "פנצ׳ר",
    carType: "סיטוראן ברלינגו",
    isPrivateCar: true,
    address: "דרך כרמל 63",
    city: "ירושלים",
    latitude: 31.910436,
    longitude: 34.738507,
    time: 1647550551,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    icon: require("../assets/images/flat tire4flateTire.svg"),
  },
  {
    id: "8",
    eventType: "פנצ׳ר",
    carType: "סיטוראן ברלינגו",
    isPrivateCar: true,
    address: "דרך כרמל 63",
    city: "ירושלים",
    latitude: 31.981165,
    longitude: 34.755984,
    time: 1647550551,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    icon: require("../assets/images/flat tire4flateTire.svg"),
  },
];

export default function MainEventList() {
  const currentTime = new Date();

  return (
    <FlatList
      nestedScrollEnabled
      style={styles.flatList}
      keyExtractor={(event) => event.id}
      data={data}
      renderItem={({ item }) => {
        return (
          <List.Item
            onPress={() => console.log(currentTime.getTime() - item.time)}
            title={item.eventType}
            titleStyle={styles.title}
            descriptionNumberOfLines={2}
            descriptionStyle={styles.description}
            // onFocus=
            description={
              <View>
                <Text>
                  {item.isPrivateCar ? `${item.carType} (פרטי)` : item.carType}
                </Text>
                <Text> {item.address}</Text>
              </View>
            }
            left={(props) => (
              <List.Icon {...props} icon={item.icon} style={styles.icon} />
            )}
            right={(_props) => <Text style={styles.right}>{item.time}</Text>}
            style={styles.item}
          />
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    marginTop: 10,
  },
  item: {
    backgroundColor: "white",
    height: 99,
    borderRadius: 12,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  title: {
    marginHorizontal: 1,
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    display: "flex",
    flexDirection: "column",
    color: "#336CA0",
  },
  right: {
    paddingTop: 10,
    paddingRight: 10,
    left: 5,
    color: "#336CA0",
  },
  icon: {
    width: 20,
  },
});
