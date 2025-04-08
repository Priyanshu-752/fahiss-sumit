import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Supportchat = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Support Chat</Text>
      </View>

      <TouchableOpacity style={styles.deleteAllButton}>
        <Text style={styles.deleteAllButtonText}>DELETE ALL TICKETS</Text>
      </TouchableOpacity>

      <View style={styles.chatCard}>
        <View style={styles.chatCardHeader}>
          <Text style={styles.chatCardTitle}>Previous chat</Text>
          <Text style={styles.chatCardStatus}>Closed</Text>
        </View>
        <Text style={styles.chatCardContent}>
          Lorem ipsum dolor sit amet. Eos sint obcaecati ad consequuntur odit qui quod...
        </Text>
        <Text style={styles.chatCardDate}>29 Aug 24, 11:14 PM</Text>
      </View>

      <TouchableOpacity style={styles.newChatButton}>
        <Text style={styles.newChatButtonText}>Start new chat</Text>
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
  deleteAllButton: {
    backgroundColor: '#fff',
    padding: 12,
    margin: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  deleteAllButtonText: {
    color: '#3f51b5',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatCard: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
  chatCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  chatCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatCardStatus: {
    color: 'red',
    fontSize: 14,
  },
  chatCardContent: {
    fontSize: 14,
    marginBottom: 8,
  },
  chatCardDate: {
    fontSize: 12,
    color: '#888',
  },
  newChatButton: {
    backgroundColor: '#395886',
    padding: 18,
    borderRadius: 25,
    margin: 16,
    alignItems: 'center',
    marginBottom: 40,
    top:450,
  },
  newChatButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Supportchat;