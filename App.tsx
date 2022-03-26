import { StatusBar } from "expo-status-bar"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { I18nManager } from "react-native"

import useCachedResources from "./hooks/useCachedResources"
import Navigation from "./navigation"
import { useEffect } from "react"
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper"
import {
  useFonts,
  Assistant_400Regular,
  Assistant_700Bold,
  Assistant_300Light,
  Assistant_500Medium,
  Assistant_200ExtraLight,
} from "@expo-google-fonts/assistant"
import Colors from "./constants/Colors"
import AppLoading from "expo-app-loading"

export default function App() {
  const isLoadingComplete = useCachedResources()
  let [fontsLoaded] = useFonts({
    Assistant_400Regular,
    Assistant_700Bold,
    Assistant_300Light,
    Assistant_500Medium,
    Assistant_200ExtraLight,
  })

  useEffect(() => {
    I18nManager.forceRTL(true)
  }, [])

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      ...Colors.light,
    },
    fonts: {
      regular: {
        fontFamily: "Assistant_400Regular",
      },
      medium: {
        fontFamily: "Assistant_500Medium",
      },
      light: {
        fontFamily: "Assistant_300Light",
      },
      thin: {
        fontFamily: "Assistant_200ExtraLight",
      },
    },
  }

  if (!fontsLoaded || !isLoadingComplete) {
    return <AppLoading />
  }

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <Navigation />
        <StatusBar />
      </PaperProvider>
    </SafeAreaProvider>
  )
}
