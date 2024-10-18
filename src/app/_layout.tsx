import { Redirect, Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
const RootNavigation = () => {
  const [login, setIslogin] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  });
  return (
    <>
      <Stack screenOptions={{headerShown:false}} />
      {login ? <Redirect href={"/(main)"} /> : <Redirect href={"/(auth)"} />}
    </>
  );
};

const styles = StyleSheet.create({});

export default RootNavigation;
