import { Text, TextProps } from "./Themed"
import React from "react";
import { StyleSheet, TouchableOpacity, TextInput, SafeAreaView } from 'react-native';
export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
}
const UselessTextInput = (/*props*/ ) => {
  const [text, onChangeText] = React.useState("מספר נייד");
  const [number, onChangeNumber] = React.useState('תעודת זהות');
    return (
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="תעודת זהות"
          keyboardType="numeric"
        />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    input: {
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '10px 16px 13px',
      position: 'absolute',
      width: '339px',
      height: '47px',
      left: '18px',
      top: '312px',
      background: 'rgba(255, 255, 255, 0.5)',
      border: '1px solid #336CA0',
      boxSizing: 'borderbox',
    },
  });
  const styles1 = StyleSheet.create({
    input: {
      display: 'flex',
      flexdirection: 'row',
      justifycontent: 'flex-end',
      alignitems: 'center',
      padding: '10px 16px 13px',
      position: 'absolute',
      width: '339px',
      height: '47px',
      left: '18px',  
      top: '383px',
      background: 'rgba(255, 255, 255, 0.5)',
      border: '1px solid #336CA0',
      boxsizing: 'border-box',
      BorderRadius: '49px',
    },
  });
  export default UselessTextInput