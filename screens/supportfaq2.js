import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const supportfaq2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
     
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>FAQs</Text>
      </View>

      
      <Text style={styles.heading}>How can we help?</Text>
      <View style={styles.faqCard}>
        <View style={styles.faqContent}>
          <Text style={styles.question}>What is Pet parents?</Text>
          <Text style={styles.answer}>
            Lorem ipsum dolor sit amet. Eos sint obcaecati ad consequuntur odit qui iure quod. Hic nemo
            repudiandae aut maiores praesentium nam enim error ut numquam dignissimos.
          </Text>
        </View>

       
        <View style={styles.feedbackSection}>
          <Text style={styles.feedbackText}>Was this helpful?</Text>
          <View style={styles.feedbackButtons}>
            <TouchableOpacity>
              <Ionicons name="thumbs-up-outline" size={20} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={{ marginLeft: 15 }}>
              <Ionicons name="thumbs-down-outline" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

    
      <View style={styles.contactCard}>
        <Text style={styles.contactText}>
          Still need help?{'\n'}
          Please get in touch and we will be happy to help you
        </Text>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Contact us</Text>
        </TouchableOpacity>
      </View>

   
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="home-outline" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="person-outline" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <Ionicons name="chatbubble-outline" size={28} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', paddingHorizontal: 16 },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: 10,
  },
  title: { fontSize: 18, fontWeight: 'bold', marginLeft: 16 },
  heading: { textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  faqCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginVertical: 10,
    elevation: 2,
  },
  faqContent: { marginBottom: 10 },
  question: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  answer: { fontSize: 14, color: '#555' },
  feedbackSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 0.5,
    borderColor: '#E0E0E0',
    paddingTop: 10,
  },
  feedbackText: { fontSize: 14 },
  feedbackButtons: { flexDirection: 'row' },
  contactCard: {
    backgroundColor: '#F1F3F5',
    borderRadius: 10,
    padding: 16,
    marginVertical: 10,
  },
  contactText: { fontSize: 14, color: '#555', marginBottom: 10 },
  contactButton: {
    backgroundColor: '#B1C9EF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  contactButtonText: { color: '#FFF', fontSize: 14 },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#E5EFFF',
  },
  footerItem: { alignItems: 'center' },
});

export default supportfaq2;
