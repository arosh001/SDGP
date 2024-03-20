import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image, BackHandler, useWindowDimensions, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";

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
    root: {
      flex: 1,
      backgroundColor: 'tomato',
      backgroundColor: '#F8B11B',
    },
    sub_root: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bgImage3_1: {
      bottom: '-10%',
      left: '-50%',
      position: 'absolute',
      height: height > 500 ? 520 : 200,
      width: width > 500 ? 700 : 500,
    },
    bgImage3_2: {
      top: '-5%',
      left: '30%',
      position: 'absolute',
      height: height > 400 ? 300 : 200,
      width: width > 500 ? 700 : 100,
    },
    bgImage3_3: {
      top: '45%',
      left: '55%',
      position: 'absolute',
      height: height > 400 ? 200 : 200,
      width: width > 350 ? 300 : 100,
    },
    button1: {
      top: '-23%',
      alignItems: 'center',
      justifyContent: 'center',
      width: width > 400 ? 180 : 150,
      height: 55,
      borderRadius: 150,
      backgroundColor: 'black',
      flexDirection: 'row',
      gap: 10
    },
    camera_icon: {
      width: 30,
      height: 25
    },
    cameraButtonText: {
      color: 'white',
      fontSize: 15
    }
  })
}

export default function App() {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraOpen, setCameraOpen] = useState(false);

  useEffect(() => {
    const backButtonController = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (cameraOpen) {
          setCameraOpen(false);
          return true;
        }
        return false;
      }
    );
  });

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const CameraPress = async () => {
    if (hasPermission) {
      setCameraOpen(true);
    } else {
      console.log("Camera permission not granted!");
    }
  };

  const styles = useStyles();

  if (cameraOpen) {
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={Camera.Constants.Type.back} />
        <StatusBar style="auto" />
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <ImageBackground source={require ('../frontend/assets/Images/BG3_1.png')} style={styles.bgImage3_1}/>
      <ImageBackground source={require ('../frontend/assets/Images/BG3_2.png')} style={styles.bgImage3_2}/>
      <ImageBackground source={require ('../frontend/assets/Images/BG3_3.png')} style={styles.bgImage3_3}/>
      <View style={styles.sub_root}>
        <View style={styles.cameraButton}>
          <TouchableOpacity style={styles.button1} onPress={CameraPress}>
            <Image source={require ('./assets/Images/camera 1.png')} style={styles.camera_icon} />
            <Text style={styles.cameraButtonText}>Camera</Text>
          </TouchableOpacity>
        </View> 
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
