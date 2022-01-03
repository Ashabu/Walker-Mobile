import React, { useContext, useEffect } from 'react';
import { AppContext } from '../Context/AppContext';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './CostumNavigation';
import AuthScreen from '../Screens/Authorization/AuthScreen';
import SignInScreen from '../Screens/Authorization/SignInScreen';
import SignUpScreen from '../Screens/Authorization/SignUpScreen';
import HomePageScreen from '../Screens/HomePage/HomePageScreen';
import WalkServiceScreen from '../Screens/WalkService/WalkServiceScreen';
import WalkAndPlayServiceScreen from '../Screens/WalkAndPlayService/WalkAndPlayServiceScreen';
import VacineServiceScreen from '../Screens/VacineService/VacineServiceScreen';
import InsuranceServiceScreen from '../Screens/InsuranceService/InsuranceServiceScreen';
import ProfileScreen from '../Screens/Profile/ProfileScreen';






const Stack = createStackNavigator();

const AppStack = () => {
    // const {isAuthenticated} = useContext(AppContext);
    // useEffect(() => {

    // }, [isAuthenticated])
    return (
        
        <NavigationContainer  ref = {navigationRef}>
            <Stack.Navigator initialRouteName='AuthScreen'>
            <Stack.Screen
                    name='AuthScreen'
                    component={AuthScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='HomePageScreen'
                    component={HomePageScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='HomePageScreen2'
                    component={HomePageScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='SignInScreen'
                    component={SignInScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='SignUpScreen'
                    component={SignUpScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='WalkServiceScreen'
                    component={WalkServiceScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='WalkAndPlayServiceScreen'
                    component={WalkAndPlayServiceScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='VacineServiceScreen'
                    component={VacineServiceScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                 <Stack.Screen
                    name='InsuranceServiceScreen'
                    component={InsuranceServiceScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                 <Stack.Screen
                    name='ProfileScreen'
                    component={ProfileScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppStack;