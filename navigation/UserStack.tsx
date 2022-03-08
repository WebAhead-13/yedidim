import BottomTabNavigator from "../components/BottomTabNavigator";
import NotFoundScreen from "../screens/NotFoundScreen";
import ModalScreen from "../screens/ModalScreen";
import { Button } from "react-native-paper";
import Colors from "../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";

import { RootStackParamList } from "../types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import useColorScheme from "../hooks/useColorScheme";

const Stack = createNativeStackNavigator<RootStackParamList>();

function UserStack() {
  const colorScheme = useColorScheme();

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
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={({ navigation, route }) => ({
            headerRight: () => {
              return (
                <Button
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <MaterialIcons
                    name="arrow-back"
                    color={Colors[colorScheme].tint}
                    size={30}
                  />
                </Button>
              );
            },
            headerLeft: null,
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default UserStack;
