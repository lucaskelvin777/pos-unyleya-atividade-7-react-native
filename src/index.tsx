import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './pages/Home';
import EditScreen from './pages/Edit';
import RegisterScreen from './pages/Register';
// import DetailsScreen from './pages/Details';

type HomeStackParamList = {
  Home: undefined;
  Edit: { id: number };
  Register: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" options={{
          header: () => <></>
        }} component={HomeScreen} />
        <HomeStack.Screen name="Register"
        options={{
          title: "Registrar Produto"
        }}
          component={RegisterScreen} />
        <HomeStack.Screen name="Edit"
        options={{
          title: "Editar Produto"
        }}
          component={EditScreen} />

      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStackNavigator;
