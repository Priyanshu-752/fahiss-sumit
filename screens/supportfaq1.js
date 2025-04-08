import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Platform, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const faqsData = [
  { id: '1', question: 'How to do the insurance renewal?', answer: 'Lorem ipsum dolor sit amet. Eos sint obcaecati ad consequuntur odit qui quod...' },
  { id: '2', question: 'What is the insurance policy duration?', answer: 'Lorem ipsum dolor sit amet. Eos sint obcaecati ad consequuntur odit qui quod...' },
  { id: '3', question: 'Can I renew insurance online?', answer: 'Lorem ipsum dolor sit amet. Eos sint obcaecati ad consequuntur odit qui quod...' },
  { id: '4', question: 'What documents are needed for renewal?', answer: 'Lorem ipsum dolor sit amet. Eos sint obcaecati ad consequuntur odit qui quod...' },
  { id: '5', question: 'How to claim insurance?', answer: 'Lorem ipsum dolor sit amet. Eos sint obcaecati ad consequuntur odit qui quod...' },
  { id: '6', question: 'Another frequently asked question?', answer: 'Lorem ipsum dolor sit amet. Eos sint obcaecati ad consequuntur odit qui quod...' },
  { id: '7', question: 'One more question here?', answer: 'Lorem ipsum dolor sit amet. Eos sint obcaecati ad consequuntur odit qui quod...' },
];

const supportfaq1 = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  const filteredFaqs = faqsData.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const navigateToFAQ2 = (item) => {
    navigation.navigate('supportfaq2', { question: item.question, answer: item.answer });
  };

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
          <View style={styles.faqItem}>
            <TouchableOpacity style={styles.questionContainer} onPress={() => toggleExpand(item.id)}>
              <Text style={styles.question}>{item.question}</Text>
              <Ionicons
                name={expandedId === item.id ? 'chevron-up-outline' : 'chevron-down-outline'}
                size={20}
                color="#555"
              />
            </TouchableOpacity>
            {expandedId === item.id && (
              <TouchableOpacity onPress={() => navigateToFAQ2(item)} style={styles.answerContainer}>
                <Text style={styles.answer}>{item.answer}</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  headerWrapper: {
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    backgroundColor: '#B1C9EF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    justifyContent: 'flex-start',
    width: '100%',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  heading: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F3F5',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 16, 
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    marginHorizontal: 16,
  },
  faqItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
    padding: 16,
    marginHorizontal: 16, 
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  answerContainer: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  answer: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
});

export default supportfaq1;