// React Native Imports
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, useWindowDimensions, ImageBackground, Image } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

// ______________________________Dev Area______________________________ //


export default function App() {

    const navigation = useNavigation();
  
    const StartPress = () => {
        navigation.navigate("UploadOrTake")
    };
  
    const styles = useStyles();
  
    return (
      <View style={styles.root}>
        <ImageBackground source={require ('../frontend/assets/Images/BG 2.png')} style={styles.bgImage2}/>
        <View style={styles.sub_root}>
          <View style={styles.box1}>
            <View style={styles.boxTop}>
              <Text style={styles.topic}>Guidelines :</Text>
            </View>
            <View style={styles.boxMiddle}>
              <ScrollView>
                <Text style={styles.paragraph}>
                The Humming Bird Sign Language Translator App is designed to provide users with an intuitive and 
                enriching learning experience. The interface prioritizes user-friendly navigation, ensuring that 
                users can effortlessly explore the app's features. Clear and accurate representations of sign language 
                gestures facilitate easy comprehension and learning. Interactive modules offer users the opportunity to 
                practice and enhance their sign language skills, with customization options allowing personalization to 
                individual preferences. The app's commitment to offline accessibility, regular content updates, and 
                robust privacy measures underscores its dedication to inclusivity and user satisfaction. By fostering 
                community engagement and respecting cultural nuances, the Humming Bird app aims to create a supportive 
                environment for users on their sign language learning journey. 
                Translator App is designed to provide users with an intuitive and enriching learning experience. 
                The interface prioritizes user-friendly navigation, ensuring that users can effortlessly explore 
                the app's features. Clear and accurate representations of sign language gestures facilitate easy 
                comprehension and learning.
                </Text>
              </ScrollView>
            </View>
          </View>
          <View style={styles.box2}>
            <View style={styles.guidelineButton}>
              <TouchableOpacity style={styles.button} onPress={StartPress}>
                <Text style={styles.buttonText}>START</Text>
              </TouchableOpacity>
            </View>
          </View>
            <View style={styles.box3}>
          
            </View>
          <StatusBar hidden/>
        </View>
      </View>
    );
}