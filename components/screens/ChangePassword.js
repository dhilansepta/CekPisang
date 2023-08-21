import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Pressable
} from "react-native";
import { COLOURS } from "../storage/Colour";
import { horizontalScale, moderateScale, verticalScale } from '../storage/Metrics';
import { useTogglePasswordVisibility } from '../storage/useTogglePasswordVisibility';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function ChangePassword({ navigation }) {
    const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();
    const [password, setPassword] = useState('');
    const [newpassword, setNewpassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

    return (
    <View style={styles.background}>
        <View style={styles.header}>
            <View style={styles.headerbox}>
                <Image source={require("../storage/images/LockIconWhite.png")}/>
                <Text style={styles.headtext}>Change Password</Text>
            </View>
        </View>
        
        <ScrollView style={{overflow:"hidden"}}>
            <View style={styles.body}>
                <View style={styles.bodybox}>
                    <Text style={styles.bodytext}>
                    Create your new password for the next login session
                    </Text>

                    <View style={styles.cardBox} top={verticalScale(15)}>
                        <Text style={styles.cardboxText}>
                            Password
                        </Text>

                        <View style={styles.textInputbox}>
                            <TextInput
                                style={styles.inputField}
                                name="password"
                                placeholder="Enter password"
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={password}
                                enablesReturnKeyAutomatically
                                secureTextEntry={passwordVisibility}
                                onChangeText={text => setPassword(text)}
                            />

                            <Pressable onPress={handlePasswordVisibility}>
                                <MaterialCommunityIcons name={rightIcon} size={25} color="#232323" />
                            </Pressable>
                        </View>
                    </View>

                    <View style={styles.cardBox} top={verticalScale(15)}>
                        <Text style={styles.cardboxText}>
                            New Password
                        </Text>

                        <View style={styles.textInputbox}>
                            <TextInput
                                style={styles.inputField}
                                name="newpassword"
                                placeholder="Enter New Password"
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={newpassword}
                                enablesReturnKeyAutomatically
                                secureTextEntry={passwordVisibility}
                                onChangeText={text => setNewpassword(text)}
                            />

                            <Pressable onPress={handlePasswordVisibility}>
                                <MaterialCommunityIcons name={rightIcon} size={25} color="#232323" />
                            </Pressable>
                        </View>
                    </View>

                    <View style={styles.cardBox} top={verticalScale(15)}>
                        <Text style={styles.cardboxText}>
                            Confirm Password
                        </Text>

                        <View style={styles.textInputbox}>
                            <TextInput
                                style={styles.inputField}
                                name="confirmpassword"
                                placeholder="Confirm Password"
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={confirmpassword}
                                enablesReturnKeyAutomatically
                                secureTextEntry={passwordVisibility}
                                onChangeText={text => setConfirmpassword(text)}
                            />

                            <Pressable onPress={handlePasswordVisibility}>
                                <MaterialCommunityIcons name={rightIcon} size={25} color="#232323" />
                            </Pressable>
                        </View>
                    </View>

                    <TouchableOpacity>
                      <View style={styles.btn} backgroundColor={COLOURS.white}>
                        <Text style={styles.backtext}>
                          BACK
                        </Text>
                      </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity>
                      <View style={styles.btn} backgroundColor={COLOURS.primary}>
                        <Text style={styles.savetext}>
                          SAVE
                        </Text>
                      </View>
                    </TouchableOpacity>
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
    backgroundColor:COLOURS.primary,
  },
  header:{
    width:horizontalScale(375),
    height:verticalScale(210),
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row"
  },
  headerbox:{
    top:verticalScale(18),
    width:horizontalScale(300),
    justifyContent:"space-around",
    alignItems:"center",
    flexDirection:"row",
  },
  headtext:{
    fontWeight:"900",
    fontSize:moderateScale(30),
    color:COLOURS.white,
  },
  body:{
    width:horizontalScale(375),
    height:verticalScale(645),
    borderTopStartRadius:verticalScale(24),
    borderTopEndRadius:verticalScale(24),
    overflow:"hidden",
    alignItems:"center",
    justifyContent:"flex-start",
    backgroundColor:COLOURS.white
  },
  bodybox:{
    alignItems:"center",
    top:verticalScale(32),
    width:horizontalScale(290),
  },
  bodytext:{
    fontWeight:"700",
    fontSize:moderateScale(22),
    textAlign:"center"
  },
  cardBox:{
    marginVertical:verticalScale(10),
    width:horizontalScale(275),
    height:verticalScale(90),
    paddingHorizontal:horizontalScale(14),
    paddingTop:verticalScale(8),
    borderRadius:moderateScale(14),
    borderWidth:3,
    borderColor:COLOURS.primary,
  },
  cardboxText:{
    fontWeight:"700",
    fontSize:moderateScale(18),
  },
  textInputbox:{
    justifyContent:"space-between",
    flexDirection:"row",
    height:verticalScale(45),
  },
  inputField:{
    fontSize:moderateScale(18),
    flex:1,
    paddingRight:horizontalScale(8),
  },
  btn:{
    top:verticalScale(20),
    margin:moderateScale(10),
    justifyContent:"center",
    alignItems:"center",
    width:horizontalScale(160),
    height:verticalScale(48),
    borderRadius:moderateScale(12),
    borderWidth:5,
    borderColor:COLOURS.primary,
  },
  backtext:{
    fontWeight:"bold",
    color:COLOURS.black,
  },
  savetext:{
    fontWeight:"bold",
    color:COLOURS.white,
  },
});

export default ChangePassword;