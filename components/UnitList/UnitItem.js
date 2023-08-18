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

export function UnitItem({ unitId, unitDesc, unitTimestamp }) {
  
  return (
    <View style={styles.UnitWrapper}>
      <Text style={{fontSize:16, lineHeight:16}}><Text style={{fontWeight:'bold'}}>Kode Unit : </Text>{unitId}</Text>
      <Text style={{fontSize:12, lineHeight:13}} numberOfLines={1} ellipsizeMode="tail">{unitDesc}</Text>
      <View style={styles.dateArea}><Text style={styles.sizeSmall}>Tanggal : </Text><Text style={styles.timeStamp}>{unitTimestamp}</Text></View>
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
    lineHeight:13,
    width:'100%',
  },
  sizeSmall: {
    fontSize:12,
    lineHeight:13
  },
  timeStamp: {
    fontSize:12,
    lineHeight:13,
    flex:1
  }
});