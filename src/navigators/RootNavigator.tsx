import React from 'react';
import Home from '../screens/Home';
import Products from '../screens/Products';
import { colors } from '../styles/colors';
import { createStackNavigator } from '@react-navigation/stack';
import Category from '../screens/Category';

const Stack = createStackNavigator();

function RootNavigator(){

  const stackNavigatorAttributes = {
    initialRouteName: 'Home',
    screenOptions: {
      headerStyle: { backgroundColor: colors.primary },
      headerTintColor: colors.white,
      // sceneContainerStyle: { backgroundColor: colors.tertiary },
      // drawerContentStyle: {backgroundColor: colors.white},
      // drawerInactiveTintColor: colors.tertiary,
      // drawerActiveTintColor: colors.primary,
    }
  };

  return (
    <Stack.Navigator {...stackNavigatorAttributes}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Products' component={Products} />
      <Stack.Screen name='Category' component={Category} />
    </Stack.Navigator>
  );

}

export default RootNavigator;