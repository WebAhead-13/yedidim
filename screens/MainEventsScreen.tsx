import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native"
import { Text, View } from "../components/Themed"
import { RootTabScreenProps } from "../types"
import MainEventList from "../components/MainEventList"
import React from "react"
import MainEventMap from "../components/MainEventMap"
import axios from "axios"

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"MainEventsScreen">) {
  const [isMap, setISMap] = React.useState(false)

  React.useEffect(() => {
    axios
      .get("http://localhost:4000/api/events")
      .then(function (response) {
        console.log(response.data[0])
      })
      .catch(function (err) {
        console.log(err)
      })
  }, [])
  return (
    <SafeAreaView
      style={{ position: "relative", height: Dimensions.get("window").height }}
    >
      {isMap ? <MainEventMap /> : <MainEventList />}
      <TouchableOpacity
        style={styles.mapToggle}
        onPress={() => (isMap ? setISMap(false) : setISMap(true))}
        activeOpacity={1}
      >
        <Image
          source={
            isMap
              ? require("../assets/images/listview.png")
              : require("../assets/images/map.png")
          }
          style={{ width: 35, height: 35, paddingLeft: 20 }}
        />
        <Text style={{ paddingRight: 10, color: "white" }}>
          {isMap ? "תצוגת רשימה" : "תצוגת מפה"}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mapToggle: {
    color: "white",
    zIndex: 10,
    position: "absolute",
    bottom: 140,
    alignSelf: "center",
    borderRadius: 999,
    backgroundColor: "rgba(0, 0, 0, 0.66)",
    paddingHorizontal: 20,
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
  },
})
