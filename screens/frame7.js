import React,{useState} from "react";
import {View,Text,Image,StyleSheet,TouchableOpacity} from "react-native";
import Checkbox from "expo-checkbox";

const frame7 =({navigation}) => {
  const [isChecked, setChecked] = useState(false);

  const handleSkipPress = () => {
    navigation.navigate("home"); 
  };

  return(
    <View style={styles.container}>
      <Text style={styles.appTitle}>Fahiss</Text>

      <View style={styles.imageContainer}>
        <Image source={require("./gallery.png")} style={styles.image}/>
      </View>

      <TouchableOpacity style={styles.signButton}>
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("CivilIDInput")}
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>

      <View style={styles.termsContainer}>
        <Checkbox value={isChecked} onValueChange={setChecked} color="#395886" />
        <Text style={styles.termsText}>
          By Signing up, I agree to Fahiss Terms and Services
        </Text>
      </View>

      <TouchableOpacity onPress={handleSkipPress}>
        <Text style={styles.skipText}>I'll do it later, Skip now</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#B1C9EF",
    alignItems:"center",
    justifyContent:"center",
    paddingHorizontal:20,

  },

  appTitle:{
    fontSize:36,
    fontWeight:"bold",
    color:"white",
    marginBottom:20,

  },

  imageContainer:{
    width:316,
    height:292,
    borderRadius:22,
    backgroundColor:"#FFFFFF",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:30,
  },
  image:{
    width:150,
    height:150,
    tintColor:"#395886",
  },

  signButton:{
    width:"100%",
    paddingVertical: 12,
    backgroundColor:"#FFFFFF",
    borderRadius:50,
    alignItems:"center",
    marginBottom:15,
  },
  signupText:{
    color:"#395886",
    fontSize:16,
    fontWeight:"bold",
  },
  loginButton:{
    width:"100%",
    paddingVertical: 12,
    backgroundColor:"#395886",
    borderRadius:50,
    alignItems:"center",
    marginBottom:15,
  },
  loginText:{
    color:"#FFFFFF",
    fontSize:18,
    fontWeight:"bold",
  },
  termsText:{
    fontSize:14,
    color:"Black",
    marginLeft: 10,
    width:247,
    height:40,
    top:4,
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  skipText:{
    fontSize:14,
    color:"#395886",
    textDecorationLine:"underline",
  }
});

export default frame7;