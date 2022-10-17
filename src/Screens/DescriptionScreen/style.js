import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { heightPercentageToDP } from "react-native-responsive-screen";
const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(100),
  },
  imageView: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(35),
    marginTop: 30,
  },
  imagestyle: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(35),
  },
  innerimageview: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(40),
    backgroundColor: "white",
    marginTop: "53%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: "center",
  },
  movietitle: {
    fontSize: 20,
    fontWeight: "700",
    width: 198,
    marginLeft: 24,
    marginTop: 10,
  },
  titlehorizontalview: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginEnd: 24,
  },
  rating: {
    fontSize: 12,
    color: "grey",
    marginHorizontal: 10,
    fontWeight: "400",
    marginLeft: 24,
  },
  horizontalLength: {
    fontSize: 12,
    fontWeight: "400",
    color: "grey",
    marginHorizontal: 24,
  },
  horizontalvalueLength: {
    fontSize: 12,
    fontWeight: "600",
  },
  Length_language_rating: {
    flexDirection: "row",
    marginLeft: 24,
    marginTop: 15,
    justifyContent: "space-between",
    marginEnd: 100,
  },
  length_language_rating_value: {
    flexDirection: "row",
    marginLeft: 24,
    justifyContent: "space-between",
    marginEnd: 100,
  },
  Description: {
    fontSize: 16,
    fontWeight: "900",
    width: 198,
    marginLeft: 24,
    marginTop: 10,
    color: "midnightblue",
  },
  Entypo: {
    margin: 35,
  },
  Ionicons: {
    margin: 35,
  },
  view2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default Style;
