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
import { Ionicons } from "@expo/vector-icons";

  
  export default function notification({navigation}) {
    return (
        <View style={()=>{styles.container}}>
<Text style={styles.title}>Notifications</Text>
<TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Ionicons
              name="arrow-back"
              size={20}
              color="black"
              style={{ margin: 20 }}
            />
          </TouchableOpacity>
        </View>
        
    );
  }
  const styles = StyleSheet.create({
    container: {
      margin: 12,
      height: "100%",
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      margin: 5,
      alignSelf: "center",
      marginTop: 30
    },
})
 