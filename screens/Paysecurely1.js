import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Paysecurely1 = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const paymentOptions = [
    { id: 'google', label: 'Google Pay', icon: require('./google-pay-icon.png') },
    { id: 'apple', label: 'Apple Pay', icon: require('./apple-pay-icon.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Registration Renewal</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Saved payment options</Text>

        {paymentOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionContainer,
              selectedOption === option.id && styles.selectedOption,
            ]}
            onPress={() => setSelectedOption(option.id)}
          >
            <View style={styles.radioContainer}>
              <View style={[
                styles.radio,
                selectedOption === option.id && styles.selectedRadio,
              ]} />
            </View>
            <Text style={styles.optionLabel}>{option.label}</Text>
            <Image source={option.icon} style={styles.optionIcon} />
          </TouchableOpacity>
        ))}
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#e0e0e0',
  },
  radioContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  radio: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  selectedRadio: {
    backgroundColor: '#3f51b5',
  },
  optionLabel: {
    flex: 1,
    fontSize: 16,
  },
  optionIcon: {
    width: 40,
    height: 20,
    resizeMode: 'contain',
  },
});

export default Paysecurely1;