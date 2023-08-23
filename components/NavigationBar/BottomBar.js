import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView
} from "react-native";
import { COLOURS } from "../storage/Colour";
import { horizontalScale, moderateScale, verticalScale } from '../storage/Metrics';

export default function BottomBar({ navigation, active }) {
  let unitImagePATH, profileImagePATH;
    if (active == 'unit') {
      unitImagePATH = require("../storage/images/home_unit_active.png");
      profileImagePATH = require("../storage/images/home_profile.png");
    }else if (active == 'profile') {
      unitImagePATH = require("../storage/images/home_unit.png");
      profileImagePATH = require("../storage/images/home_profile_active.png");
    }else{
      throw "No BottomBar active View data.";
    }
    return (
        <View style={styles.bottomBarholder}>
            <View style={styles.bottomBar}>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomeUnit")}>
                        <Image source={unitImagePATH}/>
                    </TouchableOpacity>

                    <View style={styles.QRWrapper}>
                        <TouchableOpacity style={styles.QRbutton} onPress={() => navigation.navigate('Scanner')}>
                            <Image source={require("../storage/images/ScanQRLogo.png")} style={styles.QRImage}/>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomeProfile")}>
                        <Image source={profileImagePATH}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
  bottomBarholder:{
    width:horizontalScale(375),
    height:verticalScale(110),
  },
  bottomBar:{
    marginTop:verticalScale(30),
    width:horizontalScale(375),
    height:verticalScale(80),
    borderWidth:2,
    borderBottomWidth:0,
    borderRadius:moderateScale(14),
    borderBottomStartRadius:moderateScale(0),
    borderBottomEndRadius:moderateScale(0),
    backgroundColor:COLOURS.white,
    borderColor:COLOURS.grey2,
    justifyContent:"center",
    alignItems:"center",
  },
  buttonGroup:{
    justifyContent:"space-evenly",
    alignItems:"center",
    flexDirection:"row",
    width:horizontalScale(370),
  },
  topBarHolder:{
    justifyContent:"center",
    alignItems:"flex-end",
    width:horizontalScale(375),
    height:verticalScale(50),
    top:verticalScale(10),
  },
  settingButton:{
    marginHorizontal:horizontalScale(20),
  },
  button:{
    borderRadius:moderateScale(16),
    marginHorizontal:horizontalScale(0),
  },
  QRWrapper:{
    bottom:verticalScale(0),
  },
  QRbutton:{
    position:"relative",
    bottom:verticalScale(12),
    borderRadius:moderateScale(16),
  },
  QRImage:{
    height:verticalScale(90),
    width:horizontalScale(90),
    resizeMode:'contain'
  },
});