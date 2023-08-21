import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from 'expo-splash-screen';
import Login from "./components/screens/Login";
import LupaPassword from "./components/screens/LupaPassword";
import HomeProfile from "./components/screens/HomeProfile";
import EditProfile from "./components/screens/EditProfile";
import ChangePassword from "./components/screens/ChangePassword";
import Daftar from "./components/screens/Daftar";
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
        <Stack.Screen name="Home Unit" component={HomeUnit} />
        <Stack.Screen name="Home Profile" component={HomeProfile} />
        <Stack.Screen name="Daftar" component={Daftar} />
        <Stack.Screen name="Change Password" component={ChangePassword} />
        <Stack.Screen name="Edit Profile" component={EditProfile} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LupaPassword" component={LupaPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;