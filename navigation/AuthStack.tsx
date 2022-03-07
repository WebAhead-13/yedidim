import { Button } from "react-native-paper"
import { View, Text } from "react-native"
import { AuthParamList } from "../types"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator<AuthParamList>()

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
      }}
    >
      <Stack.Screen
        name="Login"
        component={({ navigation }) => (
          <View>
            <Text>Login</Text>
            <Button
              onPress={() => {
                navigation.navigate("Verify")
              }}
            >
              Send
            </Button>
          </View>
        )}
      />
      <Stack.Screen
        name="Verify"
        component={({ navigation }) => (
          <View>
            <Text>Verify</Text>
            <Button
              onPress={() => {
                navigation.navigate("Login")
              }}
            >
              Send
            </Button>
          </View>
        )}
      />
    </Stack.Navigator>
  )
}

export default AuthStack
