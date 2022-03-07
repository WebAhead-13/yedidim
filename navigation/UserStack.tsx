import BottomTabNavigator from "../components/BottomTabNavigator"
import NotFoundScreen from "../screens/NotFoundScreen"
import ModalScreen from "../screens/ModalScreen"

import { RootStackParamList } from "../types"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import AuthStack from "./AuthStack"

const Stack = createNativeStackNavigator<RootStackParamList>()

function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        component={AuthStack}
        name="Auth"
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default UserStack
