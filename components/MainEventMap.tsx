import { StyleSheet, Text, View, Dimensions, Image } from "react-native"
import React from "react"
import MapView from "react-native-maps"
import { Marker, Callout } from "react-native-maps"
import { RootTabScreenProps } from "../types"
import { List } from "react-native-paper"

import * as Location from "expo-location"
import { Item } from "react-native-paper/lib/typescript/components/List/List"

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
    time: `לפני 17 דק'`,
    icon: require("../assets/images/flatTire4.png"),
    mapMarker: require("../assets/images/Frame_24.png"),
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
    time: `לפני 17 דק'`,
    icon: require("../assets/images/flatTire4.png"),
    mapMarker: require("../assets/images/map_icon.png"),
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
    time: `לפני 17 דק'`,

    icon: require("../assets/images/flatTire4.png"),
    mapMarker: require("../assets/images/other_3.png"),
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
    time: `לפני 17 דק'`,

    icon: require("../assets/images/flatTire4.png"),
    mapMarker: require("../assets/images/map_icon.png"),
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
    time: `לפני 17 דק'`,
    icon: require("../assets/images/flatTire4.png"),
    mapMarker: require("../assets/images/Frame_24.png"),
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
    time: `לפני 17 דק'`,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    icon: require("../assets/images/flatTire4.png"),
    mapMarker: require("../assets/images/Frame_24.png"),
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
    time: `לפני 17 דק'`,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    icon: require("../assets/images/flatTire4.png"),
    mapMarker: require("../assets/images/Frame_24.png"),
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
    time: `לפני 17 דק'`,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    icon: require("../assets/images/flatTire4.png"),
    mapMarker: require("../assets/images/Frame_24.png"),
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
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    time: `לפני 17 דק'`,
    icon: require("../assets/images/eventsIcon/flatTire.png"),
    mapMarker: require("../assets/images/Frame_24.png"),
  },
]

export default function MainEventMap() {
  const [location, setLocation] =
    React.useState<Location.LocationObject | null>(null)
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null)

  React.useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied")
        return
      }

      let loc = await Location.getCurrentPositionAsync({})
      setLocation(loc)
    })()
  }, [])

  let text = "Waiting.."
  if (errorMsg) {
    text = errorMsg
  } else if (location) {
    text = JSON.stringify(location)
  }

  if (!location?.coords)
    return (
      <View style={styles.loading}>
        <Text>Loading ...</Text>
      </View>
    )

  const myLocation = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  }

  return (
    <MapView style={styles.map} initialRegion={myLocation}>
      {data.map((x) => {
        return (
          <Marker coordinate={x} key={x.id} image={x.mapMarker}>
            <Callout tooltip={true}>
              <List.Item
                title=""
                titleStyle={styles.removeTitle}
                descriptionNumberOfLines={2}
                descriptionStyle={styles.description}
                description={
                  <View>
                    {/* <Image
                      source={require("../assets/images/eventsIcon/flatTire.png")}
                      style={{
                        width: 30,
                        height: 30,
                      }}
                      resizeMode="contain"
                    /> */}
                    <Text style={styles.title}>{x.eventType}</Text>
                    <Text>
                      {x.isPrivateCar ? `${x.carType} (פרטי)` : x.carType}
                    </Text>
                    <Text> {x.address}</Text>
                  </View>
                }
                left={(props) => (
                  <List.Icon
                    {...props}
                    icon={x.icon}
                    style={styles.icon}
                    color="#336CA0"
                  />
                )}
                right={(_props) => <Text style={styles.right}>{x.time}</Text>}
                style={styles.callout}
              />
            </Callout>
          </Marker>
        )
      })}
      <Marker coordinate={myLocation} pinColor="#48b4e0" />
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
  loading: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  callout: {
    backgroundColor: "white",
    height: 99,
    borderRadius: 12,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  title: {
    color: "black",
    marginHorizontal: 1,
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#336CA0",
    display: "flex",
    flexDirection: "column",
  },
  right: {
    paddingTop: 10,
    paddingRight: 10,
    left: 5,
    color: "#336CA0",
  },
  icon: {
    width: 20,
    color: "blue",
  },
  removeTitle: {
    width: 0,
    height: 0,
  },
})
