import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const VehicleTechnicalInspection1 = ({ navigation }) => {
  const checklistItems = [
    'Close (roll up) all the windows.',
    'Sit on the driver\'s seat.',
    'Record the front windshield from inside - Left to right & Top to bottom',
    'Start the engine and record the odometer (total no. of kilometres)',
    'Record the chassis number visible on the car body (not on sticker)',
    'Record the engine compartment.',
    'Record the front view of the car with number plate and slowly move around the car to record it from all 360 view',
    'Record dents if any without zoom.',
    'Record it without any breaks & Keep car in focus at all times.'
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Registration Renewal</Text>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>We are almost set</Text>
        {checklistItems.map((item, index) => (
          <Text key={index} style={styles.listItem}>
            {index + 1}. {item}
          </Text>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate('Submitvideo')}
      >
        <Text style={styles.nextButtonText}>Start Recording</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 10,
  },
  nextButton: {
    backgroundColor: '#395886',
    padding: 16,
    borderRadius: 25,
    margin: 16,
    alignItems: 'center',
    bottom: 70,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default VehicleTechnicalInspection1;