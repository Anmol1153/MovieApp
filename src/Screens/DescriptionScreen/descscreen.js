import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addfavourites,
  removebookmark,
} from "../../Redux/favoriteMovies/FavouriteSlices";
import Style from "./style";
import images from "../../utils/images";
export default function Descscreen({ navigation }) {
  const [nowshowing, setshowing] = useState([]);
  const route = useRoute();
  const favouriteStore = useSelector((state) => state.favourite);
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
    <View style={Style.container}>
      <ImageBackground
        source={{
          uri: "https://www.themoviedb.org/t/p/w500" + nowshowing.poster_path,
        }}
        resizeMode="stretch"
        style={Style.imagestyle}
      >
        <View style={Style.view2}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Ionicons
              name="arrow-back"
              size={20}
              color="white"
              style={Style.Ionicons}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo
              name="dots-three-horizontal"
              size={20}
              color="white"
              style={Style.Entypo}
            />
          </TouchableOpacity>
        </View>
        <View style={Style.innerimageview}>
          <View style={Style.titlehorizontalview}>
            <Text style={Style.movietitle}>{nowshowing.original_title}</Text>
            <TouchableOpacity onPress={() => AddToFavourites()}>
              <Image
                source={images.BookMark}
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
          <Text style={Style.rating}>
            <Ionicons name="star" size={12} color="gold" />
            {nowshowing.vote_average}/10 IMDb
          </Text>
          <View style={Style.Length_language_rating}>
            <Text style={Style.horizontalLength}>Length</Text>
            <Text style={Style.horizontalLength}>Language</Text>
            <Text style={Style.horizontalLength}>Rating</Text>
          </View>
          <View style={Style.length_language_rating_value}>
            <Text style={Style.horizontalvalueLength}> 2hrs15min</Text>
            <Text style={Style.horizontalvalueLength}>
              {nowshowing.original_language}
            </Text>
            <Text style={Style.horizontalvalueLength}>
              {nowshowing.vote_average}
            </Text>
          </View>
          <Text style={Style.Description}>Description</Text>
          <Text style={Style.horizontalLength}>{nowshowing.overview}.</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
