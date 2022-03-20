import { Button } from "react-native-paper";
import { View, Text, ColorSchemeName } from "react-native";
import { AuthParamList } from "../types";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

const Stack = createNativeStackNavigator<AuthParamList>();

function AuthStack() {
  const colorScheme = useColorScheme();

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
                navigation.navigate("Verify");
              }}
            >
              Send
            </Button>
          </View>
        )}
      />
      {/* <Stack.Screen
        name="Verify"
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
        component={({ navigation }) => (
          <View>
            <Text>Verify</Text>
            <Button
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              Send
            </Button>
          </View>
        )}
      /> */}
    </Stack.Navigator>
  );
}

export default AuthStack;
