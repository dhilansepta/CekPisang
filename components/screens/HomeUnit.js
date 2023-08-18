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
import { horizontalScale, moderateScale, verticalScale } from '../storage/Metrics';
import { UnitItem } from '../UnitList/UnitItem'

const get_sample_unit = (amount = 9) => {
  let date = new Date();
  const temp = [];
  for(let i = 0; i < amount; i++){
    let id = String((i+1)%10)+'306231c07230069tuA6';
    let desc = 'Pisang ke-'+String(i+1)+', '+(i+1)*34+'Kg, 12216'+Math.floor(i/10)+(i%10);
    let timestamp = date.toString() + ' (Western Indonesian Time)';
    temp.push(
      <UnitItem key={i} unitId={id} unitDesc={desc} unitTimestamp={timestamp}/>
    )
  }
  return temp;
}

export default function HomeUnit({ navigation }) {
  const [search, setSearch] = useState("");

  const unitItems = get_sample_unit();


    return (
    <View style={styles.MainWrapper}>

        <View style={styles.Header}>
          <View style={styles.SearchBox}>
            <TextInput
            style={styles.SearchField}
            value={search}
            onChangeText={(text) => setSearch(text)}
            />
            <Image source={require('../storage/images/search.png')} style={styles.SearchIcon} />
          </View>

          <View style={styles.TopBtnSection}>
            <TouchableOpacity style={styles.TopBtn}>
              <View style={styles.TopBtnView}>
                <Image source={require('../storage/images/scan_unit_baru.png')} style={styles.TopBtnImg}/>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TopBtn}>
              <View style={styles.TopBtnView}>
                <Image source={require('../storage/images/tambah_unit_baru.png')} style={styles.TopBtnImg}/>
              </View>
              
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.MainContent}>
          <ScrollView style={styles.UnitList}>
            {unitItems}
          </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  MainWrapper: {
    display:'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent:'flex-start',
    backgroundColor:COLOURS.primary,
    height:'100%',
    width:'100%',
  },

  Header: {
    marginTop:verticalScale(35),
    padding:16,
    width:'100%',
    gap:8,
    // flex:0
  },

  SearchBox: {
    height:52,
    width:'100%',
    backgroundColor:COLOURS.white,
    borderRadius:14,
    display:'flex',
    flexDirection:'row',
    overflow:'hidden',
  },

  SearchField: {
    flex:1,
    height:'100%',
    paddingHorizontal:16,
  },

  SearchIcon: {
    width:24,
    height:24,
    margin:16,
  },

  TopBtnSection: {
    height:103,
    padding:'10px,4px',
    display:'flex',
    flexDirection:'row',
    gap:10,
    marginVertical:10,
    marginHorizontal:4,
  },

  TopBtn: {
    display:'flex',
    flex:1,
  },

  TopBtnView: {
    flex:1,
    display:'flex',
    margin:0
  },

  TopBtnImg: {
    flex:1,
    resizeMode:'contain',
    width:null,
    height:null
  },

  TopBtnContent: {
    // margin:'13px, 20px',
  },

  MainContent: {
    width:'100%',
    flex:1,
    borderRadius:24,
    overflow:'scroll',
  },

  UnitList: {
    backgroundColor:COLOURS.white,
    paddingTop:6,
    height:'100%'
  }

});