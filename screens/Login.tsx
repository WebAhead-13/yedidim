import React from "react";
import { Text, StyleSheet, View, Image, ButtonProps } from "react-native";
import UselessTextInput from "../components/UselessTextInput";
import { TextInput } from "react-native-paper";
import { Button, Alert } from "react-native";
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
const Login = () => {
  // const [setText] = React.useState("");
  const [text, setText] = React.useState("");
  const [number, onChangeNumber] = React.useState(null);
  const onChangeText = (text: string) => setText(text);
  // const [setText] = React.useState(null);
  // const CustomInput = ({ onChangeText, text }: Props) => {
  return (
    <View style={styles.main}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="מספר נייד"
          autoComplete={Number}
          // onChangeText={onChangeNumber}
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
          // onChangeText={(onChangeText) => setText(text)}
          // onChangeText={(text) => setText(number)}
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
        <a href="https://google.com">שכחתי סיסמא</a>
        <Button
          // style={styles.title}
          title="התחברות"
          onPress={() => Alert.alert("!!!1!")}
        />
        {/* <Button mode="contained" onPress={() => console.log("Pressed")}>
        התחברות
      </Button> */}
        <a href="https://google.com"> הרשמה</a> <text>עדיין לא התחברת ?</text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    padding: 20,
    backgroundColor: "white",
    // borderTopEndRadius: "30",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: "auto",
    height: Dimensions.get("window").height * 0.75,
    paddingTop: 50,
    position: "relative",
  },
  main: {
    backgroundColor: "blue",
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
    // position: absolute;
    // left: 18.93%,
    // right: 17.6%,
    // top: 50.4%,
    // bottom: 46.55%,
    // font-family: 'Assistant',
    // font-style: 'normal',
    // font-weight: 700,
    // font-size: 15,
    // line-height: 20,
    // display: flex,
    // align-items: center,
    // text-align: center,
    // text-decoration-line: underline,
    // color: #336CA0,
  },
  title: {
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingRight: 20,
    borderBottom: 0,
  },
});
export default Login;
