import React from 'react';
import TabNavigation from './TabNavigation';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModalMusicPlayer from '../screens/ModalMusicPlayer';
import ModalMoreOptions from '../screens/ModalMoreOptions';
import { Text, useColorScheme } from 'react-native';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  const scheme = useColorScheme(); // 'light' | 'dark'
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={{ presentation: 'card', headerShown: false }}>
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="ModalMusicPlayer1" component={ModalMusicPlayer} options={{ animation: 'slide_from_bottom' }} />
        <Stack.Screen
          name="ModalMoreOptions"
          component={ModalMoreOptions}
          options={{
            animation: 'fade',
            presentation: 'transparentModal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const Some = ()=>{
  return <Text>Some Text</Text>
}