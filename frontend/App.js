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