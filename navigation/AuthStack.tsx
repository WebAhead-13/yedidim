import { Button } from "react-native-paper"
import { View, Text, ColorSchemeName } from "react-native"
import { AuthParamList } from "../types"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../screens/Login"
import VerifyPhone from "../screens/VerifyPhone"
const Stack = createNativeStackNavigator<AuthParamList>()

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="Login" component={({ navigation }) => <Login />} />
      <Stack.Screen
        name="Verify"
        component={({ navigation }) => <VerifyPhone />}
      />
    </Stack.Navigator>
  )
}

export default AuthStack
