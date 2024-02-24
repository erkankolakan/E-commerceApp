import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import { Cart,ProductDetails } from "./screens/index";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    extraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    semiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded && !fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom Navigation"
          component={BottomTabNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
