import React from 'react';
import { Root } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './components/pages/HomePage';
import SettingsPage from './components/pages/SettingsPage';
import StatisticsPage from './components/pages/StatisticsPage';
import Footer from './components/Footer';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Root>
      <NavigationContainer>
        <Tab.Navigator tabBar={Footer} initialRouteName="Home">
          <Tab.Screen name="Home" component={HomePage} />
          <Tab.Screen name="Statistics" component={StatisticsPage} />
          <Tab.Screen name="Settings" component={SettingsPage} />
        </Tab.Navigator>
      </NavigationContainer>
    </Root>
  );
};

export default App;
