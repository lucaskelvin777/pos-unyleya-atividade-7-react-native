import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './pages/Home';
import DetailsScreen from './pages/Details';

type HomeStackParamList = {
  Home: undefined;
  Details: { id: number };
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" options={{
          header:() => <></>
        }} component={HomeScreen} />
        <HomeStack.Screen name="Details"
         component={DetailsScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStackNavigator;
