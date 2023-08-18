import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { COLOURS } from "../storage/Colour";

export function UnitItem({ unitId='1306231c07230069tuA6', unitDesc='Pisang Ambon, 34 Kg, 1221665', unitTimestamp='Mon Jul 24 2023 09:50:05 GMT+0700 (Western Indonesia Time)' }) {
  
  return (
    <View style={styles.UnitWrapper}>
      <Text style={{fontSize:16, lineHeight:16}}><Text style={{fontWeight:'bold'}}>Kode Unit : </Text>{unitId}</Text>
      <Text style={{fontSize:12, lineHeight:12}}>{unitDesc}</Text>
      <View style={styles.dateArea}><Text>Tanggal : </Text><Text style={{flex:1}}>{unitTimestamp}</Text></View>
    </View>

    
  );
}

const styles = StyleSheet.create({
  UnitWrapper: {
    width:'100%',
    borderBottomWidth:3,
    borderBottomColor:COLOURS.primary,
    paddingVertical:12,
    paddingHorizontal:20,
    gap:3,
  },
  dateArea: {
    display:'flex',
    flexDirection:'row',
    fontSize:12,
    lineHeight:12,
    width:'100%',
  }
});