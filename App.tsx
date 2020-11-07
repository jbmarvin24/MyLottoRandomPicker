import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import RandomPicker from './app/components/randomPicker';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        My PCSO Lotto Random Picker using React Native
      </Text>
      <Text style={styles.subTitle}>-Batman024</Text>
      <RandomPicker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: StatusBar.currentHeight ? StatusBar.currentHeight + 20 : 100,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 15,
  },
});
