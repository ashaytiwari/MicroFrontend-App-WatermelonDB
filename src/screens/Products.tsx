import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../styles/colors';

const Products = () => {

  const navigation = useNavigation<any>();

  function launchAlert() {
    Alert.alert('Welcome Alert', 'WatermelonDB is a new way of dealing with user data in React Native and React web apps.', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏠 Welcome to the Products Screen</Text>
      <Text style={styles.subtitle}>This is a dummy screen for testing UI and navigation.</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation?.goBack('Home')}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={launchAlert}>
        <Text style={styles.buttonText}>Launch Alert</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f9ff',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
});