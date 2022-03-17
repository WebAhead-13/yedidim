import { FlatList, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { List } from "react-native-paper";

const data = [
  {
    eventType: "פנצ׳ר",
    carType: "סיטוראן ברלינגו",
    isPrivateCar: true,
    address: "דרך כרמל 63",
    city: "ירושלים",
    lat: "",
    lng: "",
    time: "14:54",
  },
  {
    eventType: "שמן-מימ-דלק",
    carType: "טויוטה קורולה",
    isPrivateCar: true,
    address: "םילשורי ,7 ןיול והירמש - מ״ק 1.5",
    city: "ירושלים",
    lat: "",
    lng: "",
    time: "14:00",
  },
  {
    eventType: "חטש ץוליח",
    carType: "סוקופ דרופ",
    isPrivateCar: true,
    address: "םילשורי ,29 םיכורב לאומש םכח - מ״ק 1.7",
    city: "ירושלים",
    lat: "",
    lng: "",
    time: "14:50",
  },
  {
    eventType: "םילבכ/הענה",
    carType: "סוקופ דרופ",
    isPrivateCar: true,
    address: "םילשורי ,1 הדוהי יבצ ברה - מ״ק 1.9",
    city: "ירושלים",
    lat: "",
    lng: "",
    time: "14:04",
  },
];

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    // <FlatList
    //   keyExtractor={(event) => event.time}
    //   data={data}
    //   renderItem={({ item }) => {
    //     return (
    //       <List.Item
    //         title={item.eventType}
    //         titleStyle={styles.title}
    //         description={item.carType}
    //         // style={styles.item}
    //       />
    //     );
    //   }}
    // />
    <View>
      <Text style={styles.title}>Tab One</Text>
      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    height: 99,
    width: 358,
    left: 8,
    top: 153,
    borderRadius: 12,
    padding: "16px, 0px, 16px, 0px",
  },
  title: {
    backgroundColor: "#213C4F",
    fontSize: 18,
    fontWeight: "bold",
  },
});
