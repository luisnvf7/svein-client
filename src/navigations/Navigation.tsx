import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from  "@interfaces/Navigations/RootStackParamList"
import Register from '@views/Register';
import MainScreen from '@containers/MainScreen'
import Login from '@views/Login';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{headerShown: false, contentStyle: {backgroundColor: '#e5e9f0'}}}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation