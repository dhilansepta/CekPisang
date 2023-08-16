import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { COLOURS } from "../storage/Colour";
import { horizontalScale, moderateScale, verticalScale } from '../storage/Metrics';

function Welcome({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    return (
    <View style={styles.background}>
        <Text style={styles.Header}>
        Masuk
        </Text>

        <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={COLOURS.grey}
        value={email}
        onChangeText={(text) => setEmail(text)}
        />

        <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={COLOURS.grey}
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        />

        
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:COLOURS.white
  },
  Header: {
    fontSize:moderateScale(40),
    textDecorationLine:'underline',
    fontWeight:'500'
  },
  input: {
    borderWidth:2,
    borderColor: COLOURS.grey2,
    backgroundColor: COLOURS.grey3,
    borderRadius: 8,
    width: horizontalScale(270),
    padding: moderateScale(8),
    margin: moderateScale(10),
  },
  loginButton: {
    width: "70%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOURS.backgroundLight,
    borderRadius: 40,
    margin: 20,
  },
  textButton: {
    color: COLOURS.black,
    fontWeight: "bold",
  },
});

export default Welcome;