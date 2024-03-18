// React Native Imports
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, useWindowDimensions, ImageBackground, Image } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

// ______________________________Dev Area______________________________ //

// Style Sheet
function useStyles() {
    const {width, height} = useWindowDimensions();
  
  // Fonts
    const [fontsLoaded] = useFonts({
      "Inter-Topic": require("./assets/Fonts/Inter/static/Inter-Bold.ttf"),
      "Inter-Body": require("./assets/Fonts/Inter/static/Inter-Regular.ttf")
    });
  
    if (!fontsLoaded) {
      return null;
    }
    
    return StyleSheet.create({
      root: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F8B11B',
      },
      bgImage2: {
        bottom: '0%',
        position: 'absolute',
        height: height > 500 ? 260 : 200,
        width: width > 600 ? 700 : 500,
      },
      sub_root: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      box1: {
        flex: 0.6,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0C1821',
        borderRadius: 20,
        height: height > 500 ? 500 : 150,
        width: width > 400 ? 350 : 300,
      },
      boxTop: {
        width: '85%',
        height: '10%',
      },
      topic: {
        fontFamily: 'Inter-Topic',
        color: "#FEFEFF"
      },
      boxMiddle: {
        width: '85%',
        height: '60%',
      },
      paragraph: {
        textAlign: 'justify',
        fontFamily: 'Inter-Body',
        color: "#FEFEFF"
      },
      boxBottom: {
        flexDirection: 'row',
        width: '85%',
        height: '10%',
        gap: 10,
        justifyContent: 'flex-end'
      },
      validate: {
        flexDirection: 'row',
        gap: 10,
        top: 20
      },
      checkbox: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 4,
        height: height > 500 ? 20 : 5,
        width: width > 400 ? 20 : 20,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
      checked: {
        backgroundColor: "#fff",
      },
      checkmark: {
        fontSize: 12,
        color: "#0C1821",
      },
      agreeText: {
        color: "#FEFEFF",
      },
      box2: {
        flex: 0.2,
        width: width > 400 ? 350 : 300,
        alignItems: 'center',
        justifyContent: 'center'
      },
      button: {
        backgroundColor: 'black',
        width: width > 400 ? 160 : 150,
        height: 55,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
      },
      buttonText: {
        color: 'white',
        fontFamily: 'Inter-Topic',
      },
      box3: {
        width: width > 500 ? 500 :500,
        alignItems: 'center',
        justifyContent: 'center'
      },
    })
  }

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