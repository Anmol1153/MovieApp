import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { heightPercentageToDP } from "react-native-responsive-screen";
const splashStyle = StyleSheet.create({
  mainview: {
    width: widthPercentageToDP("100%"),
    height: heightPercentageToDP("100%"),
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white",
  },

  backgroundimage: {
    width: "50%",
    height: "45%",
    alignSelf: "center",
    
  },
});
export default splashStyle;
