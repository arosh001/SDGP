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


    const styles = useStyles();

  return (
    <View style={styles.root}>
      <ImageBackground source={require ('../frontend/assets/Images/BG 2.png')} style={styles.bgImage2}/>
    
      <View style={styles.sub_root}>
        <View style={styles.box1}>
          <View style={styles.boxTop}>
            <Text style={styles.topic}>Privacy Policy :</Text>
          </View>
          <View style={styles.boxMiddle}>
            <ScrollView>
              <Text style={styles.paragraph}>
                We respect your privacy and are committed to protecting your personal information.
                Any data collected from you will be used solely for the purpose of providing and improving our services.
                We assure you that your information will not be shared with third parties without your explicit consent.
                We implement industry-standard security measures to safeguard your data against unauthorized access and
                ensure its confidentiality. By using our services, you agree to the collection and use of information
                in accordance with this policy. Please review our Privacy Policy periodically for any updates.
                If you have any concerns or questions, feel free to contact us.
              </Text>
            </ScrollView>
          </View>
          <View style={styles.boxBottom}>
            <View style={styles.validate}>
              <TouchableOpacity style={[styles.checkbox, isChecked && styles.checked]} onPress={() => setIsChecked(!isChecked)}>
                {isChecked && <Text style={styles.checkmark}>✓</Text>}
              </TouchableOpacity>
              <Text style={styles.agreeText}>I agree</Text>
            </View>
          </View>
        </View>
        <View style={styles.box2}>
          <View style={styles.guidelineButton}>
            <TouchableOpacity style={styles.button} onPress={GuidelinePress}>
              <Text style={styles.buttonText}>GUIDELINES</Text>
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