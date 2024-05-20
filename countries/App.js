import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import Cities from './src/Cities/Cities'
import AddCity from './src/AddCity/AddCity'
import Country from './src/Countries/Countries'
import AddCountries from './src/AddCountries/AddCountries'

const Tab = createBottomTabNavigator();

export default class App extends Component {
  state = {
    cities: [],
    countries: []
  }

  addCity = (city) => {
    const cities = this.state.cities
    cities.push(city)
    this.setState({ cities })
  }
  addcountry = (country) => {
    const countries = this.state.countries
    countries.push(country)
    this.setState({ countries })
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Countries" initialParams={{ cities: this.state.cities, addCity: this.addCity }} component={Cities} />
          <Tab.Screen name="Add Country" initialParams={{ cities: this.state.cities, addCity: this.addCity }} component={AddCity} />
          <Tab.Screen name="Cities" initialParams={{ countries: this.state.countries, addcountry: this.addcountry }} component={Country} />
          <Tab.Screen name="Add City" initialParams={{ countries: this.state.countries, addcountry: this.addcountry }} component={AddCountries} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}