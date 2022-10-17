import React, { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen/Homescreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Secondscreen from "./src/Screens/Secondscreen/secondBottom";
import Descscreen from "./src/Screens/DescriptionScreen/descscreen";
import store from "./src/Redux/favoriteMovies/FavouriteStore";
import { Provider } from "react-redux";
import login from "./src/Screens/Login/login";
import { Image } from "react-native";

import Register from "./src/Screens/Register/register";
import {firebase} from './config'
import splashScreen from "./src/Screens/Splash/splashScreen";
import BookMark from "./src/Screens/BookMark/thirdscreen";

const Tab = createBottomTabNavigator();


function Bottomtab() {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 45 },
        tabBarHideOnKeyboard: "true",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("/home/anmol/ReactNativeProjects/MovieApp/src/images/reel.png")}
              resizeMode={"contain"}
              style={{ width: 21.5, height: 25, tintColor: "blue" }}
            ></Image>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Ticket"
        component={Secondscreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("/home/anmol/ReactNativeProjects/MovieApp/src/images/second.png")}
              resizeMode={"contain"}
              style={{ width: 21.5, height: 25 }}
            ></Image>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Bookmark"
        component={BookMark}
        options={{
          tabBarIcon: () => (
            <Image
              source={require("/home/anmol/ReactNativeProjects/MovieApp/src/images/third.png")}
              resizeMode={"contain"}
              style={{ width: 21.5, height: 25 }}
            ></Image>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

 const Stack = createStackNavigator();
function App() {
 const [initializing, setInitializing]=useState(true)
 const [user, setUser]=useState()
  
 function onAuthStateChanged(user){
  setUser(user)
  if(initializing)
  setInitializing(false)
 }
 useEffect(() => {
  const subscriber=firebase.auth().onAuthStateChanged(onAuthStateChanged)
  return subscriber
}, []);
if(initializing) return null

if(!user){
  return (
    <Provider store={store}>
      <NavigationContainer>
        
        <Stack.Navigator>
        <Stack.Screen
            name="Splash"
            component={splashScreen}
            options={{ title: "welcome", headerShown: false }}
          />
        <Stack.Screen
            name="login"
            component={login}
            options={{ title: "welcome", headerShown: false }}
          />
        <Stack.Screen
            name="register"
            component={Register}
            options={{ title: "Register Yourself", headerShown: false }}
          />
          <Stack.Screen
          name="Home"
          component={Bottomtab}
          options={{ title: "welcome", headerShown: false }}
        />
       <Stack.Screen
            name="Descriptionscreen"
            component={Descscreen}
            options={{ title: "welcome", headerShown: false }}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );

}


return (
  <Provider store={store}>
    <NavigationContainer>
      
      <Stack.Navigator>
  
      <Stack.Screen
          name="Home"
          component={Bottomtab}
          options={{ title: "welcome", headerShown: false }}
        />
       <Stack.Screen
            name="Descriptionscreen"
            component={Descscreen}
            options={{ title: "welcome", headerShown: false }}
          />
         
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);


}
export default App;
