import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { lottoGames, randomPick } from '../lib/lottoGames';
import Recents, { Recent } from './recents';

const resetResult = [0, 0, 0, 0, 0, 0];

const RandomPicker = () => {
  const [selectedGameId, setSelectedGameId] = useState(1);
  const [results, setResults] = useState(resetResult);
  const [recents, setRecents] = useState<Recent[]>([]);
  const [count, setCount] = useState(0);

  const handleRandomPick = () => {
    setCount((val) => ++val);
    const result = randomPick(selectedGameId);
    setResults(result);
    const newRecent: Recent = {
      count,
      result,
      id: lottoGames.filter((x) => x.id === selectedGameId)[0].id,
    };
    setRecents((oldVal) => [...oldVal, newRecent]);
  };

  const handleClear = () => {
    setRecents((val) => val.filter((x) => x.count === count - 1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.typeSection}>
          <Text style={styles.lottoGameLabel}>Lotto Game:</Text>
          <Picker
            style={styles.gamePicker}
            selectedValue={selectedGameId}
            onValueChange={(value) => {
              setResults(resetResult);
              setSelectedGameId(+value);
            }}
          >
            {lottoGames.map((game) => (
              <Picker.Item key={game.id} label={game.label} value={game.id} />
            ))}
          </Picker>
        </View>
        <View style={styles.imageSection}>
          <Image
            style={styles.image}
            source={
              lottoGames.filter((x) => x.id === selectedGameId)[0].imageSource
            }
          />
        </View>
        <View style={styles.resultSection}>
          <View style={styles.resultTextViewStyle}>
            <Text style={styles.resultText}>{results[0]}</Text>
          </View>
          <View style={styles.resultTextViewStyle}>
            <Text style={styles.resultText}>{results[1]}</Text>
          </View>
          <View style={styles.resultTextViewStyle}>
            <Text style={styles.resultText}>{results[2]}</Text>
          </View>
          <View style={styles.resultTextViewStyle}>
            <Text style={styles.resultText}>{results[3]}</Text>
          </View>
          <View style={styles.resultTextViewStyle}>
            <Text style={styles.resultText}>{results[4]}</Text>
          </View>
          <View style={styles.resultTextViewStyle}>
            <Text style={styles.resultText}>{results[5]}</Text>
          </View>
        </View>
      </View>
      <View style={styles.recentSection}>
        <Recents recents={recents} handleClear={handleClear} />
      </View>
      <View style={styles.buttonViewStyle}>
        <TouchableOpacity
          onPress={handleRandomPick}
          activeOpacity={0.6}
          style={styles.button}
        >
          <Text style={styles.buttonText}>RANDOM PICK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RandomPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginLeft: 10,
    marginRight: 10,
  },
  typeSection: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  resultSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageSection: {
    alignItems: 'center',
    marginBottom: 50,
  },
  image: {
    height: 100,
    width: 150,
    resizeMode: 'stretch',
  },
  resultText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultTextViewStyle: {
    borderRadius: 100,
    borderColor: '#E91E63',
    width: 50,
    padding: 5,
    backgroundColor: '#FFEB3B',
    marginBottom: 45,
  },
  lottoGameLabel: {
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 17,
  },
  gamePicker: { height: 30, width: 120, flex: 1, fontSize: 17 },
  buttonViewStyle: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  button: {
    height: 60,
    backgroundColor: '#2296f3',
    alignItems: 'center',
  },
  buttonText: {
    marginTop: 15,
    fontSize: 20,
    color: '#fff',
  },
  recentSection: {
    // flex: 1,
    alignItems: 'stretch',
  },
});
