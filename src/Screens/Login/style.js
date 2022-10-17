import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { heightPercentageToDP } from "react-native-responsive-screen";
const styles=StyleSheet.create({
    mainview: {
        alignSelf: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems:'center',
        padding: 20,
        width: widthPercentageToDP('100%'),
        height: heightPercentageToDP('100%'),
        borderColor: 'black',
      },
      emailfieldview: {
        flexDirection: "row",
        width: widthPercentageToDP("85%"),
        borderWidth: 1,
        borderColor: "lightgrey",
        margin: 10,
        marginTop:20,
        borderRadius: 5,
      },
      Textinput: {
        width: widthPercentageToDP("100%"),
        height: heightPercentageToDP(6),
      },
      Loginlogo: {
        width: widthPercentageToDP("40%"),
        height: heightPercentageToDP("13%"),
        alignSelf: "center",
      },
      icon: {
        height: 20,
        alignSelf: "center",
      },
      Login: {
        width: widthPercentageToDP("85%"),
        margin: 10,
        borderRadius: 5,
        padding: 10,
        backgroundColor: "darkorange",
        textAlign:'center'
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
        marginVertical: 35,
      },
      createaccount: {
        fontWeight: "400",
        color: "orange",
        textDecorationLine: "underline",
      },
      loginText:{
        textAlign: "center",
         fontWeight: "600",
          color: "white"
      },
      touchableImage:{
        width: 5,
        alignSelf: "center",
        backgroundColor: "white",
        height: 30,
        justifyContent: "center",
        marginHorizontal: 25,
      },
      forgotPassword: {
        fontWeight: "400",
        color: "orange",
        textDecorationLine: "underline",
        marginRight: 10,
        alignSelf:'flex-end'
      },
})
export default styles;