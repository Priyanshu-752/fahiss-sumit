import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const faqs = [
  { id: '1', question: 'How to do the insurance renewal?', answer: 'Lorem ipsum dolor sit amet. Eos sint obcaecati ad consequuntur odit qu...'},
  { id: '2', question: 'What is the insurance policy duration?', answer: 'Lorem ipsum dolor sit amet. Eos sint obcaecati ad consequuntur odit qu...'},
  { id: '3', question: 'Can I renew insurance online?', answer: 'Lorem ipsum dolor sit amet. Eos sint obcaecati ad consequuntur odit qu...'},
  { id: '4', question: 'What documents are needed for renewal?', answer: 'Lorem ipsum dolor sit amet. Eos sint obcaecati ad consequuntur odit qu...'},
  { id: '5', question: 'How to claim insurance?', answer: 'Lorem ipsum dolor sit amet. Eos sint obcaecati ad consequuntur odit qu...'}
];

const supportfaq1 = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expanded, setExpanded] = useState(null);

  const filteredFaqs = faqs.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFaqPress = (item) => {
    navigation.navigate('supportfaq2', { question: item.question, answer: item.answer });
  };

  return (
    <View style={styles.container}>
    
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>FAQs</Text>
      </View>

     
      <Text style={styles.heading}>How can we help?</Text>
      <View style={styles.searchBox}>
        <Ionicons name="search-outline" size={20} color="#999" />
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>


      <Text style={styles.sectionTitle}>Insurance Renewal</Text>
      <FlatList
        data={filteredFaqs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.faqItem}
            onPress={() => handleFaqPress(item)}
          >
            <View style={styles.faqHeader}>
              <Text style={styles.question}>{item.question}</Text>
              <Ionicons 
                name="chevron-forward-outline" 
                size={20} 
                color="#555" 
              />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', paddingHorizontal: 16 },
  headerWrapper: { flexDirection: 'row', alignItems: 'center', paddingTop: Platform.OS === 'ios' ? 50 : 20, paddingBottom: 10 },
  title: { fontSize: 18, fontWeight: 'bold', marginLeft: 16 },
  heading: { textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  searchBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F1F3F5', padding: 10, borderRadius: 10, marginBottom: 10 },
  searchInput: { flex: 1, marginLeft: 10 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  faqItem: { backgroundColor: '#FFFFFF', borderRadius: 10, padding: 16, marginBottom: 10, elevation: 2 },
  faqHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  question: { fontSize: 14, fontWeight: 'bold' }
});

export default supportfaq1;
