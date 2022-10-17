import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { heightPercentageToDP } from "react-native-responsive-screen";
const Style=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        width: widthPercentageToDP(100),
        height: heightPercentageToDP(100),
       
        justifyContent:'center'
      },
      filmku: {
        fontSize: 16,
        color: "blue",
        fontWeight: "900",
        fontStyle: "normal",
      },
      Horizontalview: {
        flexDirection: "row",
        marginVertical: 20,
        justifyContent: "space-between",
        marginHorizontal: 24,
      },
      nowshowing: {
        fontSize: 16,
        color: "blue",
        fontWeight: "900",
        fontStyle: "normal",
      },
      moviename: {
        fontSize: 14,
        fontWeight: "700",
        marginHorizontal: 10,
        marginVertical: 12,
        width: widthPercentageToDP(40),
        color: "black",
        marginLeft: 24
       
      },
      rating: {
        fontSize: 12,
        color: "grey",
        marginHorizontal: 10,
        fontWeight: "400",
        marginLeft: 24
      },
      ratingpopular:{
        fontSize: 12,
        color: "grey",
        fontWeight: "400",
      },
      card2moviename: {
        fontSize: 16,
        fontWeight: "500",
    marginTop: 18,
        width: widthPercentageToDP(55),
        color: "black",
      },
      card2rating: {
        fontSize: 14,
        color: "grey",
        marginHorizontal: 10,
      },
      popularFlatlist:{
        marginBottom: 30,
        
      },PopularrowView:{
        flexDirection: "row",
        justifyContent: "space-between",
      },
      nowShowingFlatlist:{
        height: heightPercentageToDP(38)
      },
      nowshowingView1:{
        backgroundColor: "white",
        width: 85,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 12,
        height: 30,
        justifyContent: "center",
      },
      SeeMoreText:{
        fontSize: 10,
        fontWeight: "400",
        color: "lightgrey",
        textAlign: "center",
      },
      ActivityIndicator:{
        alignSelf: "center", 
        zIndex: 1,
         position: "absolute"
      },
      MenuImage:{
        width: 22, 
        height: 22 
      },
      NotificationImage:{
        width: 22,
         height: 22 
      },
      SeeMoreView:{
        backgroundColor: "white",
        width: 85,
        alignSelf: "center",
        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 12,
        height: 30,
        justifyContent: "center",
      }
    
})
export default Style;