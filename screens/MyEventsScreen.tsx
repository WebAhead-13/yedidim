import { StyleSheet, Image, Text } from "react-native"
import { Dimensions } from "react-native"
import { View } from "../components/Themed"

export default function EventsPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>שם משתמש</Text>
      <View style={styles.totalStats}>
        <View style={styles.totalEvents}>
          <Image
            source={require("../assets/images/profileScreen/star.png")}
            style={styles.totalEventsIcon}
            resizeMode="cover"
          />
          <Text style={styles.totalEventsStat}>226</Text>
          <Text style={styles.totalEventsText}>סה״כ אירועים</Text>
        </View>
        <View style={styles.monthlyEvents}>
          <Image
            source={require("../assets/images/profileScreen/calendar.png")}
            style={styles.monthlyEventsIcon}
            resizeMode="cover"
          />
          <Text style={styles.monthlyEventsStat}>38</Text>
          <Text style={styles.monthlyEventsText}>אירועים החודש</Text>
        </View>
      </View>
      <View style={styles.eventTypesStats}>
        <View style={styles.event}>
          <Image
            source={require("../assets/images/profileScreen/battery.png")}
            style={styles.eventIcon}
          />
          <Text style={styles.eventStat}>33</Text>
          <Text style={styles.eventName}>הנעה</Text>
        </View>
        <View style={styles.event}>
          <Image
            source={require("../assets/images/profileScreen/tire.png")}
            style={styles.eventIcon}
          />
          <Text style={styles.eventStat}>4</Text>
          <Text style={styles.eventName}>פנצ׳ר</Text>
        </View>
        <View style={styles.event}>
          <Image
            source={require("../assets/images/profileScreen/oil.png")}
            style={styles.eventIcon}
          />
          <Text style={styles.eventStat}>2</Text>
          <Text style={styles.eventName}>שמן-דלק מים</Text>
        </View>
        <View style={styles.event}>
          <Image
            source={require("../assets/images/profileScreen/mini-logo.png")}
            style={styles.eventIcon}
          />
          <Text style={styles.eventStat}>1</Text>
          <Text style={styles.eventName}>אחר</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerTitle}>שיתוף באמצעות</Text>
        <View style={styles.socialContainer}>
          <View style={styles.socialMedia}>
            <Image
              source={require("../assets/images/profileScreen/whatsapp.png")}
              style={styles.socialIcon}
              resizeMode="contain"
            />
            <Text style={styles.socialMediaName}>Whatsapp</Text>
          </View>
          <View style={styles.socialMedia}>
            <Image
              source={require("../assets/images/profileScreen/facebook.png")}
              style={styles.socialIcon}
              resizeMode="contain"
            />
            <Text style={styles.socialMediaName}>Facebook</Text>
          </View>
          <View style={styles.socialMedia}>
            <Image
              source={require("../assets/images/profileScreen/telegram.png")}
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
    paddingStart: "2%",
    paddingEnd: "2%",
    position: "relative",
  },
  title: {
    width: 299,
    marginBottom: 25,
    marginLeft: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  totalStats: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: Dimensions.get("screen").height * 0.23,
    width: Dimensions.get("screen").width * 0.95,
    justifyContent: "space-around",
  },
  totalEvents: {
    backgroundColor: "#2798D5",
    width: Dimensions.get("screen").width * 0.65,
    height: Dimensions.get("screen").height * 0.2,
    borderRadius: 6,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: "rgba(0, 0, 0, 0.075)",
    shadowRadius: 8,
    paddingLeft: "5%",
  },
  totalEventsIcon: {
    height: "32%",
    width: "20%",
    marginTop: "8%",
  },
  totalEventsStat: {
    fontSize: 29,
    height: "20%",
    marginTop: "4%",
    textAlign: "left",
    color: "white",
  },
  totalEventsText: {
    fontSize: 18,
    height: "20%",
    color: "white",
  },
  monthlyEvents: {
    alignContent: "space-between",
    borderRadius: 6,
    width: Dimensions.get("screen").width * 0.25,
    height: Dimensions.get("screen").height * 0.2,
    backgroundColor: "#B9D15F",
    alignItems: "center",
  },
  monthlyEventsIcon: {
    marginTop: "20%",
    height: "22%",
    width: "35%",
  },
  monthlyEventsStat: {
    marginTop: "8%",
    height: "25%",
    fontSize: 36,
    color: "white",
  },
  monthlyEventsText: {
    fontSize: 18,
    height: "28%",
    textAlign: "center",
    color: "white",
  },
  eventTypesStats: {
    display: "flex",
    flexDirection: "row",
    marginTop: "2%",
    height: Dimensions.get("screen").height * 0.23,
    justifyContent: "space-between",
  },
  event: {
    width: Dimensions.get("screen").width * 0.23,
    height: Dimensions.get("screen").height * 0.2,
    borderRadius: 6,
    shadowOffset: { width: 0, height: 1 },
    shadowColor: "black",
    shadowRadius: 8,
    elevation: 2,
  },
  eventIcon: {
    height: "25%",
    width: "45%",
    alignSelf: "center",
    marginTop: "10%",
  },
  eventStat: {
    height: "20%",
    fontSize: 30,
    textAlign: "center",
    marginTop: "10%",
  },
  eventName: {
    height: "28%",
    fontSize: 18,
    textAlign: "center",
    marginTop: "10%",
    color: "rgba(0, 0, 0, 0.54)",
  },
  footer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "2%",
    paddingTop: "2%",
    shadowOffset: { width: 0, height: 1 },
    shadowColor: "black",
    shadowRadius: 12,
    borderRadius: 6,
    height: Dimensions.get("screen").height * 0.15,
    width: "95%",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    elevation: 2,
  },
  footerTitle: {
    fontSize: 18,
  },
  socialContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "60%",
  },
  socialMedia: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "70%",
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
