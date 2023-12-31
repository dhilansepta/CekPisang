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

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login({ navigation }) {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("testpass");

  const auth = getAuth();
  function login() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log('Login berhasil:\n' + user.email);
        navigation.navigate("HomeUnit");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Login eror:\n'+errorMessage);
      });
    }

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

        <TouchableOpacity onPress={ login }>
          <View style={styles.Button} backgroundColor={COLOURS.primary} marginTop={verticalScale(20)}>
            <Text style={styles.text}>Masuk</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.Button} backgroundColor={COLOURS.ternary}>
            <Text style={styles.text}>Scan Unit tanpa akun</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("LupaPassword")}>
          <Text style={styles.textButton} marginTop={verticalScale(10)}>Lupa Password?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.textButton} marginTop={verticalScale(5)} onPress={()=>navigation.navigate('Daftar')}>Daftar Akun Baru</Text>
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

export default Login;