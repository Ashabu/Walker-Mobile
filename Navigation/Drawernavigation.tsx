import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BurgerMenu from '../Components/BurgerMenu/BurgerMenu';

const Drawer = createDrawerNavigator();

const AppDrawerNavigator: React.FC = (props) => {
    return (
        <Drawer.Navigator
            drawerContent={(props: any) => (
                <BurgerMenu  {...props} />
            )}
        >
            <Drawer.Screen name="HomePageScreen2"
                children={() => (
                    <View>{props.children}</View>
                )}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>
    );
};

export default AppDrawerNavigator;