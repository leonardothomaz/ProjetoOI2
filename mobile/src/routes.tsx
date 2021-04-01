import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import AddMedicine from './pages/AddMedicine/AddMedicine';
import Landing from './pages/Landing';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Map from './pages/Map';
import Password from './pages/Signup/Password';
import Signup from './pages/Signup/Signup';


export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen 
                    name="Landing"
                    component={Landing}
                />
                <Screen 
                    name="AddMedicine"
                    component={AddMedicine}
                />
                <Screen 
                    name="Login"
                    component={Login}
                />
                <Screen 
                    name="Signup"
                    component={Signup}
                />
                <Screen 
                    name="Password"
                    component={Password}
                />
                <Screen 
                    name="HomePage"
                    component={HomePage}
                />
                <Screen 
                    name="Map"
                    component={Map}
                />
            </Navigator>
        </NavigationContainer>
    );
}