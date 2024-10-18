import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

const Layout = () => {
  return (
    <Stack screenOptions={{headerShown:false}} >
      <Stack.Screen name="index" />
      <Stack.Screen name="terms_agree" />
      <Stack.Screen name="login" />
      <Stack.Screen name="verify_otp" />
    </Stack>
  );
};

const styles = StyleSheet.create({});

export default Layout;
