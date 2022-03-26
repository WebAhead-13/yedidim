import { StyleSheet, Image } from "react-native"
import { Dimensions } from "react-native"
import { Text, View } from "../components/Themed"

export default function EventsPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>שם משתמש</Text>
      <View style={styles.events}>
        <View style={styles.allevents}>
          <Image
            source={require("../assets/images/myEvents2.svg")}
            style={styles.alleventsimage}
            resizeMode="cover"
          />
          <Text style={styles.alleventsnum}>226</Text>
          <Text style={styles.alleventstext}>סה״כ אירועים</Text>
        </View>
        <View style={styles.monthlyevents}>
          <Image
            source={require("../assets/images/dateRange.svg")}
            style={styles.monthlyeventsimage}
            resizeMode="cover"
          ></Image>
          <Text style={styles.monthlyeventsnum}>38</Text>
          <Text style={styles.monthlyeventstext}>אירועים החודש</Text>
        </View>
      </View>
      <View style={styles.events2}>
        <View style={styles.event}>
          <Image
            source={require("../assets/images/cables7.svg")}
            style={styles.eventimage}
          ></Image>
          <Text style={styles.eventnum}>33</Text>
          <Text style={styles.eventtext}>הנעה</Text>
        </View>
        <View style={styles.event}>
          <Image
            source={require("../assets/images/flatTire4.svg")}
            style={styles.eventimage}
          ></Image>
          <Text style={styles.eventnum}>4</Text>
          <Text style={styles.eventtext}>פנצ׳ר</Text>
        </View>
        <View style={styles.event}>
          <Image
            source={require("../assets/images/oil.svg")}
            style={styles.eventimage}
          ></Image>
          <Text style={styles.eventnum}>2</Text>
          <Text style={styles.eventtext}>שמן-דלק מים</Text>
        </View>
        <View style={styles.event}>
          <Image
            source={require("../assets/images/other.svg")}
            style={styles.eventimage}
          ></Image>
          <Text style={styles.eventnum}>1</Text>
          <Text style={styles.eventtext}>אחר</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>שיתוף באמצעות</Text>
        <View style={styles.socialContainer}>
          <View style={styles.socialMedia}>
            <Image
              source={require("../assets/images/whatsapp.svg")}
              style={styles.socialIcon}
              resizeMode="contain"
            />
            <Text style={styles.socialMediaName}>Whatsapp</Text>
          </View>
          <View style={styles.socialMedia}>
            <Image
              source={require("../assets/images/facebook.svg")}
              style={styles.socialIcon}
              resizeMode="contain"
            />
            <Text style={styles.socialMediaName}>Facebook</Text>
          </View>
          <View style={styles.socialMedia}>
            <Image
              source={require("../assets/images/telegram.svg")}
              style={styles.socialIcon}
              resizeMode="contain"
            />
            <Text style={styles.socialMediaName}>Telegram</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "10%",
    paddingStart: "1%",
    paddingEnd: "1%",
    position: "relative",
  },
  title: {
    height: 19,
    width: 299,
    marginBottom: 19,
    marginRight: 24,
    fontSize: 20,
    fontWeight: "bold",
  },
  events: {
    // flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    height: Dimensions.get("screen").height * 0.23,
    width: Dimensions.get("screen").width * 0.95,
    justifyContent: "space-around",
  },
  allevents: {
    backgroundColor: "#2798D5",
    width: Dimensions.get("screen").width * 0.65,
    height: Dimensions.get("screen").height * 0.2,
    borderRadius: 6,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: "rgba(0, 0, 0, 0.075)",
    shadowRadius: 8,
    paddingLeft: "5%",
  },
  alleventsimage: {
    height: "30%",
    width: "15%",
    marginTop: "5%",
  },
  alleventsnum: {
    fontSize: 29,
    height: "20%",
    marginTop: "4%",
    textAlign: "left",
    color: "white",
  },
  alleventstext: {
    fontSize: 18,
    height: "20%",
    color: "white",
  },

  monthlyevents: {
    alignContent: "space-between",
    borderRadius: 6,
    width: Dimensions.get("screen").width * 0.25,
    height: Dimensions.get("screen").height * 0.2,
    backgroundColor: "#B9D15F",
    alignItems: "center",
  },
  monthlyeventsimage: {
    marginTop: "20%",
    height: "18%",
    width: "35%",
  },
  monthlyeventsnum: {
    marginTop: "10%",
    height: "25%",
    fontSize: 36,
    color: "white",
  },
  monthlyeventstext: {
    fontSize: 18,
    height: "28%",
    textAlign: "center",
    color: "white",
  },
  event: {
    width: Dimensions.get("screen").width * 0.22,
    height: Dimensions.get("screen").height * 0.2,
    borderRadius: 6,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: "rgba(0, 0, 0, 0.075)",
    shadowRadius: 8,
  },
  eventimage: {
    height: "25%",
    width: "45%",
    alignSelf: "center",
    marginTop: "10%",
  },
  eventnum: {
    marginLeft: "inherit",
    height: "20%",
    fontSize: 30,
    textAlign: "center",
    marginTop: "10%",
  },
  eventtext: {
    marginLeft: "inherit",
    height: "28%",
    fontSize: 18,
    textAlign: "center",
    marginTop: "10%",
    color: "rgba(0, 0, 0, 0.54)",
  },
  events2: {
    display: "flex",
    flexDirection: "row",
    marginTop: "2%",
    height: Dimensions.get("screen").height * 0.23,
    justifyContent: "space-between",
  },
  footer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2%",
    padding: "2%",
    shadowOffset: { width: 0, height: 1 },
    shadowColor: "rgba(0, 0, 0, 0.075)",
    shadowRadius: 8,
    height: Dimensions.get("screen").height * 0.15,
    width: Dimensions.get("screen").width * 0.95,
    position: "absolute",
    bottom: 0,
  },
  footerTitle: {
    fontSize: 18,
  },
  socialContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "60%",
    height: "90%",
  },
  socialMedia: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "70%",
    height: "70%",
  },
  socialIcon: {
    height: "60%",
    width: "60%",
  },
  socialMediaName: {
    fontSize: 10,
    color: "rgba(0, 0, 0, 0.54)",
  },
})
