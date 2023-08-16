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

function LupaPassword({ navigation }) {
    const[email, setEmail] = useState("");

    return (
    <View style={styles.background}>
        <View style={styles.headerBox}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Login")}>
                <Image source={require("../storage/images/BackButtonBlack.png")}/>
            </TouchableOpacity>

            <Text style={styles.HeaderText}>
            Lupa Password
            </Text>
        </View>

        <View style={styles.body}>
            <Text style={styles.BodyText} marginTop={verticalScale(20)}>
                Account Recovery
            </Text>

            <Text style={styles.BodyText} marginTop={verticalScale(10)}>
                Email
            </Text>

            <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={COLOURS.grey}
            value={email}
            onChangeText={(text) => setEmail(text)}
            marginTop={verticalScale(3)}
            />

            <View style={styles.buttonGroup}>
                <TouchableOpacity>
                    <View style={styles.Button} backgroundColor={COLOURS.white}>
                        <Text style={styles.text1}>Cancel</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.Button} backgroundColor={COLOURS.primary}>
                        <Text style={styles.text2}>Send Recovery Email</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor:COLOURS.white,
  },
  headerBox:{
    justifyContent:"flex-start",
    flexDirection:"row",
    alignItems:"center",
    borderBottomWidth:0.8,
    height:verticalScale(60),
    marginTop:verticalScale(30),
    width:horizontalScale(375),
  },
  HeaderText: {
    fontSize:moderateScale(20),
    fontWeight:'500'
  },
  backButton: {
    height: verticalScale(20),
    width: horizontalScale(25),
  },
  BodyText:{
    fontWeight:"500",
    fontSize:moderateScale(18),
    marginLeft: moderateScale(15),
  },
  input:{
    borderWidth:2,
    borderColor: COLOURS.grey2,
    backgroundColor: COLOURS.white,
    borderRadius: 8,
    width: horizontalScale(340),
    padding: moderateScale(8),
    marginLeft: horizontalScale(17),
    margin: moderateScale(10),
  },
  buttonGroup:{
    justifyContent:"center",
    alignItems:"center",
    width:horizontalScale(375),
    flexDirection:"row",
  },
  Button:{
    width: horizontalScale(171),
    height: verticalScale(45),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(8),
    margin: moderateScale(5),
    borderColor: COLOURS.primary,
    borderWidth:1,
  },
  text1:{
    fontWeight:"bold",
    color:COLOURS.primary,
  },
  text2:{
    fontWeight:"bold",
    color:COLOURS.white,
  },
});

export default LupaPassword;