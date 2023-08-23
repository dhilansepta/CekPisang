import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { COLOURS } from "../storage/Colour";
import { horizontalScale, moderateScale, verticalScale } from '../storage/Metrics';
import { BarCodeScanner } from 'expo-barcode-scanner';

function Scanner({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
          const { status } = await BarCodeScanner.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        };
    
        getBarCodeScannerPermissions();
    }, []);
    
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Berhasil Scan QR! \n` + `Type: ${type}\n` + `Data: ${data}`);
    };
    
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
    <View style={styles.background}>
      <View style={styles.scannerframe}>
        <Image source={require("../storage/images/ScanningFrame.png")} style={{width:'100%', height:'100%'}}/>
      </View>

      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        type={"back"}
        style={styles.scanners}
      />

      <View style={styles.teksnbtnframe}>
        <Text style={styles.teks}>
          Silahkan Pindai QR Code Disini
        </Text>
        <TouchableOpacity
        onPress={() => {
          setScanned(false);
          navigation.goBack();
        }}
        >
          <View style={styles.btn}>
            <Text style={styles.btnteks}>
              Kembali
            </Text>
          </View>
        </TouchableOpacity>
      </View>

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
  topbar:{
    justifyContent:"center",
    alignItems:"center",
    width:horizontalScale(375),
    height:verticalScale(100),
    backgroundColor:COLOURS.primary,
  },
  body:{
    width:horizontalScale(375),
    height:"100%",
    backgroundColor:COLOURS.accent,
  },
  scanners:{
    width:"130%",
    height:"100%",
    backgroundColor:COLOURS.red,
    position:"absolute",
  },
  scannerframe:{
    zIndex:1,
    position:"absolute",
    width:'100%',
    height:'100%',
  },
  teksnbtnframe:{
    zIndex:2,
    width:horizontalScale(375),
    height:verticalScale(812),
    justifyContent:"space-evenly",
    alignItems:"center",
  },
  teks:{
    fontWeight:"900",
    bottom:verticalScale(40),
    fontSize:moderateScale(23),
  },
  btn:{
    backgroundColor:COLOURS.white,
    borderColor:COLOURS.primary,
    borderWidth:4,
    top:verticalScale(80),
    width:horizontalScale(160),
    height:verticalScale(48),
    borderRadius:moderateScale(14),
    justifyContent:"center",
    alignItems:"center",
  },
  btnteks:{
    fontSize:moderateScale(18),
    fontWeight:"500",
  }
});

export default Scanner;