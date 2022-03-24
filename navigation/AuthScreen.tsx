import React, { Component } from "react"
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  Image,
  Dimensions,
} from "react-native"
import { Button } from "react-native-paper"
import SMSVerifyCode from "react-native-sms-verifycode"

import { LinearGradient } from "expo-linear-gradient"

const AuthScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#0F425F", "#2798D5"]}
        start={{
          x: 0,
          y: 0,
        }}
        end={{
          x: 1,
          y: 0,
        }}
        style={styles.box}
      >
        <Image
          style={styles.logo}
          source={require("../assets/images/Yedidimlogo.png")}
          resizeMode="contain"
        />
      </LinearGradient>

      <View style={styles.subContainer}>
        <View style={styles.floatingView}>
          <Button style={styles.floating} labelStyle={styles.floatingText}>
            ידידים-כונן
          </Button>
        </View>

        <View />
        <Text style={styles.smsText}>
          שלחנו אליך קוד אימות במסרון (sms) לנייד
        </Text>

        <View style={styles.textInputRow}>
          <SMSVerifyCode
            verifyCodeLength={6}
            containerPaddingVertical={10}
            containerPaddingHorizontal={10}
            codeViewBorderColor="#336CA0"
            codeViewBorderWidth={1}
            autoFocus={true}
            codeFontSize={26}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.themeButtonTitle}>התחברות</Text>
        </TouchableOpacity>
        <Text style={styles.smsText}>
          לא קיבלת את הקוד ? <Text style={styles.underlinedText}>שלחו שוב</Text>
        </Text>
      </View>
    </View>
  )
}
export default AuthScreen

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignSelf: "center",
    width: Dimensions.get("window").width,
  },
  subContainer: {
    backgroundColor: "white",
    height: "70%",
    position: "absolute",
    bottom: 0,
    width: Dimensions.get("window").width,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  floating: {
    textAlign: "center",
    backgroundColor: "#C25C9E",
    color: "#fff",
    paddingHorizontal: 3,
    paddingVertical: 1,
    borderTopEndRadius: 30,
    borderBottomStartRadius: 30,
    overflow: "hidden",
  },
  floatingText: {
    color: "white",
    fontSize: 20,
    fontStyle: "normal",
  },
  floatingView: {
    position: "absolute",
    top: -25,
    right: 0,
    left: 0,
    flex: 1,
    alignItems: "center",
    width: Dimensions.get("window").width,
  },
  textInput: {
    marginTop: 20,
    height: 48,
    borderColor: "#555",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    color: "#fff",
    width: 48,
    fontSize: 11,
    backgroundColor: "white",
  },
  textInputRow: {
    display: "flex",
    width: "100%",
    justifyContent: "space-evenly",
    flexDirection: "row",
    height: 80,
    direction: "ltr",
  },
  themeButton: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3A8844",
    borderColor: "white",
    borderWidth: 0,
    borderRadius: 25,
  },
  themeButtonTitle: {
    fontSize: 18,
    color: "#fff",
  },
  verificationView: {
    width: "100%",
    alignItems: "center",
    marginTop: 50,
    backgroundColor: "lightgrey",
  },
  smsText: {
    position: "relative",
    textAlign: "center",
    fontSize: 15,
    color: "#336CA0",
    marginTop: 25,
  },
  logo: {
    width: 81,
    height: 106,
    marginTop: 40,
    alignSelf: "center",
  },
  box: {
    width: "100%",
    height: "100%",
  },
  underlinedText: {
    // fontWeight: "bold",
    fontStyle: "normal",
  },
})
