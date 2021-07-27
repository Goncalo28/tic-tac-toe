import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to the,</Text>
      <Text style={styles.gameText}>Tic-Tac-Toe game</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Game')}
        style={styles.startButton}>
        <Text style={styles.startText}>Start Game</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
