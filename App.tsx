import React from 'react';
import { Platform, UIManager } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import GameBoard from './screens/GameBoard';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Game" component={GameBoard} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
