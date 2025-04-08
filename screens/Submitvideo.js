import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Submitvideo = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Registration Renewal</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.reviewText}>
          Review the Video before Submitting (make sure all parts are recorded)
        </Text>

        <View style={styles.videoContainer}>
          <Text style={styles.videoPlaceholderText}>Recorded Video</Text>
          <Ionicons name="play-circle-outline" size={60} color="#fff" style={styles.playIcon} />
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => navigation.navigate('Paysecurely')} 
        >
          <Text style={styles.buttonText}>Submit Video</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.retakeButton}>
          <Text style={styles.buttonText}>Retake Video</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 16,
    backgroundColor: '#B1C9EF',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  backButton: {
    marginRight: 16,
    top: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    top: 20,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 150,
  },
  reviewText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  videoContainer: {
    width: '90%',
    aspectRatio: 16 / 9,
    backgroundColor: '#395886',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    width:357,
    height: 200,
  },
  videoPlaceholderText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  playIcon: {
    position: 'absolute',
    opacity: 0.8,
  },
  submitButton: {
    backgroundColor: '#395886',
    padding: 18,
    borderRadius: 25,
    width: '90%',
    alignItems: 'center',
    marginBottom: 15,
  },
  retakeButton: {
    backgroundColor: '#e0e0e0',
    padding: 18,
    borderRadius: 25,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Submitvideo;