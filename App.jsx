import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/AppRoutes";
import { ThemeProvider } from "styled-components";
import { Theme } from "./src/theme/theme";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_200ExtraLight,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <NavigationContainer>
      <ThemeProvider theme={Theme}>
        <StatusBar
          backgroundColor={Theme.backgroundColor.background}
          style="light"
        />
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}
/* 1 - adicionar o icon no app
2 - adicionar splashscreen
3 - adicionar o gif do loading quando clicar em algum game 
    url do gif"https://i.gifer.com/yy3.gif"
4 - adicionar loading nos itens da flatList
5 - adicionar um background no icone bookmark para o filme salvo */
