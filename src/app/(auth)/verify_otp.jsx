import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { SafeAreaView, Text, TextInput, View, StyleSheet, Button } from "react-native";
import { moderateScale, scale } from "react-native-size-matters";

const VerifyOtp = () => {
  const [otp, setOtp] = useState(["", "", "", ""]); // To store each digit of the OTP
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]; // Refs for inputs

  // Handle OTP change for each input
  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to the next input if filled
    if (text.length === 1 && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    } else if (text.length === 0 && index > 0) {
      // Move to the previous input if cleared
      inputRefs[index - 1].current.focus();
    }
  };

  // Check if the OTP is complete
  const isOtpComplete = otp.every((digit) => digit.length === 1);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Verify OTP</Text>
      <Text style={{ paddingTop: 10, paddingBottom: 10 }}>
        Use your phone to confirm OTP
      </Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
            ref={inputRefs[index]} // Referencing the inputs
          />
        ))}
      </View>
      <Text style={styles.instruction}>Enter the OTP sent to your phone</Text>
      <View style={styles.buttonContainer}>
        {isOtpComplete && ( // Conditionally render the button
          <Button
            title="Verify OTP"
            onPress={() => router.push("/(main)")}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", // Center everything horizontally
    paddingHorizontal: moderateScale(20),
    backgroundColor: "white",
  },
  title: {
    fontSize: scale(18),
    fontWeight: "bold",
    marginBottom: moderateScale(20),
    marginTop: 50,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  otpInput: {
    width: moderateScale(40),
    height: moderateScale(50),
    borderWidth: 1,
    borderColor: "#09AA82",
    textAlign: "center",
    fontSize: scale(20),
    borderRadius: 10,
  },
  instruction: {
    marginTop: moderateScale(20),
    fontSize: scale(14),
    color: "gray",
  },
  buttonContainer: {
    marginTop: moderateScale(20),
  },
});

export default VerifyOtp;
