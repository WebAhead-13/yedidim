import React from "react";
import { Text, StyleSheet, View, Image, ButtonProps } from "react-native";
import UselessTextInput from "../components/UselessTextInput";
import { TextInput, Button } from "react-native-paper";
import {
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Picker,
  Animated,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { SendIntentExtras } from "expo-linking";
type Props = {
  onChangeText: (val: string) => void;
  text?: string;
};
import { LinearGradient } from "expo-linear-gradient";

const Login = () => {
  const [text, setText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const onChangeText = (text: string) => setText(text);
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
          resizeMode="contain"
          source={require("../assets/images/Yedidimlogo.png")}
        />
      </LinearGradient>
      <View style={styles.subContainer}>
        <View style={styles.floatingView}>
          <Button style={styles.floating} labelStyle={styles.floatingText}>
            ידידים-כונן
          </Button>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="מספר נייד"
            autoComplete={Number}
            keyboardType="numeric"
            style={styles.eamil}
            left={
              <TextInput.Icon
                name={() => (
                  <Image
                    source={require("../assets/images/phone_iphone.svg")}
                    resizeMode="cover"
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                )}
              />
            }
            mode="outlined"
          />
          <TextInput
            placeholder="תעודת זהות"
            autoComplete={null}
            value={text}
            style={styles.title}
            left={
              <TextInput.Icon
                name={() => (
                  <Image
                    source={require("../assets/images/Vector.svg")}
                    resizeMode="cover"
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                )}
              />
            }
            onChangeText={(text) => setText(text)}
            mode="outlined"
          />
          <Text style={styles.smsText}>
            <Text style={styles.underlinedText}>שכחתי סיסמא</Text>
          </Text>
          <LinearGradient
            colors={["#3A8844", "#75BE75"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
            style={styles.themeButton}
          >
            <TouchableOpacity>
              <Text style={styles.themeButtonTitle}>התחברות</Text>
            </TouchableOpacity>
          </LinearGradient>
          <Text style={styles.smsText}>
            עדיין לא התחברת ?<Text style={styles.underlinedText}>הרשמה</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    padding: 20,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: "auto",
    height: Dimensions.get("window").height * 0.75,
    paddingTop: 50,
    position: "relative",
  },
  main: {
    height: Dimensions.get("window").height,
  },
  eamil: {
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingRight: 20,
    borderBottom: 0,
  },
  a: {
    left: "18.93%",
    right: "17.6%",
    top: "50.4%",
    bottom: "46.55%",
    fontFamily: "Assistant",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 15,
    lineHeight: 20,
    tintColor: "#336CA0",
    display: "flex",
    alignItems: "center",
    textDecorationLine: "underline",
    color: "#336CA0",
  },
  title: {
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingRight: 20,
    borderBottom: 0,
    borderRadius: 20,
  },
  themeButtonTitle: {
    fontSize: 18,
    color: "#fff",
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
  underlinedText: {
    fontWeight: "bold",
    fontStyle: "normal",
    textDecorationLine: "underline",
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
  box: {
    width: "100%",
    height: "100%",
  },
});
export default Login;
