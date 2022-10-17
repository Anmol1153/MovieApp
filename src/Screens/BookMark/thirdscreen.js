import { AntDesign } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { useDispatch, useSelector } from "react-redux";
import Card2 from "../../CustomComponents/Cards/card2";
import { removebookmark } from "../../Redux/favoriteMovies/FavouriteSlices";
import images from "../../utils/images";
import Style from "./styles";
export default function BookMark()  {
  const dispatch = useDispatch();

  const favourite = useSelector((state) => state.favourite);

  const renderItem = ({ item, index }) => (
    <View>
     
      
        <View
          style={Style.view2}
        >
          <Card2
            imageuri={{
              uri: "https://www.themoviedb.org/t/p/w500" + item?.path,
            }}
            resize="contain"
          />

          <View>
            <Text style={Style.card2moviename}>{item?.title}</Text>
            <Text style={Style.ratingpopular}>
              <AntDesign name="star" size={12} color="gold" />
              {item?.rating}/10 IMDb
            </Text>
            <TouchableOpacity onPress={() => {dispatch(removebookmark(index)); }}>
              <Image
                source={images.BookMark}
                resizeMode={"cover"}
                style={Style.posterImage}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );

  console.log("===todo list===", favourite);

  return (
    <View style={Style.container}>
      <Text style={Style.title}>Bookmark List</Text>
      <FlatList
        style={Style.FlatlistStyle}
        data={favourite}
        renderItem={renderItem}
        ListHeaderComponent={() =>
          !favourite.length ? (
            <Text style={Style.emptyMessageStyle}>Bookmark is empty</Text>
          ) : null
        }
      />
    </View>
  );
};

