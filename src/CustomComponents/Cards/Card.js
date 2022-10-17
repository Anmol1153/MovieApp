import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-paper';

export default function Cards(props) {

  return (
  <View >
    
      <Card style={styles.cardstyle}>
<Image source={props.imageuri} style={styles.image} resizeMode={props.resize}></Image>
     </Card>
     
  </View>
   
     
   
  )
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(100),
    height: hp(100)
    
  },
  cardstyle:{
    width: 143,
    height: 212,
    shadowColor:'black',
elevation: 10,
marginLeft: 24,
backgroundColor:'white',
borderRadius: 20,
marginTop: 0
    
  },
  image:{
width: 143,
height: 212,
borderRadius:12,

  }
});
