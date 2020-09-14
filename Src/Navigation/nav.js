import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import AddEmployee from '../Container/AddEmployee';
import EmployeeDetails from '../Container/EmployeeDetails';
import InboxScreen from '../Container/Inbox';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddEmployee"
        component={AddEmployee}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="EmployeeDetails"
        component={EmployeeDetails} />
      <Stack.Screen
        options={{ headerShown: false }}
        name="InboxScreen"
        component={InboxScreen} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  return (

    <Drawer.Navigator
    // drawerContentOptions={{
    //   activeTintColor: '#e91e63',
    //   itemStyle: { marginVertical: 30 },
    // }}
    // drawerContent={props => <DrawerHeader {...props} />}

    >
      <Drawer.Screen
        name="AddEmployee"
        component={AddEmployee}
      //options={{ headerShown: false }}
      />
      <Drawer.Screen
        //  options={{ headerShown: false }} 
        name="EmployeeDetails"
        component={EmployeeDetails} />
      <Drawer.Screen
        //  options={{ headerShown: false }} 
        name="InboxScreen"
        component={InboxScreen} />
    </Drawer.Navigator>
  );
}

const MainStack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>

        {/* <MainStack.Screen name="MyStack" component={MyStack} initialRouteName='MyStack' options={{ headerShown: false }} /> */}
        <MainStack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }} />



      </MainStack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;