import * as WebBrowser from "expo-web-browser";
import React from "react";
import { StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import Colors from "../constants/Colors";
import { MonoText } from "./UselessTextInput";
import { Text, View } from "./Themed";
import { TextInput } from "react-native-paper";
const EditScreenInfo = () => {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        <View
          style={[styles.codeHighlightContainer, styles.homeScreenFilename]}
          darkColor="rgba(255,255,255,0.05)"
          lightColor="rgba(0,0,0,0.05)"
        >
          {/* <MonoText>{path}</MonoText> */}
        </View>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        ></Text>
      </View>

      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            {/* Tap here if your app doesn't automatically update after making changes */}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet"
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "10px 16px 13px",
    // position: 'absolute',
    width: "339",
    height: "47",
    left: "18",
    top: "312",
    background: "rgba(255, 255, 255, 0.5)",
    border: "1px solid #336CA0",
    boxSizing: "borderbox",
    // borderRadius: '49px',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});

// const styles = StyleSheet.create({
//   input: {
//     display: "flex",
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     padding: '10px 16px 13px',
//     position: 'absolute',
//     width: '339px',
//     height: '47px',
//     left: '18px',
//     top: '312px',
//     background: 'rgba(255, 255, 255, 0.5)',
//     border: '1px solid #336CA0',
//     boxSizing: 'borderbox',
//   },
// });
const styles1 = StyleSheet.create({
  input: {
    display: "flex",
    flexdirection: "row",
    justifycontent: "flex-end",
    alignitems: "center",
    padding: "10px 16px 13px",
    position: "absolute",
    width: "339px",
    height: "47px",
    left: "18px",
    top: "383px",
    background: "rgba(255, 255, 255, 0.5)",
    border: "1px solid #336CA0",
    boxsizing: "border-box",
  },
});

// export default UselessTextInput;
export default EditScreenInfo;
