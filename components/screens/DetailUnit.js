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

function DetailUnit({ navigation }) {
  return (
    <View style={styles.container}>
        <TopBar navigation={navigation} title="Detail Unit" rightButtonData={['edit', navigation.goBack]} />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
    }
});

export default DetailUnit;