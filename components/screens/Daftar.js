import React, { useRef, useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import { COLOURS } from "../storage/Colour";
import { horizontalScale, moderateScale, verticalScale } from '../storage/Metrics';
import { useTogglePasswordVisibility } from '../storage/useTogglePasswordVisibility';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import RNDateTimePicker from "@react-native-community/datetimepicker";
import {Picker} from '@react-native-picker/picker';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function Daftar({ navigation }) {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("testpass");
  const [date, setDate] = useState("");
  const [alamat, setAlamat] = useState("");
  const [nik, setNik] = useState("");
  const [role, setRole] = useState("");
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
  const [showPicker, setShowPicker] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == "set"){
      const currentDate = selectedDate;
      setDate(currentDate);

      if(Platform.OS == "android"){
        toggleDatepicker();
        setDate(currentDate.toDateString());
      }
    }else{
      toggleDatepicker();
    }
  }

  const pickerRef = useRef();
  function open() {
    pickerRef.current.focus();
  }

  const auth = getAuth();
  function register() {
    createUserWithEmailAndPassword(auth, email, password)
      .then(( userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigation.navigate("Login");
        console.log('Register berhasil:\n' + user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log('Register error:\n' + errorMessage);
      });
  }
  

    return (
    <View style={styles.background}>
        <Text style={styles.Header}>
        Daftar
        </Text>

        <TextInput
        style={styles.input}
        placeholder="Nama"
        value={nama}
        onChangeText={(text) => setNama(text)}
        marginTop={verticalScale(40)}
        />

        <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        />
        
        <View style={styles.input}>
            <TextInput
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            enablesReturnKeyAutomatically
            maxLength={16}
            secureTextEntry={passwordVisibility}
            onChangeText={(text) => setPassword(text)}
            />

            <Pressable onPress={handlePasswordVisibility}>
                <MaterialCommunityIcons name={rightIcon} size={21} color="#232323" />
            </Pressable>
        </View>

        {showPicker && (
          <RNDateTimePicker
            mode="date"
            display="spinner"
            value={new Date()}
            onChange={onChange}
          />
        )}
        {!showPicker && (
          <Pressable onPress={toggleDatepicker}>
            <View style={styles.input}>
              <TextInput
                style={{color:COLOURS.black}}
                placeholder="Tanggal Lahir"
                value={date}
                onChangeText={setDate}
                editable={false}
              />

              <Entypo name="calendar" size={24} color="black" />

            </View>
        </Pressable>
        )}

        <TextInput 
        style={styles.input}
        placeholder="Alamat"
        value={alamat}
        onChangeText={(text) => setAlamat(text)}
        />

        <TextInput
        style={styles.input}
        placeholder="NIK"
        value={nik}
        onChangeText={(text) => setNik(text)}
        />
        
        <Pressable onPress={open}>
          <View style={styles.input}>
            <TextInput
              style={{color:COLOURS.black}}
              placeholder="Daftar Sebagai"
              value={selectedRole}
              editable={false}
              onChangeText={(text) => setRole(text)}
            />

            <Picker
              ref={pickerRef}
              mode="dropdown"
              selectedValue={selectedRole}
              onValueChange={(itemValue) =>
                setSelectedRole(itemValue)
              }>
              <Picker.Item label="Petani" value="Petani" />
              <Picker.Item label="Transporter" value="Transporter" />
              <Picker.Item label="Industri/Manufaktur/Pengolah" value="Industri/Manufaktur/Pengolah" />
              <Picker.Item label="Agen/Distributor" value="Agen/Distributor" />
              <Picker.Item label="Retail/Pedagang" value="Retail/Pedagang" />
            </Picker>
          </View>
        </Pressable>

        <TouchableOpacity onPress={ register }>
          <View style={styles.Button} backgroundColor={COLOURS.primary} marginTop={verticalScale(20)}>
            <Text style={styles.text}>Daftar</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.textButton} marginTop={verticalScale(10)}>Sudah Punya Akun?</Text>
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
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
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

export default Daftar;