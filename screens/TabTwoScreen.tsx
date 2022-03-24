import { LinearGradient } from "expo-linear-gradient";
import { FlatList, StyleSheet, Image } from "react-native";
import { shadow } from "react-native-paper";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

function displayTime() {
  var str = "";

  var date = new Date();

  // str += hours + ":" + minutes;
  const time = "09:30";
  // const date = new Date()
  const hours = time.split(":")[0];
  const minutes = time.split(":")[1];
  date.setMinutes(+minutes);
  date.setHours(+hours);

  return date;
}
function timeDifference(date1: any, date2: any) {
  var difference = date1.getTime() - date2.getTime();

  var minutesDifference = Math.floor(difference / 1000 / 60);
  difference -= minutesDifference * 1000 * 60;

  console.log(" " + minutesDifference + " minute/s ");
  const x = " לפני " + minutesDifference + " דק'  ";
  return x;
}
export default function TabTwoScreen() {
  const events = [
    {
      eventType: "פנצ׳ר",
      carType: "סיטוראן ברלינגו",
      isPrivateCar: true,
      address: "דרך כרמל 63",
      city: "ירושלים",
      lat: "",
      lng: "",
      time: "14:54",
      helper: "ריהאם",
    },
  ];
  return (
    <View style={styles.container}>
      <View>
        <Image
          // style={styles.imageStyle}
          style={{ width: 40, height: 40, marginTop: 7 }}
          source={require("../assets/images/Frame17.png")}
        />
      </View>
      <View>
        <FlatList
          keyExtractor={(event) => event.eventType}
          data={events}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: 7,
                }}
              >
                <Text style={styles.title}>{item.eventType}</Text>
                <Text style={styles.typeStyle}>{item.carType}</Text>
                <Text style={styles.addressStyle}>
                  {item.address}, {item.city}
                </Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={require("../assets/images/success.png")}
                    style={{ width: 18, height: 18 }}
                  />
                  <Text style={styles.helperStyle}>נלקח ע"י {item.helper}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View>
        <Text style={styles.timeStyle}>
          {timeDifference(new Date(), displayTime())}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: 126,
    shadowProp: {
      shadowColor: "#171717",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 12,
    },
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  typeStyle: {
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: 0.5,
    color: "#213C4F",
    marginBottom: 8,
  },

  addressStyle: {
    fontSize: 13,
    // letterSpacing: 0.1,
    color: "#336CA0",
    marginBottom: 6,
  },
  helperStyle: {
    fontSize: 13,
    lineHeight: 20,
    letterSpacing: 0.1,
    color: "#000000",
    marginLeft: 8,
    fontWeight: 400,
  },
  timeStyle: {
    color: "#336CA0",
    fontSize: 13,
    letterSpacing: 0.1,
    marginLeft: 50,
    fontWeight: 400,
  },
});
