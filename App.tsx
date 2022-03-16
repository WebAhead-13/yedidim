import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { I18nManager } from "react-native";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { useEffect } from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import Colors from "./constants/Colors";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    I18nManager.forceRTL(true);
  }, []);

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      ...Colors.light,
    },
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <Navigation />
          <StatusBar />
        </PaperProvider>
      </SafeAreaProvider>
    );
  }
}
