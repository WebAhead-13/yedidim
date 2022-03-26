import { LinkingOptions } from "@react-navigation/native"
import * as Linking from "expo-linking"

import { RootStackParamList } from "../types"

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          // ProfileScreen: {
          //   screens: {
          //     ProfileScreen: "ProfileScreen",
          //   },
          // },
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
}

export default linking
