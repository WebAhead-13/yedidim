import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import * as React from "react";
import { ColorSchemeName } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthStack from "./AuthStack";
import LinkingConfiguration from "./LinkingConfiguration";
import UserStack from "./UserStack";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

function RootNavigator() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  // test if user is logged in, in the AsyncStorage
  React.useEffect(() => {
    async function loadUser() {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        console.log({ user });
        setIsLoggedIn(true);
      }
    }
    loadUser();
  }, []);

  if (!isLoggedIn) {
    return <AuthStack />;
  }

  return <UserStack />;
}
