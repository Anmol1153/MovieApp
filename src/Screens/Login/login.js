import React, { useEffect, useState } from "react";
import {
  Alert,
  AsyncStorage,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as yup from "yup";
import { Formik } from "formik";
import styles1 from "../Register/style";
import "expo-dev-client";
import { firebase } from "/home/anmol/ReactNativeProjects/MovieApp/config";
import Button from "../../CustomComponents/ToucahbleButton/Button";
import styles from "./style";
import Inputs from "../../CustomComponents/inputFields/Inputs";
import images from "../../utils/images";
const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});

const login = ({ addReview, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [storedId, setstoredId] = useState("");

  useEffect(() => {
    storedUserId();
  }, []);

  const storedUserId = async () => {
    try {
      const value = await AsyncStorage.getItem("TokenID");
      if (value !== null) {
        setstoredId(value);
        console.log(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const loginUser = async (email, password) => {
    try {
      if (storedId === "") {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then((data) => {
            try {
              AsyncStorage.setItem("TokenID", data.user.uid);
            } catch (e) {
              alert(e.message);
            }
          });
      } else {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        alert("already in async");
      }
    } catch (error) {
      ToastAndroid.show("Invalid Email/Password", ToastAndroid.SHORT);
    }
  };

  const forgotPassword = async () => {
    await firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("password reset email sent");
        setModalVisible(!modalVisible);
      })
      .catch((error) => {
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
      });
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validateOnMount={true}
      onSubmit={(values, actions) => {
        actions.resetForm();
        addReview(values);
      }}
      validationSchema={loginValidationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <ScrollView>
          <View style={styles.mainview}>
            <Modal
              animationType="slide"
              transparent={false}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  marginLeft: "5%",
                }}
              >
                <View style={styles.emailfieldview}>
                  <Image
                    source={images.envelope}
                    style={styles1.envelopeimg}
                  />
                  <Inputs
                    placeholder="Enter Email"
                    value={email}
                    placeholderTextColor="lightgrey"
                    onchangeText={(text) => {
                      setEmail(text);
                    }}
                  />
                </View>
                <Button
                  onPress={() => {
                    forgotPassword();
                  }}
                >
                  Reset Password
                </Button>
                <Button
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                >
                  Cancel
                </Button>
              </View>
            </Modal>
            <Image
              source={images.loginlogo}
              style={styles.Loginlogo}
              resizeMode="contain"
            ></Image>

            <View style={styles.emailfieldview}>
              <Image
                source={images.envelope}
                style={styles1.envelopeimg}
              />
              <Inputs
                placeholder="Enter Email"
                value={values.email}
                placeholderTextColor="lightgrey"
                keyboardType="email-address"
                onchangeText={handleChange("email")}
                onBlur={handleBlur("email")}
              />
            </View>

            <Text style={styles1.errors}>{touched.email && errors.email}</Text>
            <View style={styles.emailfieldview}>
              <Image
                source={images.password}
                style={styles1.envelopeimg}
              />
              <Inputs
                placeholder="Enter Password"
                value={values.password}
                placeholderTextColor="lightgrey"
                onchangeText={handleChange("password")}
                onBlur={handleBlur("password")}
              />
            </View>

            <Text style={styles1.errors}>
              {touched.password && errors.password}
            </Text>
            <Text
              onPress={() => {
                setModalVisible(true);
              }}
              style={styles.forgotPassword}
            >
              Forgot Password
            </Text>
            <Button
              onPress={() => {
                handleSubmit();
                loginUser(values.email, values.password);
              }}
            >
              Login
            </Button>

            <Text style={styles.text}>Or Login With</Text>
            <View style={styles.view2}></View>
            <View style={styles.view3}>
              <Text>No Account?</Text>

              <Text
                onPress={() => {
                  navigation.navigate("register");
                }}
                style={styles.createaccount}
              >
                Create Account
              </Text>
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

export default login;
