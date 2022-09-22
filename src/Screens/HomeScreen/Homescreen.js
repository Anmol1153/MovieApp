import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
    ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";
import Buttons from "../../CustomComponents/Button/Button";
import Cards from "../../CustomComponents/Cards/Card";
import Card2 from "../../CustomComponents/Cards/card2";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import axios from "axios";
import images from "../../utils/images";
export default function HomeScreen({navigation}) {
  const [popular, setpopular] = useState([]);
  const [nowshowing, setshowing] = useState([]);
  const [loading, setLoading] = useState(true)
 
  useEffect(() => {
    nowshowingdata();
    populardata();
  }, []);

  const nowshowingdata = () => {
    setLoading(true)
    //now showing
    axios
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=e61836b0a8e595e918746bf7c5b69b1e&language=en-US&page=1"
      )
      .then((res) => {
        setshowing(res.data.results);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setLoading(false)

      });
  };
  const populardata = () => {
    setLoading(true)
    //popular
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=e61836b0a8e595e918746bf7c5b69b1e&language=en-US&page=1"
      )
      .then((res) => {
        setpopular(res.data.results);
        setLoading(false)

      })
      .catch((err) => {
        console.log(err);
        setLoading(false)

      });
  };
  
  return (
    <View style={styles.container}>
       {loading ? <ActivityIndicator size={70} style={{ alignSelf: 'center', zIndex: 1, position: 'absolute', 
    }} /> : null}
     
        <View style={styles.Horizontalview}>
          <TouchableOpacity>
          <Image
              source={require("/home/anmol/ReactNativeProjects/MovieApp/src/images/Menu.png")}
              style={{ width: 22, height: 22 }}
            />         
             </TouchableOpacity>
          <Text style={styles.filmku}>FilmKu</Text>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('Notification')
          }}>
            <Image
              source={require("/home/anmol/ReactNativeProjects/MovieApp/src/images/Icon.png")}
              style={{ width: 22, height: 22 }}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
        <View style={styles.Horizontalview}>
          <Text style={styles.nowshowing}>Now Showing</Text>
          <Buttons
            buttonTitle="See more"
            //  onPress={()=>{
            //   alert('ghghg')
            //  }}
          />
        </View>
        <View style={{ height: hp(38) }}>
          <FlatList
            horizontal
            data={nowshowing}
            renderItem={({ item, index }) => {
              return (
                <View>
                    <TouchableOpacity onPress={()=>{
                        navigation.navigate('Descriptionscreen', {index: index , screens: 'nowshowing'})
                      
                    }}>
                         <Cards
                    imageuri={{
                      uri:
                        "https://www.themoviedb.org/t/p/w500" +
                        item.poster_path,
                 
                    }}
                    resize="contain"
                  />
                    </TouchableOpacity>
                 
                  <Text style={styles.moviename}>{item.original_title}</Text>
                  <Text style={styles.rating}>
                    <AntDesign name="star" size={12} color="gold" />
                      {item.vote_average}/10 IMDb
                  </Text>
                </View>
              );
            }}
          />
        </View>
       
        <View style={styles.Horizontalview}>
          <Text style={styles.nowshowing}>Popular</Text>
          <Buttons
            buttonTitle="See more"
            //  onPress={()=>{
            //   alert('ghghg')
            //  }}
          />
        </View>

        <FlatList
        style={styles.popularFlatlist}
          data={popular}
          renderItem={({ item, index }) => {
            return (
              <View>
                  <TouchableOpacity onPress={()=>{
                        navigation.navigate('Descriptionscreen', {index: index , screens: 'popular'})
                      
                    }}>

                    
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Card2
                    imageuri={{
                      uri:
                        "https://www.themoviedb.org/t/p/w500" +
                        item.poster_path,
                    }}
                    resize="contain"
                  />
                
                
                  <View>
                  <Text style={styles.card2moviename}>
                    {item.original_title}
                  </Text>
                  <Text style={styles.ratingpopular}>
                    <AntDesign name="star" size={12} color="gold" />
                    {item.vote_average}/10 IMDb
                  </Text> 
                  <Text style={styles.ratingpopular}>Release Date: {item.release_date}</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: wp(100),
    height: hp(100),
    marginTop: 30,
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
    width: wp(40),
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
    width: wp(55),
    color: "black",
  },
  card2rating: {
    fontSize: 14,
    color: "grey",
    marginHorizontal: 10,
  },
  popularFlatlist:{
    marginBottom: 30,
    
  }
});
