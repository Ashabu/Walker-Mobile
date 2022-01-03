import React from 'react';
import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity
} from "react-native";
import AppDrawerNavigator from '../Navigation/Drawernavigation';
import { toggleDrawer } from '../Navigation/CostumNavigation';


const bg_image = require('../Assets/images/walker-bg.png');


const AuthBgView: React.FC = (props) => (
    <AppDrawerNavigator>
            <View style={styles.container}>
                <ImageBackground source={bg_image} resizeMode="cover" style={styles.image}>
                    {props.children}
                </ImageBackground>
            </View>
    </AppDrawerNavigator>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
    },
  
    
});


export default AuthBgView;