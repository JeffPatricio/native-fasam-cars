import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../pages/Main';
import Add from '../pages/Add';
const Stack = createStackNavigator()
const cars = [
  {
    id: 1,
    brand: 'Chevrolet',
    model: 'Onix Plus',
    rank: '8'
  },
  {
    id: 2,
    brand: 'Chevrolet',
    model: 'Corsa',
    rank: '5'
  },
  {
    id: 3,
    brand: 'Volkswagen',
    model: 'T-Cross',
    rank: '6'
  }
]

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#2c387e' },
        headerBackTitleVisible: false,
        headerLayoutPreset: 'center',
        headerTintColor: '#FFF',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitleAlign: 'center'
      }}>
        <Stack.Screen name="Cars">
          {props => <Main {...props} cars={cars} />}
        </Stack.Screen>
        <Stack.Screen name="AddCar" options={{ title: "Add Car" }}>
          {props => <Add {...props} addCar={(car) => {
            car['id'] = cars.reduce((id, value) => value.id > id ? value.id : id, 0) + 1
            cars.unshift(car)
          }} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
