import { StyleSheet, useWindowDimensions, } from "react-native";
import { useFonts } from "expo-font";

function useStyles() {
  const {width, height} = useWindowDimensions();

  const [fontsLoaded] = useFonts({
    "Inter-Topic": require("./assets/Fonts/Inter/static/Inter-Bold.ttf"),
    "Inter-Body": require("./assets/Fonts/Inter/static/Inter-Regular.ttf")
  });

  if (!fontsLoaded) {
    return null;
  }

  return StyleSheet.create({
    
  })
}

export default function App() {

}
