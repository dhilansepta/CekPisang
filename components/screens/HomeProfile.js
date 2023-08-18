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

function HomeProfile({ navigation }) {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);

  const pribadi1 = ["Email", "Nama", "Tanggal Lahir", "Alamat", "NIK"];
  const pribadi2 = ["email@email.co.id", "Nama User", "Tanggal/Bulan/Tahun", "Alamat", "NIK"];

  const perusahaan1 = ["Nama Perusahaan", "Lokasi Perusahaan", "Koordinat Perusahaan", "Luas Lahan", "Nomor Telepon Perusahaan"];
  const perusahaan2 = ["Nama Perusahaan", "Lokasi Perusahaan", "Koordinat Perusahaan", "Luas Lahan", "Nomor Telepon Perusahaan"];

  const profilefieldpribadi = [];
  const profilefieldperusahaan = [];

  for(let i=0; i < pribadi1.length; i++){
    profilefieldpribadi.push(
      <View style={styles.datas}>
        <Text style={styles.teks2}>
          {pribadi1[i]}
        </Text>

        <View style={styles.underline}>
          <Text>
            {pribadi2[i]}
          </Text>
        </View>
      </View>
    )
  }

  for(let i=0; i < pribadi1.length; i++){
    profilefieldperusahaan.push(
      <View style={styles.datas}>
        <Text style={styles.teks2}>
          {perusahaan1[i]}
        </Text>

        <View style={styles.underline}>
          <Text>
            {perusahaan2[i]}
          </Text>
        </View>
      </View>
    )
  }

    return (
    <View style={styles.background}>
        <View style={styles.topBar}>
          <View style={styles.topBarHolder}>
            <TouchableOpacity style={styles.settingButton} onPress={() => navigation.navigate("Login")}>
              <Image source={require("../storage/images/SettingWhite.png")}/>
            </TouchableOpacity>
          </View>
        </View>
        
        <ScrollView>
          <View style={styles.body}>
            <View style={styles.profileHolder}>
              <Image source={require("../storage/images/Profile.png")}/>

              <Text marginTop={verticalScale(8)}>
                User Id : UsErIdxtyzzvw
              </Text>

              <TouchableOpacity>
                <Image marginTop={verticalScale(10)} source={require("../storage/images/StatistikButtonYellow.png")}/>
              </TouchableOpacity>
            </View>

            <View style={styles.datasHolder}>
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

        <View style={styles.bottomBarholder}>
            <View style={styles.bottomBar}>
                <View style={styles.buttonGroup}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                        <Image source={require("../storage/images/ProdukBlack.png")}/>
                    </TouchableOpacity>

                    <View style={styles.QRWrapper}>
                        <TouchableOpacity style={styles.QRbutton} onPress={() => navigation.navigate("Login")}>
                            <Image source={require("../storage/images/ScanQRLogo.png")} style={styles.QRImage}/>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
                        <Image source={require("../storage/images/ProfilBlue.png")}/>
                    </TouchableOpacity>
                </View>
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
  },
  profileHolder:{
    marginTop:verticalScale(10),
    justifyContent:"center",
    alignItems:"center",
    width:verticalScale(375),
  },
  datasHolder:{
    width:verticalScale(326),
    marginTop:verticalScale(10),
  },
  datas:{
    marginTop:verticalScale(3),
  },
  teks1:{
    fontWeight:"900",
  },
  teks2:{
    color:COLOURS.grey2,
  },
  underline:{
    borderBottomWidth:1,
    paddingBottom:verticalScale(3),
  }
});

export default HomeProfile;