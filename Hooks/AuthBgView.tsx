import React from 'react';
import { 
    ImageBackground, 
    SafeAreaView,
    StyleSheet, 
    View
} from 'react-native';
import AppDrawerNavigator from '../Navigation/Drawernavigation';


const bg_image = require('../Assets/images/walker-bg.png');


const AuthBgView = ({children}: any) => (
    <AppDrawerNavigator>
        <>
        <View style={styles.container}>
            <ImageBackground source={bg_image} resizeMode="cover" style={styles.image}>
                {children}
            </ImageBackground>
        </View>
        </>
        </AppDrawerNavigator>
    );


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    image: {
        flex: 1,
    },

});


export default AuthBgView;