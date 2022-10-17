import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { heightPercentageToDP } from "react-native-responsive-screen";
const Style=StyleSheet.create({
    container: {
        margin: 12,
        height: "100%",
        marginTop: 30,
      },
      title: {
        fontSize: 16,
        fontWeight: "bold",
        margin: 5,
        alignSelf: "center",
      },
      todoText: {
        margin: 4,
      },
      todos: {
        fontSize: 13,
        fontWeight: "500",
      },
      delete: {
        fontSize: 16,
        fontWeight: "400",
        marginHorizontal: 5,
        width: 48,
        height: 20,
        backgroundColor: "black",
        color: "white",
        borderRadius: 5,
      },
      renderview: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 5,
        width: "100%",
        backgroundColor: "lightgrey",
      },
      card2moviename: {
        fontSize: 16,
        fontWeight: "500",
        marginTop: 18,
        width: widthPercentageToDP(55),
        color: "black",
      },
      ratingpopular: {
        fontSize: 12,
        color: "grey",
        fontWeight: "400",
      },
      emptyMessageStyle: {
        textAlign: "center",
        marginTop: "90%",
      },
      FlatlistStyle:{
        height: heightPercentageToDP(100) 
      },
      posterImage:{
        width: 19,
                  height: 25,
                  tintColor: 'red' ,
                  marginTop: 10,
                  marginHorizontal: 50
                  
      },view2:{
        flexDirection: "row",
        justifyContent: "space-between",
      }
})
export default Style;