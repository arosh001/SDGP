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

// Style Sheet
function useStyles() {
  const {width, height} = useWindowDimensions();
  
  return StyleSheet.create({
    root: {flex: 1, flexDirection: 'column'},
    top: {
      flex: 1,
      backgroundColor: '#F8B11B'
    },
    middle: {
      height: height > 500 ? 300 : 150,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F8B11B'
    },
    bottom: {
      height: height > 500 ? 310 : 150,
      backgroundColor: '#F8B11B'
    },
    logo: {
      width: 260,
      height: 65,
    },
    bgImage: {
      width: '100%',
      height: '100%'
    },
  });
}

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
  