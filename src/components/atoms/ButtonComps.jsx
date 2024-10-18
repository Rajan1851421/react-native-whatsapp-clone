import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const ButtonComps = ({ title,onPress }) => {
  return (
    <TouchableOpacity style={styles.button_container} activeOpacity={0.8} onPress={onPress} >
      <Text style={styles.btn_text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button_container: {
    backgroundColor: "#00A884",
    width: "60%",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(10),
    borderRadius: moderateScale(5),
    alignItems: "center",
  },
  btn_text: {
    color: "white",
    fontSize: moderateScale(15),
    textAlign: "center",
  },
});

export default ButtonComps;
