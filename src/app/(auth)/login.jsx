import ButtonComps from "@/src/components/atoms/ButtonComps";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import {AntDesign} from "@expo/vector-icons"

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading_container}>
          <Text style={styles.phone_number}>Enter Your phone number</Text>
          <Text style={styles.description}>
            WhatsApp will need to verify your phone number.
            <Text style={styles.link_description}>{" "}What's my number?</Text>
          </Text>
        </View>
        <View style={styles.input_container} >
          <View style={styles.dropdown_container}>
            <View></View>
            <Text style={styles.dropdown_title}>India</Text>            
            <AntDesign name="caretdown" size={moderateScale(12)} color="black" style={{paddingRight:10}} />
          </View>
          <View style={styles.horizental_line}></View>
          <View style={styles.horizental_2line}></View>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonComps title="Next" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-start', // Align items to the top of the container     
    paddingVertical: verticalScale(50), // Adds padding to avoid text sticking to edges
    paddingHorizontalL:moderateScale(30)
  },
  header: {
    width: '100%', // Ensure the header takes full width
    marginBottom: moderateScale(20), // Adds space between header and other elements
    gap:verticalScale(80)
  },
  heading_container: {
    marginTop: verticalScale(15),
    gap: verticalScale(30), // Space between phone_number and description
    alignItems: 'center', // Center-align the text
  },
  phone_number: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: 'black',
    textAlign: 'center',
  },
  description: {    
    fontSize: moderateScale(14),
    color: 'gray',
    paddingHorizontal: moderateScale(10), // Avoid text sticking to the sides
    textAlign: 'center', // Center-align description text
  },
  link_description: {
    color: 'blue', // Add link style for "What's my number?"
    textDecorationLine: 'underline', // Optional: underline for link-like text
  },
  input_container: {   

  },
  horizental_line: {
    width: '80%', // Keep it 100% of parent container's width
    height: verticalScale(2),
    backgroundColor: '#09AA82',
    alignSelf: 'center', // This will center the horizontal line inside its container
  },
  horizental_2line:{
    
  },
  
  footer: {
    position: 'absolute', // Make the footer fixed at the bottom
    bottom: verticalScale(20), // Adjust spacing from the bottom
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
  },
  dropdown_container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingVertical:verticalScale(20),
    paddingHorizontal:scale(30)
  },
  dropdown_title:{
    fontSize:moderateScale(16),
    fontWeight:'600',
    color:'black'
  },
});

export default Login;
