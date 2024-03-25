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