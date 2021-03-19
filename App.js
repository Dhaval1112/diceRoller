import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  const uri = DiceFive;

  return (
    <View style={styles.container}>
      <Image source={uri} style={styles.image} />

      <TouchableOpacity>
        <Text style={styles.txt}>Play Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = new StyleSheet.create({
  txt: {
    fontSize: 20,
    color: '#F2A365',
    marginTop: 30,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: '#30475E',
    fontWeight: 'bold',
    borderRadius: 10,
    borderWidth: 3,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#222831',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
});
export default App;
