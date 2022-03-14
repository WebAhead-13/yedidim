import { BottomNavigation, Button } from "react-native-paper";

import { Text, Pressable } from "react-native";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import EventsPageScreen from "../screens/EventsPage";
import TabFourScreen from "../screens/TabFourScreen";
import useColorScheme from "../hooks/useColorScheme";

import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList, RootTabScreenProps } from "../types";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const RecentsRoute = ({ navigation }: any) => (
  <Button onPress={() => navigation.navigate("TabOneScreen")}>Recents</Button>
);

const TestRoute = () => <Text>TestRoute</Text>;
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Tab One",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={EventsPageScreen}
        options={{
          title: "אירועים שלי",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={TabFourScreen}
        options={{
          title: "Tab Four",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}
export default BottomTabNavigator;
