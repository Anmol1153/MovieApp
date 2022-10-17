import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StatusBar,
  Image,
  AsyncStorage,
  Alert,
} from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import splashStyle from "./styles";

const splashScreen = ({ navigation }) => {
  useEffect(() => {
    run();
  }, []);
  const run = async () => {
    try {
      const value = await AsyncStorage.getItem("TokenID");
      if (value === null) {
        setTimeout(() => {
          navigation.dispatch(StackActions.replace("login"));
        }, 2000);
        // console.log('==if=='+value)
      } else {
        // console.log('==else=='+value)
        setTimeout(() => {
          navigation.dispatch(StackActions.replace("Home"));
        }, 1000);
      }
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  return (
    <View style={splashStyle.mainview}>
      <View>
        <StatusBar backgroundColor="white" />
        <Image
          style={splashStyle.backgroundimage}
          source={require("/home/anmol/ReactNativeProjects/MovieApp/src/images/movie.png")}
        ></Image>
      </View>
    </View>
  );
};

export default splashScreen;
