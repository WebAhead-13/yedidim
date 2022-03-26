import { StyleSheet, Text, View, FlatList, Image } from "react-native"
import { List } from "react-native-paper"

import React from "react"

const data = [
  {
    id: "0",
    eventType: "פנצ׳ר",
    carType: "סיטוראן ברלינגו",
    isPrivateCar: true,
    address: "  1.5 ק״מ - דרך כרמל 63 ",
    city: "ירושלים",
    latitude: 31.880352,
    longitude: 35.180279,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    time: `לפני 17 דק'`,
    icon: require("../assets/images/eventsIcon/flatTire.png"),
  },
  {
    id: "1",
    eventType: "שמן-מימ-דלק",
    carType: "טויוטה קורולה",
    isPrivateCar: true,
    address: "1.5 ק״מ - שמריה לוין 7",
    city: "ירושלים",
    latitude: 31.852968,
    longitude: 35.212723,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    time: `לפני 17 דק'`,
    icon: require("../assets/images/eventsIcon/oil.png"),
    color: "#C25C9E",
  },
  {
    id: "2",
    eventType: "חילוץ שטח",
    carType: "פורד פוקוס",
    isPrivateCar: false,
    address: "1.7 ק״מ  - 29 חכם שמואל ברוכים",
    city: "ירושלים",
    latitude: 31.85614,
    longitude: 35.180754,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    time: `לפני 17 דק'`,
    icon: require("../assets/images/eventsIcon/rescue.png"),
  },
  {
    id: "3",
    eventType: "הנעה/כבלים",
    carType: "פורד פוקוס",
    isPrivateCar: true,
    address: "2 ק״מ - שמואל הנביא 99 ",
    city: "ירושלים",
    latitude: 31.742023,
    longitude: 35.199879,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    time: `לפני 17 דק'`,
    icon: require("../assets/images/eventsIcon/battery.png"),
    color: "#F9B350",
  },
  {
    id: "4",
    eventType: "פנצ׳ר",
    carType: "סיטוראן ברלינגו",
    isPrivateCar: true,
    address: "1.7 ק״מ -   האמן 3 ",
    city: "ירושלים",
    latitude: 31.784639,
    longitude: 35.261387,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    time: `לפני 17 דק'`,
    icon: require("../assets/images/eventsIcon/flatTire.png"),
  },
  {
    id: "5",
    eventType: "פנצ׳ר",
    carType: "סיטוראן ברלינגו",
    isPrivateCar: true,
    address: "  1.5 ק״מ - דרך כרמל 63 ",
    city: "ירושלים",
    latitude: 31.797762,
    longitude: 35.147651,
    time: `לפני 17 דק'`,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    icon: require("../assets/images/eventsIcon/flatTire.png"),
  },
  {
    id: "6",
    eventType: "פנצ׳ר",
    carType: "סיטוראן ברלינגו",
    isPrivateCar: true,
    address: "  1.5 ק״מ - דרך כרמל 63 ",
    city: "ירושלים",
    latitude: 31.833615,
    longitude: 34.988874,
    time: `לפני 17 דק'`,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    icon: require("../assets/images/eventsIcon/flatTire.png"),
  },
  {
    id: "7",
    eventType: "פנצ׳ר",
    carType: "סיטוראן ברלינגו",
    isPrivateCar: true,
    address: "  1.5 ק״מ - דרך כרמל 63 ",
    city: "ירושלים",
    latitude: 31.910436,
    longitude: 34.738507,
    time: `לפני 17 דק'`,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    icon: require("../assets/images/eventsIcon/flatTire.png"),
  },
  {
    id: "8",
    eventType: "פנצ׳ר",
    carType: "סיטוראן ברלינגו",
    isPrivateCar: true,
    address: "  1.5 ק״מ - דרך כרמל 63 ",
    city: "ירושלים",
    latitude: 31.981165,
    longitude: 34.755984,
    time: `לפני 17 דק'`,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    icon: require("../assets/images/eventsIcon/flatTire.png"),
  },
]

export default function MainEventList() {
  const currentTime = new Date()

  return (
    <FlatList
      nestedScrollEnabled
      style={styles.flatList}
      keyExtractor={(event) => event.id}
      data={data}
      renderItem={({ item }) => {
        return (
          <List.Item
            // onPress={() => console.log(currentTime.getTime() - item.time)}
            title={item.eventType}
            titleStyle={styles.title}
            descriptionNumberOfLines={2}
            descriptionStyle={styles.description}
            description={
              <View>
                <Text>
                  {item.isPrivateCar ? `${item.carType} (פרטי)` : item.carType}
                </Text>
                <Text style={{ color: "#336CA0", marginTop: 10 }}>
                  {item.address}
                </Text>
              </View>
            }
            left={(props) => (
              <List.Icon
                {...props}
                icon={item.icon}
                style={styles.icon}
                color={item.color ? item.color : "#336CA0"}
              />
            )}
            right={(_props) => <Text style={styles.right}>{item.time}</Text>}
            style={styles.item}
          />
        )
      }}
    />
  )
}

const styles = StyleSheet.create({
  flatList: {
    paddingTop: 10,
    backgroundColor: "white",
  },
  item: {
    backgroundColor: "white",
    height: 99,
    borderRadius: 12,
    marginVertical: 5,
    marginHorizontal: 8,
    paddingEnd: 20,
    paddingStart: 10,
    elevation: 2,
    shadowColor: "black",
    shadowRadius: 2,
    shadowOpacity: 0.2,
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
    // alignItems: "flex-start",
  },
  right: {
    paddingTop: 10,
    paddingRight: 10,
    left: 5,
    color: "#336CA0",
  },
  icon: {
    borderRadius: 200,
    elevation: 1,
    backgroundColor: "transparent",
    borderColor: "white",
    borderWidth: 20,
    shadowColor: "black",
    shadowRadius: 2,
    shadowOpacity: 3,
    width: 30,
    height: 30,

    // color: "blue",
  },
})
