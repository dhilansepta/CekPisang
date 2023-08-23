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
import TopBar from "../NavigationBar/TopBar";
import { unit_sample_data } from "../../assets/sample_data/unit_sample_data";
import { operator_sample_data } from "../../assets/sample_data/operator_sample_data";

function DetailUnit({ navigation, unitData = false, operatorData = false }) {
  const [opsExpaned, setOpsExpanded] = useState(false);

  unitData = unitData ? unitData : unit_sample_data;
  operatorData = operatorData ? operatorData : operator_sample_data;

  const getBriefUnitData = (unit_data) => {
    return {
      id: unit_data['id'],
      timestamp: unit_data['timestamp'],
      shortDesc: unit_data['desc']['Varietas']+', '+unit_data['desc']['Berat']+'Kg, '+unit_data['dataProduksi']['TanggalPanen'],
    }
  }

  const renderTextData = (data)=>{
    return data == '' ? '-' : data;
  }

  const renderUnitInput = (brief_unit_data, key, onpress=false)=>{
    return (
      <TouchableOpacity onPress={onpress} key={key}>
        <View style={{padding:12, gap:6, backgroundColor:COLOURS.ternary, borderWidth:1, borderBlockColor:'#7E7E7E', borderRadius:14, elevation:2}}>
          <View>
            <Text><Text style={{fontWeight:'bold', fontSize:16, lineHeight:18}}>Kode Unit : </Text><Text style={{fontSize:16}}>{brief_unit_data['id']}</Text></Text>
            <Text style={{fontSize:10, lineHeight:12}}>{brief_unit_data['timestamp']}</Text>
          </View>
          <Text style={{fontSize:12, lineHeight:14}}>{brief_unit_data['shortDesc']}</Text>
        </View>
      </TouchableOpacity>
      
    )
  }

  const unitInputList =[];
  unitData.idUnitInput.forEach((unit, index)=>{
    unitInputList.push(renderUnitInput(getBriefUnitData(unitData), index, ()=>{navigation.navigate('DetailUnit')}));
  });

  const renderOperatorData = (title, data=[])=>{
    let detailFields = [];
    data.forEach((item, index)=>{
      detailFields.push(
        <Text key={index} style={{fontSize:14}}>{item}</Text>
      )
    });
    return (
      <View key={title} style={{gap:3}}>
        <Text style={{fontSize:16, fontWeight:'bold'}}>{title}</Text>
        <View style={{paddingHorizontal:12}}>
          {detailFields}
        </View>
      </View>
    )
  }

  const operator_data = [
    renderOperatorData('Nama Operator', operator_sample_data['nama']),
    renderOperatorData('Nama Perusahaan/Organisasi', operator_sample_data['namaPerusahaan']),
    renderOperatorData('Alamat Perusahaan/Perkebunan', operator_sample_data['alamatPerusahaan']),
    renderOperatorData('Kontak Perusahaan', operator_sample_data['kontakPerusahaan']),
    renderOperatorData('Luas Lahan Perkebunan (Hektar)', operator_sample_data['luasLahan']),
    renderOperatorData('Koordinat (Longitude, Latitude)', operator_sample_data['koordinat']),
  ];

  return (
    <View style={styles.container}>
        <TopBar navigation={navigation} title="Detail Unit" rightButtonData={['edit', navigation.goBack]} />
        <ScrollView>
          <View style={styles.mainContent}>

            <View style={styles.qrContainer}>
              <Image source={unitData['QRIMAGE']}/>
            </View>

            <TouchableOpacity>
              <Image source={require('../storage/images/qr_download_button.png')} style={{marginBottom:8}}/>
            </TouchableOpacity>

            <View style={{width:'100%', paddingHorizontal:8}}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Unit ID: {renderTextData(unitData['id'])}</Text>
              <Text style={{fontSize:12,fontWeight:'300', paddingHorizontal:4}}>{renderTextData(unitData['timestamp'])}</Text>
            </View>

            <View style={styles.detailWrapper}>
              <View style={styles.detailContent}>
                
                <Text style={styles.detailHeading}>Deskripsi Unit</Text>
                <View style={styles.detailSubContent}>
                  <View style={styles.detailBox}>
                    <View style={styles.detailField}>
                      <Text style={styles.detailFieldText}>Berat</Text>
                      <Text style={styles.detailFieldTextRight}>{renderTextData(unitData['desc']['Berat'])}</Text>
                    </View>
                    <View style={styles.detailField}>
                      <Text style={styles.detailFieldText}>Warna</Text>
                      <Text style={styles.detailFieldTextRight}>{renderTextData(unitData['desc']['Warna'])}</Text>
                    </View>
                    <View style={styles.detailField}>
                      <Text style={styles.detailFieldText}>Varietas</Text>
                      <Text style={styles.detailFieldTextRight}>{renderTextData(unitData['desc']['Varietas'])}</Text>
                    </View>
                  </View>

                  <Text>Data Lainnya</Text>
                  <View style={styles.detailBox}>
                    <View style={styles.detailField}>
                      <Text style={styles.detailFieldText}>{renderTextData(unitData['dataLainnya'])}</Text>
                    </View>
                  </View>

                </View>
              </View>

              <View style={styles.detailContent}>
                <Text style={styles.detailHeading}>Data Produksi</Text>
                <View style={styles.detailSubContent}>
                  <View style={styles.detailBox}>
                    <View style={styles.detailField}>
                      <Text style={styles.detailFieldText}>Tanggal Produksi/Tanggal Panen</Text>
                      <Text style={styles.detailFieldTextRight}>{renderTextData(unitData['dataProduksi']['TanggalPanen'])}</Text>
                    </View>
                  </View>
                  <View style={styles.detailBox}>
                    <View style={styles.detailField}>
                      <Text style={styles.detailFieldText}>Tanggal Kadaluarsa</Text>
                      <Text style={styles.detailFieldTextRight}>{renderTextData(unitData['dataProduksi']['TanggalKadaluarsa'])}</Text>
                    </View>
                  </View>
                  <View style={styles.detailBox}>
                    <View style={styles.detailField}>
                      <Text style={styles.detailFieldText}>Waktu Pengiriman</Text>
                      <Text style={styles.detailFieldTextRight}>{renderTextData(unitData['dataProduksi']['WaktuPengiriman'])}</Text>
                    </View>
                  </View>

                </View>
              </View>

              <View style={styles.detailContent}>
                <Text style={styles.detailHeading}>Data Transformasi</Text>
                <View style={styles.detailSubContent}>
                  <Text>Perubahan Lokasi</Text>
                  <View style={styles.detailBox}>
                    <View style={styles.detailField}>
                      <Text style={styles.detailFieldText}>Lokasi Awal</Text>
                      <Text style={styles.detailFieldTextRight}>{renderTextData(unitData['dataTransformasi']['LokasiAwal'])}</Text>
                    </View>
                    <View style={styles.detailField}>
                      <Text style={styles.detailFieldText}>Lokasi Akhir</Text>
                      <Text style={styles.detailFieldTextRight}>{renderTextData(unitData['dataTransformasi']['LokasiAkhir'])}</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.detailContent}>
                <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:6}}>
                  <Text style={styles.detailHeading}>Unit Input (Sebelumnya)</Text>
                  <TouchableOpacity style={styles.sumberPerkebunanBtn}>
                    <View>
                      <Text style={{fontSize:11}}>Sumber Perkebunan</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.detailSubContent}>
                  {unitInputList}
                </View>
              </View>
            </View>
            <TouchableOpacity style={{width:'100%', borderColor:'black', borderWidth:1, borderRadius:14}} onPress={()=>{setOpsExpanded(!opsExpaned)}}>
              <View style={styles.detailOperatorBtn}>
                <Text style={{fontSize:16, fontWeight:'bold'}}>
                  Data Operator
                </Text>
                <Image source={require('../storage/images/arrow_expand.png')} style={!opsExpaned ? {transform:[{rotate:'0deg'}]}:{transform:[{rotate:'180deg'}]}} />
              </View>
              <View style={opsExpaned ? styles.detailOperatorContent : {display:'none'}}>
                {operator_data}
                <TouchableOpacity style={styles.operatorLocation}>
                  <Image source={require('../storage/images/operator_map_sample_image.png')} style={{width:'100%', resizeMode:'cover'}}/>
                </TouchableOpacity>

              </View>
            </TouchableOpacity>

          </View>

        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
    },
    scrollView:{

    },
    mainContent:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding:12,
        gap:6
    },
    qrContainer:{
      borderColor: COLOURS.black,
      borderWidth:1,
      borderRadius:14,
      padding:12,
    }, 
    detailWrapper:{
      width:'100%',
      gap:6,
      paddingHorizontal:6,
    },
    detailContent:{
      width:'100%',
      paddingHorizontal:6,
      gap:3,
    },
    detailSubContent:{
      gap:6,
      width:'100%',
      paddingHorizontal:6,
    },
    detailHeading:{
      fontWeight:'bold',
      fontSize:16,

    },
    detailBox:{
      backgroundColor:'#DDDDDD',
      borderColor: COLOURS.black,
      borderWidth:1,
      borderRadius:14,
      padding:12,
      gap:6,
      width:'100%',
    },
    detailField:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
    },
    detailFieldText:{
      flex:1,
    },
    detailFieldTextRight:{
      flex:1,
      textAlign:'right',
    },
    sumberPerkebunanBtn:{
      padding:8,
      backgroundColor:COLOURS.accent,
      borderRadius:14,
      borderColor: COLOURS.ternary,
      borderWidth:1,
      elevation:2
    },
    detailOperatorBtn:{
      padding:12,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'100%',
    },
    detailOperatorContent:{
      paddingHorizontal:18,
      gap:9,
      paddingBottom:12
    },
    operatorLocation:{
      borderRadius:14,
      borderColor: COLOURS.black,
      borderWidth:1,
      overflow:'hidden',
    }

});

export default DetailUnit;