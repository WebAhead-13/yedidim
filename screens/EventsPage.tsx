import { StyleSheet, Image } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function EventsPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>שם משתמש</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            backgroundColor: "#2798D5",
            width: 240,
            height: 140,
            borderRadius: 6,
            shadowOffset: { width: 0, height: 1 },
            shadowColor: "rgba(0, 0, 0, 0.075)",
            shadowRadius: 8,
          }}
        >
          <Image
            source={require("../assets/images/myEvents2.svg")}
            style={{
              height: 62,
              width: 48,
              left: 12,
              top: 22,
              backgroundColor: "#2798D5",
            }}
            resizeMode="cover"
          />

          <Text
            style={{
              fontSize: 29,
              lineHeight: 24,
              height: 28,
              width: 70,
              marginLeft: 15,
              marginTop: 25,
              direction: "rtl",
              alignContent: "flex-start",
              color: "white",
            }}
          >
            226
          </Text>

          <Text
            style={{
              fontSize: 22,
              lineHeight: 24,
              height: 28,
              width: 150,
              marginLeft: 15,
              marginTop: 1,
              direction: "rtl",
              color: "white",
            }}
          >
            סה״כ אירועים
          </Text>
        </View>
        <View
          style={{
            borderRadius: 6,
            width: 100,
            height: 140,
            left: 11,
            backgroundColor: "#B9D15F",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/dateRange.svg")}
            style={{
              height: 32,
              width: 32,
              // left: 12,
              top: 22,
              // backgroundColor: "#B9D15F",
              paddingBottom: 20,
            }}
            resizeMode="cover"
          ></Image>
          <Text
            style={{
              direction: "rtl",
              marginTop: 29,
              marginLeft: "inherit",
              // width: 80,
              height: 28,
              fontSize: 36,
              // alignSelf: "center",
              color: "white",
            }}
          >
            38
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontSize: 17,
              direction: "rtl",
              height: 20,
              width: 60,
              textAlign: "center",
              color: "white",
            }}
          >
            אירועים החודש
          </Text>
        </View>
      </View>
      <View>
        <View
          style={{
            height: 140,
            width: 80,
            left: 284,
            top: 345,
            borderRadius: 6,
            shadowOffset: { width: 0, height: 1 },
            shadowColor: "rgba(0, 0, 0, 0.075)",
          }}
        >
          <Image
            source={require("../assets/images/cables7.svg")}
            style={{
              height: 24,
              width: 24,
            }}
            resizeMode="cover"
          ></Image>
        </View>
        <View></View>
        <View></View>
        <View></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 152,
    paddingStart: 10,
  },
  title: {
    height: 19,
    width: 299,
    marginBottom: 19,
    marginRight: 24,
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
