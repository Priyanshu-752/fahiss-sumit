import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Platform, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { height } = Dimensions.get('window');

const VehicleTechnicalInspection = ({ navigation }) => {
  const [checklist, setChecklist] = useState([
    { id: 1, text: 'My car is clean (windshield and windows are clear)', checked: false },
    { id: 2, text: 'Car is standing in clear sunlight in open area', checked: false },
    { id: 3, text: 'I know where to find the chassis number on the car.', checked: false },
    { id: 4, text: 'No zoom use in the video.', checked: false },
  ]);

  const toggleCheck = (id) => {
    setChecklist(checklist.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const allChecked = checklist.every(item => item.checked);

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Registration Renewal</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Vehicle Technical Inspection</Text>
            <Text style={styles.description}>
              Before starting, confirm that you have completed these following steps:
            </Text>
            {checklist.map(item => (
              <TouchableOpacity key={item.id} style={styles.listItem} onPress={() => toggleCheck(item.id)}>
                <Ionicons name={item.checked ? 'checkbox' : 'square-outline'} size={24} color="#000" />
                <Text style={styles.listItemText}>{item.text}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={[styles.nextButton, !allChecked && styles.nextButtonDisabled]}
            onPress={() => allChecked && navigation.navigate('VehicleTechnicalInspection1')}
            disabled={!allChecked}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F9',
  },
  headerWrapper: {
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    backgroundColor: '#B1C9EF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#B1C9EF',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    minHeight: height * 0.83, 
  },
  card: {
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 25,
    color: '#333',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  listItemText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  nextButton: {
    backgroundColor: '#395886',
    padding: 16,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 30,
    top:30,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  nextButtonDisabled: {
    backgroundColor: '#ccc',
  },
});

export default VehicleTechnicalInspection;