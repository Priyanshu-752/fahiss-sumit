import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import vehicleinfo from './vehicleinfo';

const vehicles = () => {
  return (
    <TouchableOpacity style={styles.container}
   on press={()=>router.navigate("/vehicleinfo")}>
    <Image source={require('./Vehicles.png')} style={styles.image}  />
    <Text style={styles.txt}>Vehicles</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
  position:"absolute",

  },
  image:{
    width: 32,
    height: 32,
    top: 24,
    left: 24,
    resizeMode:"contain",
  },
  txt:{
    textAlign:"center",
    width: 68,
    height: 17,
    top: 63,
    left: 6,    
  },
});

export default vehicles;