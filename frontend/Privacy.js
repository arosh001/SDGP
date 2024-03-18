// React Native Imports
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, useWindowDimensions, ImageBackground, Image } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

// ______________________________Dev Area______________________________ //


export default function App() {
    const [isChecked, setIsChecked] = useState(false);
  
    const checkboxToggled = () => {
      setIsChecked(!isChecked);
    };
  
    const navigation = useNavigation();
  
    const GuidelinePress = () => {
      if (isChecked) {
        navigation.navigate("Guidelines")
      }
  
      else {
        console.log("Please Agree to Privacy Policies!")
      }
    };