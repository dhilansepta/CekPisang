import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from 'expo-splash-screen';
import Login from "./components/screens/Login";
import LupaPassword from "./components/screens/LupaPassword";
import HomeProfile from "./components/screens/HomeProfile";
import EditProfile from "./components/screens/EditProfile";
import Welcome from "./components/screens/Login";
import HomeUnit from "./components/screens/HomeUnit";

// SplashScreen.preventAutoHideAsync();
// setTimeout(SplashScreen.hideAsync, 1000);

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Edit Profile" component={EditProfile} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LupaPassword" component={LupaPassword} />
        <Stack.Screen name="Profile" component={HomeProfile} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="HomeUnit" component={HomeUnit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;