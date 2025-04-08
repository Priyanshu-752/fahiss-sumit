import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Paysecurely = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Registration Renewal</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Your processing fee</Text>

        <View style={styles.feeDetails}>
          <Text style={styles.feeLabel}>Processing fee</Text>
          <Text style={styles.feeAmount}>$48</Text>
        </View>
        <View style={styles.line} />

        <View style={styles.feeDetails}>
          <Text style={styles.feeLabel}>Tax</Text>
          <Text style={styles.feeAmount}>$2</Text>
        </View>
        <View style={styles.line} />

        <View style={styles.totalDetails}>
          <Text style={styles.totalLabel}>You'll Pay</Text>
          <Text style={styles.totalAmount}>$50</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.payButton}
        onPress={() => navigation.navigate('Paysecurely1')} // Navigate to Paysecurely1
      >
        <Text style={styles.payButtonText}>Pay Securely</Text>
      </TouchableOpacity>
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
    justifyContent: 'center',
    bottom: 190,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  feeDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  feeLabel: {
    fontSize: 16,
    color: '#555',
  },
  feeAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  payButton: {
    backgroundColor: '#395886',
    padding: 18,
    borderRadius: 25,
    margin: 16,
    alignItems: 'center',
    marginBottom: 40,
    bottom: 350,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  line: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Paysecurely;