import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Pressable,
} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  const [uri, setUri] = useState(DiceOne);
  const [uri2, setUri2] = useState(DiceSix);

  const setRandom = (diceState, randomeNumber) => {
    switch (randomeNumber) {
      case 1:
        diceState(DiceOne);
        break;
      case 2:
        diceState(DiceTwo);
        break;
      case 3:
        diceState(DiceThree);
        break;
      case 4:
        diceState(DiceFour);
        break;
      case 5:
        diceState(DiceFive);
        break;
      case 6:
        diceState(DiceSix);
        break;
    }
  };

  const playButtonTapped = () => {
    let randomeNumber = Math.floor(Math.random() * 7);
    let randomeNumber2 = Math.floor(Math.random() * 7);

    setRandom(setUri, randomeNumber);
    setRandom(setUri2, randomeNumber2);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#222831'} />
      <Pressable onPress={playButtonTapped}>
        <Image source={uri} style={styles.image} />

        <Image source={uri2} style={styles.image} />
      </Pressable>

      <TouchableOpacity onPress={playButtonTapped}>
        <Text style={styles.txt}>
          Play Game {uri} , {uri2}
        </Text>
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
  clr: {
    color: '#ffffff',
    backgroundColor: '#ffffff',
  },
});
export default App;
