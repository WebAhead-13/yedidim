import * as React from "react"
import { Pressable, Image } from "react-native"
import TakenEvents from "../screens/TakenEvents"
import ProfileScreen from "../screens/ProfileScreen"
import MyEventsScreen from "../screens/MyEventsScreen"
import useColorScheme from "../hooks/useColorScheme"
import MainEventsScreen from "../screens/MainEventsScreen"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { RootTabParamList, RootTabScreenProps } from "../types"
import Colors from "../constants/Colors"
import LinearGradient from "./LinearGradient"

const BottomTab = createBottomTabNavigator<RootTabParamList>()

function TabBarIcon(props: { source: any }) {
  return (
    <Image
      style={{ width: "100%", height: "100%" }}
      resizeMode="contain"
      source={props.source}
    />
  )
}

const commonOptions = {
  headerBackground: () => <LinearGradient color1="#0F425F" color2="#0F93DB" />,
  headerTitleStyle: {
    color: "white",
  },
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
          tabBarIcon: () => (
            <TabBarIcon
              source={require("../assets/images/bottomNav/mainEvents.png")}
            />
          ),
          // headerRight: () => (
          // <Pressable
          //   onPress={() => navigation.navigate("Modal")}
          //   style={({ pressed }) => ({
          //     opacity: pressed ? 0.5 : 1,
          //   })}
          // >
          //   <FontAwesome
          //     name="info-circle"
          //     size={25}
          //     style={{ marginRight: 15 }}
          //   />
          // </Pressable>
          // ),
        })}
      />
      <BottomTab.Screen
        name="TakenEvents"
        component={TakenEvents}
        options={{
          title: "אירועים (נלקחו)",
          ...commonOptions,
          tabBarIcon: () => (
            <TabBarIcon
              source={require("../assets/images/bottomNav/takenEvents.png")}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="MyEventsScreen"
        component={MyEventsScreen}
        options={{
          title: "אירועים שלי",
          ...commonOptions,
          tabBarIcon: () => (
            <TabBarIcon
              source={require("../assets/images/bottomNav/myEvents.png")}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: "פרופיל משתמש",
          ...commonOptions,
          tabBarIcon: () => (
            <TabBarIcon
              source={require("../assets/images/bottomNav/userProfile.png")}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}
export default BottomTabNavigator
