import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <View style={styles.header}>
          <Ionicons name="notifications-outline" size={24} color="#000" />
          <Text style={styles.title}>FAHISS</Text>
          <Ionicons name="search-outline" size={24} color="#000" />
        </View>
      </View>

      <View style={styles.navIcons}>
        {[
          { label: 'Vehicles', icon: 'car-outline', onPress: () => navigation.navigate('vehicle1') },
          { label: 'Policies', icon: 'document-text-outline', onPress: () => navigation.navigate('policies1') },
          { label: 'Status', icon: 'checkmark-circle-outline', onPress: () => navigation.navigate('TrackStatusScreen') },
          { label: 'Registration', icon: 'clipboard-outline', onPress: () => navigation.navigate('registration') },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.iconContainer} onPress={item.onPress}>
            <View style={styles.iconBox}>
              <Ionicons name={item.icon} size={32} color="#000" />
            </View>
            <Text style={styles.iconText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.promotionCard}>
          <Text style={styles.sectionTitle}>Sale/Promotions</Text>
          <View style={styles.promotionContent}>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>
            <Image source={require('./picture.png')} style={styles.promoImage} />
          </View>
          <View style={styles.exploreButtonContainer}>
            <TouchableOpacity style={styles.exploreButton}>
              <Text style={styles.exploreText}>Explore</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bestSelling}>
          <Text style={styles.sectionTitle}>Best Selling</Text>
          <View style={styles.card}>
            <Image source={require('./picture.png')} style={styles.squareImage} />
            <Text style={styles.cardTitle}>Lorem ipsum</Text>
            <Text style={styles.cardText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor....see more</Text>
            <TouchableOpacity style={styles.exploreMoreButton}>
              <Text style={styles.exploreMoreText}>Explore More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <View style={styles.footerIconBoxActive}>
            <Ionicons name="home-outline" size={28} color="#395886" />
            <Text style={styles.footerTextActive}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate("profile1")} >
          <Ionicons name="person-outline" size={28} color="white" style={{ marginBottom: 6 }} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate("supporthm")}>
          <Ionicons name="headset-outline" size={28} color="white" style={{ marginBottom: 6 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EEF2F9' },
  headerWrapper: {
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    backgroundColor: '#B1C9EF',
  },
  header:
  { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },

  title: {
    fontSize: 18,
    fontWeight: 'bold' },

  navIcons:
  { flexDirection: 'row', justifyContent: 'space-around', padding: 16 },
  iconContainer:
    { alignItems: 'center'

    },

  iconBox: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconText:
  { marginTop: 4,
    fontSize: 14
    },
  content:
  { paddingHorizontal: 16

    },
  promotionCard:
  { backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
      marginBottom: 16
      },
  promotionContent:
  { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
    },
  description: {
    fontSize: 14,
    flex: 1,
    marginRight: 8
    },
  promoImage: {
    width: 80,
    height: 80,
    },
  exploreButtonContainer: {
    alignItems: 'flex-start',
  },
  exploreButton:
  { backgroundColor: '#395886',
    borderRadius: 8,
    alignItems: 'center',
    width: 80,
    paddingVertical: 8,
    left:270,
    },
  exploreText:
    { color: '#fff',
      fontWeight: 'bold',
      fontSize: 12,
    },
  bestSelling: {
    marginBottom: 16
    },
  card: { backgroundColor: 'white', padding: 16, height:350, borderRadius: 12, alignItems: 'center' },
  squareImage: { width: 120, height: 120, marginBottom: 8 },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6
    },
  cardText: { fontSize: 14,
    textAlign: 'center',
    marginBottom: 12
    },
  exploreMoreButton: {
    backgroundColor: '#B1C9EF',
    width:163,
    height:48,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
   },
  exploreMoreText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#B1C9EF',
    alignItems: 'center',
  },
  footerItem: {
    alignItems: 'center',
    paddingVertical: 8,
  },
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
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#395886',
    marginTop: 4,
  },
});

export default home;