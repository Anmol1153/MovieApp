import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { heightPercentageToDP } from "react-native-responsive-screen";
const styles = StyleSheet.create({
  mainview: {
    backgroundColor: "white",
    padding: 20,
    justifyContent:'center',
    
    width: widthPercentageToDP("100"),
    height: heightPercentageToDP("100"),
    borderColor: "black",
    alignItems: "center",
  },
  emailfieldview: {
    flexDirection: "row",
    width: widthPercentageToDP("85"),
    borderWidth: 1,
    borderColor: "lightgrey",
    margin: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  Textinput: {
    width: widthPercentageToDP("100"),
    height: heightPercentageToDP(6),
    padding:5
  },
  Loginlogo: {
    
    width: widthPercentageToDP("40"),
    height: heightPercentageToDP("13"),
    alignSelf: "center",
  },
  icon: {
    height: 20,
    alignSelf: "center",
  },
  Register: {
    width: widthPercentageToDP("85%"),
    margin: 10,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "darkorange",
  },
  text: {
    fontSize: 12,
    alignSelf: "center",
    marginVertical: 15,
  },
  view2: {
    flexDirection: "row",
    justifyContent: "center",
  },
  googleimage: {
    width: widthPercentageToDP("10%"),
    height: heightPercentageToDP("5%"),
    alignSelf: "center",
  },
  view3: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: heightPercentageToDP("10%"),
  },
  Login: {
    fontWeight: "400",
    color: "orange",
    textDecorationLine: "underline",
  },
  createAccountText: {
    textAlign: "center",
    fontWeight: "600",
    color: "white",
  },
  LastHorizontalview: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: "20%",
  },
  errors: {
    fontSize: 14,
    color: "red",
    fontWeight: "bold",
    marginHorizontal: 10,
    marginBottom: 20,
  },
  envelopeimg:{
    width: 22,
     height: 22,
     alignSelf:'center', 
     marginHorizontal: 20
  }
});
export default styles;
