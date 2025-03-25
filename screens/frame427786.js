import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const frame427786 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fahiss</Text>

      <View style={styles.imageContainer}>
        <Image source={require('./sec.png')} style={styles.image} />
      </View>

      <View style={styles.textContainer}>
      <Text style={styles.chooseText}>Choose</Text>
      <Text style={styles.subText}>Your Language</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.languageButton, styles.activeButton]}>
          <Text style={[styles.buttonText, styles.activeText]}>English</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.buttonText}>عربي</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("frame7")} style={styles.startButton}>
        <Text style={styles.startText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0DCF0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    bottom:20,
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 20,
    color: 'white',
  },
  imageContainer: {
    width: 316,
    height: 292,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode:"contain",
  },
  textContainer: {
    alignSelf: 'flex-start',
    marginLeft: 40,
    marginBottom: 10,
    top:30,
  },
  chooseText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#395886',
    
  },
  subText: {
    fontSize: 14,
    color: '#395886',
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 40,
    top:10,
  },
  languageButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 152,
    height: 48,
    borderRadius: 50,
    backgroundColor: '#E9EFFB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#4A6583',
  },
  buttonText: {
    fontSize: 16,
    color: '#4A6583',
  },
  activeText: {
    color: '#FFFFFF',
  },
  startButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    width:317,
    height:48,
    
  },
  startText: {
    fontSize: 18,
    color: '#4A4A4A',
    fontWeight: 'bold',
    textAlign:"center",
    paddingTop:"5",
    paddingRight:"20",
    paddingBottom:"10",
    paddingLeft:"20",
  }
});

export default frame427786;
