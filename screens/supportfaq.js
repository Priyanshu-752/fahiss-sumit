import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const supportfaq = ({ navigation }) => {
  const faqItems = [
    { label: 'Insurance Renewal', onPress: () =>  navigation.navigate('supportfaq1') },
    { label: 'Insurance Policy', onPress: () => {} },
    { label: 'Fee Pending', onPress: () => {} },
    { label: 'Vehicle Inspection', onPress: () => {} },
    { label: 'Edit Personal Details', onPress: () => {} },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>FAQs</Text>
        </View>
      </View>

      <View style={styles.faqList}>
        {faqItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.faqItem} onPress={item.onPress}>
            <Text style={styles.faqText}>{item.label}</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="#000" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB' },
  headerWrapper: {
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    backgroundColor: '#B1C9EF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#B1C9EF',
    paddingBottom: 16,
    paddingVertical: 16,
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginLeft: 16 }, // Kept for potential future use
  faqList: { paddingHorizontal: 16, paddingTop: 16 },
  faqItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginBottom: 8,
  },
  faqText: { fontSize: 16 },
});

export default supportfaq;