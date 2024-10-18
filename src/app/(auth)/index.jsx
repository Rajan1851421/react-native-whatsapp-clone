import imagePath from "@/src/constants/imagePath";
import { Link, router, Stack } from "expo-router";
import React, { useEffect, useState } from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate_to_welcome=()=>{
    router.push("/(auth)/terms_agree")
    }

    useEffect(() => {
      const timeout = setTimeout(() => { 
        setIsLoading(true); 
      }, 2000);
    
      const navigate_time = setTimeout(() => { 
        navigate_to_welcome(); 
      }, 3000);
    
      return () => {
        clearTimeout(timeout);
        clearTimeout(navigate_time);
      };
    }, []);
    

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hedaer}></View>
      <View style={styles.body}>
        <Image
          source={imagePath.logo}
          style={styles.logo_style}
          resizeMode="contain"
        />
        <Text style={styles.whatsapp_text}>Whatsapp</Text>
      </View>
      <View style={styles.footer}>
        {isLoading ? (
          <>
            <ActivityIndicator size={moderateScale(48)} color={"#0CCC83"} />
            <Text style={styles.Loading_text} >Loading....</Text>
          </>
        ) : (
          <>
            <Text style={styles.from_text}>From</Text>
            <Text style={styles.from_facebook}>Facebook</Text>
          </>
        )}
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
    paddingVertical: verticalScale(50),
  },
  hedaer: {},
  body: {
    alignItems: "center",
    gap: verticalScale(10),
  },
  logo_style: {
    height: moderateScale(70),
    width: moderateScale(70),
    borderRadius: moderateScale(10),
  },

  footer: {
    alignItems: "center",
    height: verticalScale(60),
    marginBottom:verticalScale(70),
  },
  from_text: {
    fontSize: moderateScale(12),
    color: "#867373",
  },
  from_facebook: {
    fontSize: 15,
    color: "black",
  },
  whatsapp_text: {
    fontSize: moderateScale(35),
    fontWeight: "bold",
    color: "black",
  },

  loginBtn: {
    backgroundColor: "#116A07",
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: "white",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: 10,
    fontWeight: "bold",
  },
  Loading_text:{
    
    fontSize:moderateScale(24),
    fontWeight:'semibold',
    color:'#00A884',
    marginTop:verticalScale(10)

  }
});

export default Auth;
