import React from 'react';
import { View } from 'react-native';
import BgView from '../../Hooks/BgView';
import AppDrawerNavigator from '../../Navigation/Drawernavigation';
import AppHeader from '../AppHeader/AppHeader';






const AppLayout: React.FC = (props) => (
    <AppDrawerNavigator >
        < >
            <AppHeader />
            <View >
                {props.children}
            </View>
        </>
    </AppDrawerNavigator>)

export default AppLayout;