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
        marginTop={verticalScale(50)}
        />

        <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={COLOURS.grey}
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity>
          <View style={styles.Button} backgroundColor={COLOURS.primary} marginTop={verticalScale(20)}>
            <Text style={styles.text}>Masuk</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.Button} backgroundColor={COLOURS.ternary}>
            <Text style={styles.text}>Scan Unit tanpa akun</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.textButton} marginTop={verticalScale(10)}>Lupa Password?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.textButton} marginTop={verticalScale(5)}>Daftar Akun Baru</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:COLOURS.white,
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
  Button: {
    width: horizontalScale(270),
    height: verticalScale(45),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(40),
    margin: moderateScale(5),
  },
  text:{
    color:COLOURS.white,
    textDecorationLine:"underline",
    fontWeight:"500",
  },
  textButton: {
    color: COLOURS.secondary,
    textDecorationLine:"underline",
    fontWeight: "500",
  },
});

export default Welcome;