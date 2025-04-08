import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const supporthm = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <Ionicons name="notifications-outline" size={24} color="#000" />
          <Text style={styles.headerTitle}>FAHISS</Text>
          <Ionicons name="search-outline" size={24} color="#000" />
        </View>
      </View>

      <Text style={styles.sectionHeading}>Access Tools</Text>
      <View style={styles.navIcons}>
        {[
          { label: 'Assign Someone', icon: 'person-outline', onPress: () => navigation.navigate('supportasi') },
          { label: 'Download Document', icon: 'download-outline', onPress: () => {} },
          { label: 'Insurance Renewal', icon: 'document-text-outline', onPress: () => {} }
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.iconContainer} onPress={item.onPress}>
            <View style={styles.iconBox}>
              <Ionicons name={item.icon} size={32} color="#000" />
            </View>
            <Text style={styles.iconText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.sectionHeading}>Help & Support</Text>
      <View style={styles.supportSection}>
        {[
          { label: 'FAQs', icon: 'help-circle-outline', onPress: () => navigation.navigate("supportfaq") },
          { label: 'Chat with us', icon: 'chatbubble-outline', onPress: () => navigation.navigate('Supportchat') }
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.supportBox} onPress={item.onPress}>
            <Text style={styles.supportText}>{item.label}</Text>
            <Ionicons name={item.icon} size={20} color="#000" />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-outline" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem}>
          <View style={styles.footerIconBoxActive}>
            <Ionicons name="headset-outline" size={28} color="#395886" />
            <Text style={styles.footerTextActive}>Support</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', paddingBottom: 80 },
  headerWrapper: { paddingTop: Platform.OS === 'ios' ? 50 : 20, backgroundColor: '#B1C9EF' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  headerTitle: { fontSize: 18, fontWeight: 'bold' },
  title: { fontSize: 18, fontWeight: 'bold' },
  sectionHeading: { paddingHorizontal: 16, paddingVertical: 8, fontSize: 18, fontWeight: 'bold', color: '#333' },
  navIcons: { flexDirection: 'row', justifyContent: 'space-around', padding: 16 },
  iconContainer: { alignItems: 'center' },
  iconBox: { backgroundColor: '#FFFFFF', padding: 16, borderRadius: 16, elevation: 3 },
  iconText: { marginTop: 4, fontSize: 14 },
  supportSection: { padding: 16, borderTopWidth: 1, borderColor: '#e0e0e0' },
  supportBox: { flexDirection: 'row', justifyContent: 'space-between', padding: 12, backgroundColor: '#F3F4F6', borderRadius: 12, marginBottom: 8 },
  supportText: { fontSize: 16 },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#B1C9EF',
    alignItems: 'center',
  },
  footerItem: { alignItems: 'center', paddingVertical: 8 },
  footerIconBoxActive: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF2F9',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  footerTextActive: {
    marginLeft: 8,
    fontSize: 14,
    color: '#395886',
  },
  footerIconBox: { 
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20
  },
  footerText: { 
    marginLeft: 8,
    fontSize: 12,
    color: '#4682EF'
  },
});

export default supporthm;