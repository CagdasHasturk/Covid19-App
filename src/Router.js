import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { GeneralTab, CountriesTab, NewsTab } from "./Tabs";
import NewDetailsPage from "./Stacks/NewDetailsPage";


const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const MainTopNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="General" tabBarOptions={{
      style: {
        backgroundColor: "#101010",
      },
      labelStyle: {
        fontSize: 16,
        fontWeight: 'bold'
      },
      indicatorStyle: {
        backgroundColor: "red"
      },
      activeTintColor: "red",
      inactiveTintColor: "gray",
    }}>
      <Tab.Screen name="WORLD" component={GeneralTab} />
      <Tab.Screen name="COUNTRIES" component={CountriesTab} />
      <Tab.Screen name="NEWS" component={NewsTab} />
    </Tab.Navigator>
  )
}


const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={MainTopNavigator} options={{
          headerTitleStyle: {
            color: "red",
          },
          headerStyle: {
            backgroundColor: "#101010",
            elevation: 0,
          },
          headerTitle: 'Covid19 Data Viewer'
        }} />
        <Stack.Screen name="News Details" component={NewDetailsPage} options={{
          headerTitleStyle: {
            color: "red",
          },
          headerTintColor: "red",
          headerStyle: {
            backgroundColor: "#101010",
            elevation: 0,
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;
