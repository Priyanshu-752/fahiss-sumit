import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const registrationrenew = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Registration Renewal</Text>
      </View>

      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Your Registration Renewal Journey</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.step}>1. Clear any pending fines to proceed with the renewal.</Text>
        <Text style={styles.step}>2. Purchase your Third-Party Liability Insurance directly in the app.</Text>
        <Text style={styles.step}>3. Perform the online technical inspection, upload the video for MOI review.</Text>
        <Text style={styles.step}>4. Pay the required processing fee.</Text>
        <Text style={styles.step}>5. Track the status of your registration renewal in the app.</Text>
        <Text style={styles.step}>6. Once approved, download your digital registration certificate.</Text>
        <Text style={styles.step}>7. If rejected, you will be notified with further instructions from the MOI.</Text>
      </ScrollView>

      <TouchableOpacity style={styles.proceedButton}
      onPress={() => navigation.navigate('registrationrenew1')}
      >
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 32,
    paddingHorizontal: 16,
    backgroundColor: '#B1C9EF',
  },
  title: { fontSize: 18, fontWeight: 'bold', marginLeft: 16,top:5, },
  headingContainer: { padding: 16, borderRadius: 10, marginHorizontal: 16, marginTop: 16 },
  headingText: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  content: { padding: 16 },
  step: { fontSize: 20, color: '#6B7280', marginBottom: 8 },
  proceedButton: {
    backgroundColor: '#395886',
    paddingVertical: 12,
    borderRadius: 20,
    margin: 16,
    alignItems: 'center',
    bottom:70,
  },
  proceedText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
});

export default registrationrenew;
