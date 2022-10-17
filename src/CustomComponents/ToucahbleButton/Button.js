import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../Screens/Register/style";
const Button = (props1) => {
  return (
    <TouchableOpacity
      style={[
        styles.Register,
        props1.style,
      ]}
      onPress={props1.onPress}
    >
      <Text
        style={[styles.createAccountText, props1.style,]}
      >
        {props1.children}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
