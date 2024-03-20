// React Native Imports
import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useWindowDimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// Screen Imports
import PrivacyScreen from "./Privacy";
import GuidelinesScreen from "./Guidelines";
import UploadScreen from "./UploadOrTake";



// ______________________________Dev Area______________________________ //



// Home Screen Component
function HomeScreen() {
    const navigation = useNavigation();
  
    const logoPress = () => {
      navigation.navigate("Privacy");
    };
  
    const styles = useStyles();
  
    return (
      <View style={styles.root}>
        <StatusBar hidden/>
        <View style={styles.top}/>
        <View style={styles.middle}>
          <TouchableOpacity onPress={logoPress}>
            <Image source={require('./assets/Images/logo.png')} style={[styles.logo]}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <Image source={require('./assets/Images/BG 1.png')} style={[styles.bgImage]}></Image>
        </View>
      </View>
    );
    }
  