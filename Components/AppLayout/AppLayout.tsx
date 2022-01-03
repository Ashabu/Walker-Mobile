import React from 'react';
import { View } from 'react-native';
import BgView from '../../Hooks/BgView';
import AppDrawerNavigator from '../../Navigation/Drawernavigation';
import AppHeader from '../AppHeader/AppHeader';






const AppLayout: React.FC = (props) => (
    <AppDrawerNavigator >
        <>
            <AppHeader />
            <BgView>
                {props.children}
            </BgView>
        </>
    </AppDrawerNavigator>)

export default AppLayout;