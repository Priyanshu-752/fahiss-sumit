import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Registration Renewal</Text>
      </View>

      <ScrollView style={styles.content}>
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
      </ScrollView>

      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('VehicleTechnicalInspection1')}>
        <Text style={styles.nextButtonText}>Next</Text>
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
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 25, 
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  listItemText: {
    marginLeft: 8,
    fontSize: 18,
  },
  nextButton: {
    backgroundColor: '#3f51b5',
    padding: 16,
    borderRadius: 25,
    margin: 16,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default VehicleTechnicalInspection;