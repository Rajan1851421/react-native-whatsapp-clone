import ButtonComps from "@/src/components/atoms/ButtonComps";
import imagePath from "@/src/constants/imagePath";
import { router } from "expo-router";
import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const TermsAgree = () => {
  const onAgree = () => {
    router.push("/(auth)/login")
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome_text}>Welcome to WhatsApp</Text>
        <Image
          source={imagePath.welcome_image}
          resizeMode="contain"
          style={styles.welcome_image}
        />
        <View style={styles.btn_container}>
          <Text style={styles.discription_text}>
            Read our <Text style={styles.link_text}>Privacy Policy</Text> . Tap
            "Agree and Continue" to accept the
            <Text style={styles.link_text}>Terms of Service</Text>
          </Text>
          <ButtonComps title="AGREE AND CONITNUE" onPress={onAgree} />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.from_text}>From</Text>
        <Text style={styles.from_facebook}>Facebook</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: verticalScale(84),
    paddingBottom: verticalScale(84),
  },
  header: {
    // Center the header content
    justifyContent: "center",
    alignItems: "center",
    gap: verticalScale(20),
  },
  welcome_text: {
    fontSize: moderateScale(30),
    fontWeight: "bold",
    color: "black",
    paddingHorizontal: moderateScale(15),
  },
  welcome_image: {
    height: moderateScale(250),
    width: moderateScale(250),
    borderRadius: moderateScale(250),
  },
  btn_container: {
    justifyContent: "center",
    alignItems: "center",
    gap: verticalScale(15),
  },
  discription_text: {
    textAlign: "center",
    paddingHorizontal: verticalScale(10),
    fontSize: moderateScale(13),
    color: "black",
  },
  link_text: {
    color: "#0963B2",
    fontWeight: "semibold",
  },
  footer: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  from_text: {
    fontSize: moderateScale(12),
    color: "#867373",
  },
  from_facebook: {
    fontSize: moderateScale(15), // Adjusted to use scale for consistency
    color: "black",
    textTransform: "uppercase",
    fontWeight: "600",
  },
});

export default TermsAgree;
