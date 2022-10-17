import { useEffect } from "react";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import {
    FlatList,
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from "react-native";

  
  export default function Secondscreen() {
//     useEffect(async()=>{
//       const newCameraPermission = await Camera.requestCameraPermission()
// const newMicrophonePermission = await Camera.requestMicrophonePermission()

// console.log("newCameraPermission--",newCameraPermission,"---newMicrophonePermission---",newMicrophonePermission);
//     },[])
    return (
      <View style={{marginTop: 30}}>
                <Text style={{textAlign:'center'}}>Secondscreen</Text>
<TouchableOpacity onPress={()=>{

}}>
  <Text style={{backgroundColor: 'red',width:50,alignSelf:'center'}}>
    Camera
  </Text>
</TouchableOpacity>
      </View>
    );
  }
  
 