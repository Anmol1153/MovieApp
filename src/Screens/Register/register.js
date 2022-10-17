import React, { useEffect, useState } from "react";
import {
  Alert,
  AsyncStorage,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import * as yup from "yup";
import { Formik } from "formik";
import { firebase } from "/home/anmol/ReactNativeProjects/MovieApp/config";
import styles from "./style";
import Inputs from "../../CustomComponents/inputFields/Inputs";
import Button from "../../CustomComponents/ToucahbleButton/Button";
import Images from "../../utils/images";
const registerValidationSchema = yup.object().shape({
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

const Register = ({ addReview, navigation }) => {
 
  const registerUser = async (email, password, validemail, validPassword) => {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        // console.log("User ID :- ", data.user.uid);

        try {
          AsyncStorage.setItem("TokenID", data.user.uid);
        } catch (e) {
          alert(e.message);
        }
      })
      .catch((error) => {
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
      });
  };

  return (
    //container start
    <Formik
      initialValues={{ email: "", password: "" }}
      validateOnMount={true}
      onSubmit={(values, actions) => {
        actions.resetForm();
        addReview(values);
      }}
      validationSchema={registerValidationSchema}
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
            <Image
              source={Images.register}
              style={styles.Loginlogo}
              resizeMode="contain"
            ></Image>

            <Text style={styles.errors}>{errors.username}</Text>
            <View style={styles.emailfieldview}>
              <Image
                source={Images.envelope}
                style={styles.envelopeimg}
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

            <Text style={styles.errors}>{touched.email && errors.email}</Text>

            <View style={styles.emailfieldview}>
              <Image
                source={Images.password}
                style={styles.envelopeimg}
              />
              <Inputs
                placeholder="Enter Password"
                value={values.password}
                placeholderTextColor="lightgrey"
                onchangeText={handleChange("password")}
                onBlur={handleBlur("password")}
              />
            </View>

            <Text style={styles.errors}>
              {touched.password && errors.password}
            </Text>

            <Button
              onPress={() => {
                handleSubmit();
                registerUser(
                  values.email,
                  values.password,
                  errors.email,
                  errors.password
                );
              }}
            >
              Create Account
            </Button>

            <Text style={styles.text}></Text>

            <View style={styles.LastHorizontalview}>
              <Text>Already a Account?</Text>
             
                <Text onPress={() => {
                  navigation.navigate("login");
                }} style={styles.Login}>Log in</Text>
             
            </View>
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

export default Register;
