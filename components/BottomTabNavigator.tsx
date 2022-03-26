import * as React from "react"
import { Pressable } from "react-native"
import TakenEvents from "../screens/TakenEvents"
import ProfileScreen from "../screens/ProfileScreen"
import MyEventsScreen from "../screens/MyEventsScreen"
import useColorScheme from "../hooks/useColorScheme"
import MainEventsScreen from "../screens/MainEventsScreen"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { RootTabParamList, RootTabScreenProps } from "../types"
import { FontAwesome } from "@expo/vector-icons"
import Colors from "../constants/Colors"
import LinearGradient from "./LinearGradient"

const BottomTab = createBottomTabNavigator<RootTabParamList>()

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"]
  color: string
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
}

const commonOptions = {
  headerBackground: () => <LinearGradient color1="#0F425F" color2="#0F93DB" />,
}

function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="MainEventsScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        headerTitleStyle: {
          color: "white",
        },
      }}
    >
      <BottomTab.Screen
        name="MainEventsScreen"
        component={MainEventsScreen}
        options={({ navigation }: RootTabScreenProps<"MainEventsScreen">) => ({
          title: "אירועים",
          ...commonOptions,
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
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TakenEvents"
        component={TakenEvents}
        options={{
          title: "אירועים (נלקחו)",
          headerTitleStyle: {
            color: "white",
          },
          ...commonOptions,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="MyEventsScreen"
        component={MyEventsScreen}
        options={{
          title: "אירועים שלי",
          ...commonOptions,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
      <BottomTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "פרופיל משתמש",
          ...commonOptions,
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
    </BottomTab.Navigator>
  )
}
export default BottomTabNavigator
