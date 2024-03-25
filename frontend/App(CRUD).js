import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/Login";
import HomeScreen from "./screens/Home";
import SignUpScreen from "./screens/SignUp";
import firebase from 'firebase/app';
import "firebase/auth";
import { initializeApp } from 'firebase/app';

const Stack = createNativeStackNavigator();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const firebaseConfig = {
    
    apiKey: "AIzaSyCNOLWSEYScRYfNSVAqEBKTBriLuzQWUzU",
  authDomain: "hummingbird-fcf38.firebaseapp.com",
  projectId: "hummingbird-fcf38",
  storageBucket: "hummingbird-fcf38.appspot.com",
  messagingSenderId: "3510611011",
  appId: "1:3510611011:web:148ec0048c7e18e6ce38f6"
    
  };

  // Check if Firebase has been initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig); 
  } else {
    firebase.app();
  }

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;