import React, { useContext, useEffect } from 'react';
import { AppContext } from '../Context/AppContext';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './CostumNavigation';
import AuthScreen from '../Screens/Authorization/AuthScreen';
import SignInScreen from '../Screens/Authorization/SignInScreen';
import SignUpScreen from '../Screens/Authorization/SignUpScreen';
import HomePageScreen from '../Screens/HomePage/HomePageScreen';



const Stack = createStackNavigator();

const AppStack = () => {
    const {isAuthenticated} = useContext(AppContext);
    useEffect(() => {

    }, [isAuthenticated])
    return (
        !isAuthenticated? 
        <AuthScreen/>
        :
        <NavigationContainer  ref = {navigationRef}>
            <Stack.Navigator initialRouteName='HomePageScreen'>
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
                {/* <Stack.Screen
                    name='UserCardWithBarcode'
                    component={UserCardWithBarcode}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='ShopDetailsScreen'
                    component={ShopDetailsScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name='OrderGiftCardScreen'
                    component={OrderGiftCardScreen}
                    options={{
                        headerShown: false,
                    }}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppStack;