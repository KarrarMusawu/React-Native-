import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import ContactScreen from './src/screens/ContactScreen';
import ServicesScreen from './src/screens/ServicesScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'الرئيسية'}}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={{title: 'حول الموقع'}}
        />
        <Stack.Screen
          name="Services"
          component={ServicesScreen}
          options={{title: 'الخدمات'}}
        />
        <Stack.Screen
          name="Contact"
          component={ContactScreen}
          options={{title: 'تواصل معنا'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
