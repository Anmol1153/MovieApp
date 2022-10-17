import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  ActivityIndicator,
  AsyncStorage,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import Cards from "../../CustomComponents/Cards/Card";
import Card2 from "../../CustomComponents/Cards/card2";
import { useEffect, useState } from "react";
import axios from "axios";
import images from "../../utils/images";
import Style from "./style";
export default function HomeScreen({ navigation }) {
  const [popular, setpopular] = useState([]);
  const [nowshowing, setshowing] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    nowshowingdata();
    populardata();
  }, []);

  const nowshowingdata = () => {
    setLoading(true);
    //now showing
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=e61836b0a8e595e918746bf7c5b69b1e&language=en-US&page=1"
      )
      .then((res) => {
        setshowing(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const populardata = () => {
    setLoading(true);
    //popular
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=e61836b0a8e595e918746bf7c5b69b1e&language=en-US&page=1"
      )
      .then((res) => {
        setpopular(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <View style={Style.container}>
      {loading ? (
        <ActivityIndicator size={70} style={Style.ActivityIndicator} />
      ) : null}

      <View style={Style.Horizontalview}>
        <TouchableOpacity
          onPress={() => {
            //  drawerNavigator()
          }}
        >
          <Image source={images.Menu} style={Style.MenuImage} />
        </TouchableOpacity>
        <Text style={Style.filmku}>FilmKu</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Notification");
          }}
        >
          <Image source={images.icons} style={Style.NotificationImage} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={Style.Horizontalview}>
          <Text style={Style.nowshowing}>Now Showing</Text>
          <View style={Style.nowshowingView1}>
            <Text style={Style.SeeMoreText}>See more</Text>
          </View>
        </View>
        <View style={Style.nowShowingFlatlist}>
          <FlatList
            horizontal
            data={nowshowing}
            renderItem={({ item, index }) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("Descriptionscreen", {
                        index: index,
                        screens: "nowshowing",
                      });
                    }}
                  >
                    <Cards
                      imageuri={{
                        uri:
                          "https://www.themoviedb.org/t/p/w500" +
                          item.poster_path,
                      }}
                      resize="contain"
                    />
                  </TouchableOpacity>

                  <Text style={Style.moviename}>{item.original_title}</Text>
                  <Text style={Style.rating}>
                    <AntDesign name="star" size={12} color="gold" />
                    {item.vote_average}/10 IMDb
                  </Text>
                </View>
              );
            }}
          />
        </View>

        <View style={Style.Horizontalview}>
          <Text style={Style.nowshowing}>Popular</Text>
          <TouchableOpacity
            onPress={() => {
              AsyncStorage.clear();
            }}
          >
            <View style={Style.SeeMoreView}>
              <Text style={Style.SeeMoreText}>See more</Text>
            </View>
          </TouchableOpacity>
        </View>

        <FlatList
          style={Style.popularFlatlist}
          data={popular}
          renderItem={({ item, index }) => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Descriptionscreen", {
                      index: index,
                      screens: "popular",
                    });
                  }}
                >
                  <View style={Style.PopularrowView}>
                    <Card2
                      imageuri={{
                        uri:
                          "https://www.themoviedb.org/t/p/w500" +
                          item.poster_path,
                      }}
                      resize="contain"
                    />

                    <View>
                      <Text style={Style.card2moviename}>
                        {item.original_title}
                      </Text>
                      <Text style={Style.ratingpopular}>
                        <AntDesign name="star" size={12} color="gold" />
                        {item.vote_average}/10 IMDb
                      </Text>
                      <Text style={Style.ratingpopular}>
                        Release Date: {item.release_date}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
}
