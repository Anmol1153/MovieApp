import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-paper';

export default function Card2(props) {
  return (
  <View >
      <Card style={styles.cardstyle} >
<Image source={props.imageuri} style={styles.image} resizeMode={props.resize}></Image>
     </Card>
  </View>
   
     
   
  )
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: 'white',
    
    width: wp(100),
    height: hp(100)
    
  },
  cardstyle:{
    width: 85,
    height: 128,
marginVertical:20,
marginHorizontal:10,
borderRadius: 20,
marginLeft: 24
    
  },
  image:{
width: wp(30),
height: hp(20),
borderRadius:12,

  }
});
