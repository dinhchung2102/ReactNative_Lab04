import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet} from 'react-native';
import Screen_2a from './Screen/Screen_2a';
import Screen_2b from './Screen/Screen_2b';
import Screen_2c from './Screen/Screen_2c';
import Tiki from './Screen/Tiki';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tiki'
      screenOptions={{headerShown:false}}
      >
        <Stack.Screen name='Screen_2a' component={Screen_2a}/>
        <Stack.Screen name='Screen_2b' component={Screen_2b}/>
        <Stack.Screen name='Screen_2c' component={Screen_2c}/>
        <Stack.Screen name='Tiki' component={Tiki}/>
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
