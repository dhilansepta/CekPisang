import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { COLOURS } from "../storage/Colour";
import { horizontalScale, moderateScale, verticalScale } from '../storage/Metrics';

function EditProfile({ navigation }) {

  const pribadi1 = ["Nama", "Tanggal Lahir", "Alamat", "NIK"];
  const pribadi2 = ["Nama User", "Tanggal/Bulan/Tahun", "Alamat", "NIK"];

  const perusahaan1 = ["Nama Perusahaan", "Lokasi Perusahaan", "Koordinat Perusahaan", "Luas Lahan", "Nomor Telepon Perusahaan"];
  const perusahaan2 = ["Nama Perusahaan", "Lokasi Perusahaan", "Koordinat Perusahaan", "Luas Lahan", "Nomor Telepon Perusahaan"];

  const profilefieldpribadi = [];
  const profilefieldperusahaan = [];

  for(let i=0; i < pribadi1.length; i++){
    let editbtn = ""
    if(pribadi1[i] != "NIK"){
        editbtn = (<TouchableOpacity>
            <Image source={require("../storage/images/EditButtonBlack.png")}/>
          </TouchableOpacity>)
    }else{
        editbtn = ""
    }
    profilefieldpribadi.push(
      <View style={styles.datas}>
        <Text style={styles.teks2}>
          {pribadi1[i]}
        </Text>

        <View style={styles.underline}>
          <Text>
            {pribadi2[i]}
          </Text>
          {editbtn}
        </View>
      </View>
    )
  }

  for(let i=0; i < perusahaan1.length; i++){
    profilefieldperusahaan.push(
      <View style={styles.datas}>
        <Text style={styles.teks2}>
          {perusahaan1[i]}
        </Text>

        <View style={styles.underline}>
          <Text>
            {perusahaan2[i]}
          </Text>
          <TouchableOpacity>
            <Image source={require("../storage/images/EditButtonBlack.png")}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

    return (
    <View style={styles.background}>
        <View style={styles.topBar}>
          <View style={styles.topBarHolder}>
            <TouchableOpacity style={styles.settingButton} onPress={() => navigation.navigate("Login")}>
              <Image source={require("../storage/images/CrossButtonWhite.png")}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.settingButton} onPress={() => navigation.navigate("Login")}>
              <Image source={require("../storage/images/TopBar_btn_check.png")}/>
            </TouchableOpacity>
          </View>
        </View>
        
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.profileHolder}>
              <Image source={require("../storage/images/Profile.png")}/>

              <TouchableOpacity>
                <Text marginTop={verticalScale(8)} style={{color:COLOURS.secondary}}>
                    Change Picture
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.datasHolder}>
                <View style={styles.datas}>
                    <Text style={styles.teks2}>
                        Email
                    </Text>

                    <View style={styles.underline}>
                        <Text>
                            email@email.co.id
                        </Text>
                    </View>

                    <Text style={styles.teks2} marginTop={verticalScale(3)}>
                        Password
                    </Text>

                    <TouchableOpacity>
                        <Text style={{color:COLOURS.secondary}}>
                            Change Password?
                        </Text>
                    </TouchableOpacity>
                </View>

              <Text style={styles.teks1}>
                Profil Pribadi
              </Text>

              {
                profilefieldpribadi
              }
            </View>

            <View style={styles.datasHolder}>
              <Text style={styles.teks1}>
                Profil Perusahaan
              </Text>

              {
                profilefieldperusahaan
              }
            </View>
          </View>
        </ScrollView>
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
  topBar: {
    justifyContent:"flex-start",
    flexDirection:"row",
    alignItems:"center",
    borderTopWidth:0,
    borderRadius:moderateScale(14),
    borderTopStartRadius:moderateScale(0),
    borderTopEndRadius:moderateScale(0),
    height:verticalScale(100),
    width:horizontalScale(375),
    backgroundColor:COLOURS.primary,
  },
  body:{
    width:horizontalScale(375),
    backgroundColor:COLOURS.white,
    marginBottom:verticalScale(40),
    justifyContent:"flex-start",
    alignItems:"center"
  },
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
    justifyContent:"space-between",
    alignItems:"flex-end",
    flexDirection:"row",
    width:horizontalScale(375),
    height:verticalScale(50),
    top:verticalScale(10),
  },
  settingButton:{
    marginHorizontal:horizontalScale(30),
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
  },
  profileHolder:{
    marginTop:verticalScale(10),
    justifyContent:"center",
    alignItems:"center",
    width:verticalScale(375),
  },
  datasHolder:{
    width:horizontalScale(326),
    marginTop:verticalScale(10),
  },
  datas:{
    marginTop:verticalScale(3),
  },
  teks1:{
    fontWeight:"900",
    marginTop:verticalScale(12),
  },
  teks2:{
    color:COLOURS.grey2,
  },
  underline:{
    borderBottomWidth:1,
    paddingBottom:verticalScale(3),
    backgroundColor:COLOURS.accent,
    justifyContent:"space-between",
    alignItems:"center",
    flexDirection:"row",
  },
});

export default EditProfile;