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
import {DrawerContentScrollView,
DrawerItem} from '@react-navigation/drawer'
  
  export default function drawerContent(props) {
    return (
        <Text style={{textAlign:'center'}}>Secondscreen</Text>
    );
  }
  
 