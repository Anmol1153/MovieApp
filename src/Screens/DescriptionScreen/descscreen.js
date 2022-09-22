import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Buttons from "../../CustomComponents/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addfavourites,
  removebookmark,
} from "../../Redux/favoriteMovies/FavouriteSlices";
export default function Descscreen({ navigation }) {
  const [nowshowing, setshowing] = useState([]);

  const [color, setcolor] = useState("");

  const route = useRoute();
  const favouriteStore = useSelector((state) => state.favourite);
  //   console.log('===store==',favouriteStore)

  const dispatch = useDispatch();
  useEffect(() => {
    if (route?.params?.screens == "popular") {
      populardata();
    } else {
      nowplaying();
    }
  }, []);

  const c = favouriteStore.findIndex(
    (data) => data.title === nowshowing.original_title
  );

  const nowplaying = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=e61836b0a8e595e918746bf7c5b69b1e&language=en-US&page=1"
      )
      .then((res) => {
        setshowing(res.data.results[route?.params?.index]);
        // console.log(nowshowing);
        console.log(nowshowing.original_title);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const populardata = () => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=e61836b0a8e595e918746bf7c5b69b1e&language=en-US&page=1"
      )
      .then((res) => {
        setshowing(res.data.results[route?.params?.index]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const AddToFavourites = () => {
    if (c == -1) {
      dispatch(
        addfavourites({
          title: nowshowing.original_title,
          poster_path: nowshowing.poster_path,
          Rating: nowshowing.vote_average,
        })
      );
    } else {
      const index = favouriteStore.findIndex(
        (x) => x.title === nowshowing.original_title
      );
      console.log(index);
      dispatch(removebookmark(index));
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://www.themoviedb.org/t/p/w500" + nowshowing.poster_path,
        }}
        resizeMode="stretch"
        style={styles.imagestyle}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Ionicons
              name="arrow-back"
              size={20}
              color="white"
              style={{ margin: 35 }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo
              name="dots-three-horizontal"
              size={20}
              color="white"
              style={{ margin: 35 }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.innerimageview}>
          <View style={styles.titlehorizontalview}>
            <Text style={styles.movietitle}>{nowshowing.original_title}</Text>
            <TouchableOpacity onPress={() => AddToFavourites()}>
              <Image
                source={require("/home/anmol/ReactNativeProjects/MovieApp/src/images/third.png")}
                resizeMode={"cover"}
                style={{
                  width: 19,
                  height: 25,
                  tintColor: c == -1 ? "black" : "red",
                  marginTop: 10,
                }}
              ></Image>
            </TouchableOpacity>
          </View>
          <Text style={styles.rating}>
            <Ionicons name="star" size={12} color="gold" />
            {nowshowing.vote_average}/10 IMDb
          </Text>
          <View style={styles.Length_language_rating}>
            <Text style={styles.horizontalLength}>Length</Text>
            <Text style={styles.horizontalLength}>Language</Text>
            <Text style={styles.horizontalLength}>Rating</Text>
          </View>
          <View style={styles.length_language_rating_value}>
            <Text style={styles.horizontalvalueLength}></Text>
            <Text style={styles.horizontalvalueLength}>
              {nowshowing.original_language}
            </Text>
            <Text style={styles.horizontalvalueLength}>
              {nowshowing.vote_average}
            </Text>
          </View>
          <Text style={styles.Description}>Description</Text>
          <Text style={styles.horizontalLength}>{nowshowing.overview}.</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: wp(100),
    height: hp(100),
  },
  imageView: {
    width: wp(100),
    height: hp(35),
    marginTop: 30,
  },
  imagestyle: {
    width: wp(100),
    height: hp(35),
  },
  innerimageview: {
    width: wp(100),
    height: hp(40),
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
});
