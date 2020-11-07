import React from 'react';
import { FlatList, View, Text, StyleSheet, Image } from 'react-native';
import { lottoGames } from '../lib/lottoGames';

export interface Recent {
  count: number;
  id: number;
  result: number[];
}

export interface RecentsProps {
  recents: Recent[];
  handleClear: () => void;
}

const Item = (props: any) => (
  <View style={styles.itemsViewStyle}>
    <Image
      style={{ width: 55, height: 45 }}
      source={lottoGames.filter((x) => x.id === props.id)[0].imageSource}
      resizeMode="stretch"
    />
    <View style={styles.resultSection}>
      <View style={styles.resultTextViewStyle}>
        <Text style={styles.resultText}>{props.result[0]}</Text>
      </View>
      <View style={styles.resultTextViewStyle}>
        <Text style={styles.resultText}>{props.result[1]}</Text>
      </View>
      <View style={styles.resultTextViewStyle}>
        <Text style={styles.resultText}>{props.result[2]}</Text>
      </View>
      <View style={styles.resultTextViewStyle}>
        <Text style={styles.resultText}>{props.result[3]}</Text>
      </View>
      <View style={styles.resultTextViewStyle}>
        <Text style={styles.resultText}>{props.result[4]}</Text>
      </View>
      <View style={styles.resultTextViewStyle}>
        <Text style={styles.resultText}>{props.result[5]}</Text>
      </View>
    </View>
  </View>
);

const Recents = (props: RecentsProps) => {
  // @ts-ignore
  const renderItem = ({ item }) => <Item id={item.id} result={item.result} />;

  const recents = [...props.recents];
  recents.pop();
  recents.sort((a, b) => b.count - a.count);

  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <Text style={styles.title}>Recents</Text>
        {recents.length > 0 ? (
          <Text style={styles.clear} onPress={props.handleClear}>
            clear
          </Text>
        ) : null}
      </View>
      <FlatList
        style={{ height: '60%' }}
        data={recents}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Recents;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  titleSection: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  title: { fontStyle: 'italic', marginBottom: 5 },
  clear: {
    textAlign: 'right',
    position: 'absolute',
    right: 45,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  itemsViewStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  resultGame: {
    fontSize: 15,
    marginRight: 10,
    textAlignVertical: 'center',
  },
  resultSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    paddingTop: 5,
  },
  resultTextViewStyle: {
    borderRadius: 100,
    borderColor: '#E91E63',
    width: 35,
    padding: 5,
    backgroundColor: '#FFEB3B',
    marginBottom: 10,
  },
  resultText: {
    fontSize: 18,
    textAlign: 'center',
  },
});
