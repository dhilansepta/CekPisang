import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView
} from "react-native";
import { COLOURS } from "../storage/Colour";

/**
 * @param {navigation} navigation           Navigation object.
 * @param {type}           very_long_name Description.
 */
function TopBar({ navigation, title='', leftButtonData=['back', false], rightButtonData=[false, false] }) {
    
    // const renderBackButton = () => {
    //     if(backButton){
    //         return(
    //             <TouchableOpacity onPress={() => navigation.goBack()}>
    //                 <Image source={require('../storage/images/TopBar_btn_back.png')} style={styles.TopBarBtnImg}/>
    //             </TouchableOpacity>
    //         );
    //     }
    //     return '';
    // }

    const renderButton = (buttonData) => {
        const buttonType = buttonData[0];
        let buttonAction = buttonData[1];
        if(buttonType){
            let btnImgSrc = '';
            switch (buttonType){
                case 'edit':
                    btnImgSrc = require('../storage/images/TopBar_btn_edit.png');
                    break;
                case 'check':
                    btnImgSrc = require('../storage/images/TopBar_btn_check.png');
                    break;
                case 'setting':
                    btnImgSrc = require('../storage/images/TopBar_btn_setting.png');
                    break;
                case 'cross':
                    btnImgSrc = require('../storage/images/CrossButtonWhite.png');
                    break;
                case 'back':
                    btnImgSrc = require('../storage/images/TopBar_btn_back.png');
                    buttonAction = () => navigation.goBack();
                    break;
                default:
                    throw('Invalid Topbar button type');
            }
            return(
                <TouchableOpacity onPress={buttonAction}>
                    <Image source={btnImgSrc} style={styles.TopBarBtnImg}/>
                </TouchableOpacity>
            );
        }
        return;
    }
  return (
    <View style={styles.TopBar}>
        <View style={styles.TopBarBtn}>
            {renderButton(leftButtonData)}
        </View>
        <View style={styles.TopBarTitle}>
            <Text style={styles.TopBarTitleText} numberOfLines={1}>{title}</Text>
        </View>
        <View style={styles.TopBarBtn}>
            {renderButton(rightButtonData)}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    TopBar:{
        width:'100%',
        height:94,
        backgroundColor:COLOURS.primary,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        padding:16,
        marginTop:0,
        paddingTop:46,
        borderRadius:0,
        borderBottomLeftRadius:14,
        borderBottomRightRadius:14,
        
    },
    TopBarBtn:{
        width:32,
        height:32,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'red',
    },
    TopBarBtnImg:{
        width:32,
        height:32,
        resizeMode:'contain'
    },
    TopBarTitle:{
        flex:1,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:16,
    },
    TopBarTitleText:{
        fontSize:20,
        fontWeight:'bold',
        color:COLOURS.white,
        width:'100%',
        textAlign:'center',
    }
});

export default TopBar;